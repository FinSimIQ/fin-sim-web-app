import React from "react";
import { Box, Grid, Text, Tooltip, Flex, Icon, Divider} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

// Display the stock header with symbol, company name, current price, and change
export const StockHeader = ({
  symbol,
  companyName,
  currentPrice,
  priceChange,
}) => (
  /*
  <Box borderBottom="1px solid #e2e8f0" pb={4} mb={4}>
    <Text fontSize="3xl" fontWeight="bold">
      {symbol} – {companyName}
    </Text>
    <Text fontSize="lg">
      Price: ${currentPrice.toFixed(2)} ({priceChange})
    </Text>
  </Box>*/
  <Box>
    <Flex direction="column" gap={1}>
      <Text fontSize="2xl" fontWeight="bold" letterSpacing="-0.5px">
        {symbol} – {companyName}
      </Text>
      <Flex align="center" gap={2}>
        <Text fontSize="xl" fontWeight="semibold">
          ${currentPrice.toFixed(2)}
        </Text>
        <Text
          fontSize="lg"
          fontWeight="medium"
          color={priceChange.startsWith('+') ? "green.500" : "red.500"}
        >
          {priceChange}
        </Text>
      </Flex>
    </Flex>
  </Box>
);

// Display a single performance metric along with a tooltip
export const PerformanceMetric = ({ label, value, tooltipText }) => (
  <Box border="1px solid #e2e8f0" borderRadius="md" p={3} textAlign="center">
    <Grid templateColumns="1fr auto" alignItems="center" gap={2}>
      <Text fontWeight="semibold">{label}</Text>
      <Tooltip label={tooltipText} aria-label={`${label} info tooltip`}>
        <span>
          <InfoIcon />
        </span>
      </Tooltip>
    </Grid>
    <Text mt={2}>{value}</Text>
  </Box>
);

// Arrange multiple performance metrics in a grid
export const PerformanceDetails = ({ metrics }) => (
  /*
  <Grid templateColumns="repeat(auto-fit, minmax(150px, 1fr))" gap={4} mt={4}>
    {metrics.map((metric, index) => (
      <PerformanceMetric key={index} {...metric} />
    ))}
  </Grid>*/
  <Box>
    <Grid
      templateColumns={{
        base: "1fr",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)"
      }}
      gap={4}
    >
      {metrics.map((metric, index) => (
        <PerformanceMetric key={index} {...metric} />
      ))}
    </Grid>
  </Box>
);

// Analyst forecast showing consensus rating and price target
export const AnalystForecast = ({ consensusRating, priceTarget }) => (
  /*
  <Box border="1px solid #e2e8f0" borderRadius="md" p={4} mt={4}>
    <Text fontSize="2xl" fontWeight="bold" mb={2}>
      Analyst Forecast
    </Text>
    <Text>Consensus Rating: {consensusRating}</Text>
    <Text>Price Target: ${priceTarget}</Text>
  </Box>*/
  <Box
      borderRadius="lg"
      bg="white"
      boxShadow="0px -1px 3px rgba(0, 0, 0, 0.03), 0px 1px 3px rgba(0, 0, 0, 0.03), -1px 0px 3px rgba(0, 0, 0, 0.03), 1px 0px 3px rgba(0, 0, 0, 0.03)"
      p={4}
      width="100%"
      height="fit-content"
    >
      <Flex justify="space-between" align="center" mb={3}>
        <Text fontSize="lg" fontWeight="semibold">Analyst Forecast</Text>
        <Tooltip label="Analyst consensus and price target" placement="top">
          <Icon as={InfoIcon} color="black.400" fontSize="md" />
        </Tooltip>
      </Flex>

      <Flex position="relative" direction="row" justify="space-between" align="flex-start">
        {/* Left side - Consensus */}
        <Box width="48%">
          <Text fontSize="md" color="gray.600" mb={1}>Consensus</Text>
          <Text fontSize="md" fontWeight="semibold">
            {consensusRating}
          </Text>
        </Box>

        {/* Vertical Divider */}
        <Box
          position="absolute"
          left="50%"
          height="100%"
          transform="translateX(-50%)"
        >
          <Divider orientation="vertical" borderColor="gray.200" />
        </Box>

        {/* Right side - Price Target */}
        <Box width="48%">
          <Text fontSize="md" color="gray.600" mb={1} textAlign="right">Price Target</Text>
          <Text fontSize="md" fontWeight="semibold" textAlign="right">
            {priceTarget.startsWith("$") ? priceTarget : `$${priceTarget}`}
          </Text>
        </Box>
      </Flex>
  </Box>
);

// Main StockDetails component that combines all sections
const StockDetails = ({ stockData }) => {
  const {
    symbol,
    companyName,
    currentPrice,
    priceChange,
    metrics,
    analystForecast,
  } = stockData;

  const fetchStockData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8081/api/stocks/${symbol}`
      );
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error("Error fetching stock data:", error);
      return null;
    }
  };

  const getPredictions = async () => {
    try {
      const response = await fetch(
        `http://localhost:8081/api/stock-prediction/predict/${symbol}`
      );
      const result = await response.json();
      console.log(result);

      // show this information from the result object to the user:
      // "peRatio": 31.27, (above 30 means that the stock is overvalued)
      // "pbRatio": 44.33, (above 1 means that the stock is overvalued)
      // "debtToEquity": null, (if null, then the company is not in debt)
      // "profitMargin": 0.243, (above 0 means that the company is profitable)
      // "revenueGrowth": 0.04 (above 0 means that the company is growing)
      // "macdSignal": "neutral", (if macdSignal is neutral, then the stock is not trending up or down)
      // "rsiValue": 43.3715, (if rsiValue is between 30 and 70, then the stock is not trending up or down)
      // "movingAverages": {
      //   "sma20": 206.201, (20 day simple moving average)
      //   "sma50": 221.8119 (50 day simple moving average)
      // }
      // "volumeTrend": "decreasing", (if volumeTrend is decreasing, then the stock is not trending up or down)
      // "priceVolatility": 4.1573905941748635 (if priceVolatility is above 2, then the stock is volatile)
      // "predictedPrice": 179.2518 (the predicted price of the stock)
      // "predictedROI": -9 (the predicted return on investment of the stock)

      /**
       * The result will be an object with the following structure:
       * {
          "symbol": "AAPL",
          "currentPrice": 196.98,
          "predictedPrice": 179.2518,
          "predictedROI": -9,
          "timeframe": "medium",
          "confidenceScore": 35,
          "analysis": {
            "technical": {
              "totalScore": 0,
              "rules": [
                {
                  "name": "RSI Analysis",
                  "value": 0,
                  "weight": 2,
                  "weightedValue": 0
                },
                {
                  "name": "Moving Averages",
                  "value": 0,
                  "weight": 1,
                  "weightedValue": 0
                },
                {
                  "name": "Volume Analysis",
                  "value": 0,
                  "weight": 1,
                  "weightedValue": 0
                }
              ],
              "indicators": {
                "macdSignal": "neutral",
                "rsiValue": 43.3715,
                "movingAverages": {
                  "sma20": 206.201,
                  "sma50": 221.8119
                },
                "volumeTrend": "decreasing",
                "priceVolatility": 4.1573905941748635
              }
            },
            "fundamental": {
              "totalScore": -3,
              "rules": [
                {
                  "name": "P/E Ratio",
                  "value": -1,
                  "weight": 2,
                  "weightedValue": -2
                },
                {
                  "name": "Debt to Equity",
                  "value": 0,
                  "weight": 1,
                  "weightedValue": 0
                },
                {
                  "name": "Profit Margin",
                  "value": -1,
                  "weight": 1,
                  "weightedValue": -1
                }
              ],
              "indicators": {
                "peRatio": 31.27,
                "pbRatio": 44.33,
                "debtToEquity": null,
                "profitMargin": 0.243,
                "revenueGrowth": 0.04
              }
            }
          }
        }
       */

      return result;
    } catch (error) {
      console.error("Error fetching stock predictions:", error);
      return null;
    }
  };

  return (
    <Box p={6}>
      <StockHeader
        symbol={symbol}
        companyName={companyName}
        currentPrice={currentPrice}
        priceChange={priceChange}
      />
      <PerformanceDetails metrics={metrics} />
      <AnalystForecast
        consensusRating={analystForecast.consensusRating}
        priceTarget={analystForecast.priceTarget}
      />
    </Box>
  );
};

export default StockDetails;
