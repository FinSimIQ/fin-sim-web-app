import React from 'react';
import { Box, Grid, Text, Tooltip } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

// Display the stock header with symbol, company name, current price, and change
export const StockHeader = ({ symbol, companyName, currentPrice, priceChange }) => (
  <Box borderBottom="1px solid #e2e8f0" pb={4} mb={4}>
    <Text fontSize="3xl" fontWeight="bold">
      {symbol} – {companyName}
    </Text>
    <Text fontSize="lg">
      Price: ${currentPrice.toFixed(2)} ({priceChange})
    </Text>
  </Box>
);

// Display a single performance metric along with a tooltip
export const PerformanceMetric = ({ label, value, tooltipText }) => (
  <Box border="1px solid #e2e8f0" borderRadius="md" p={3} textAlign="center">
    <Grid templateColumns="1fr auto" alignItems="center" gap={2}>
      <Text fontWeight="bold">{label}</Text>
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
  <Grid templateColumns="repeat(auto-fit, minmax(150px, 1fr))" gap={4} mt={4}>
    {metrics.map((metric, index) => (
      <PerformanceMetric key={index} {...metric} />
    ))}
  </Grid>
);

// Analyst forecast showing consensus rating and price target
export const AnalystForecast = ({ consensusRating, priceTarget }) => (
  <Box border="1px solid #e2e8f0" borderRadius="md" p={4} mt={4}>
    <Text fontSize="2xl" fontWeight="bold" mb={2}>
      Analyst Forecast
    </Text>
    <Text>Consensus Rating: {consensusRating}</Text>
    <Text>Price Target: ${priceTarget}</Text>
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
