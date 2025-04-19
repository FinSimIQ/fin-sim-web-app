import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  VStack,
  HStack,
  Divider,
  FormControl,
  NumberInput,
  NumberInputField,
  Badge,
} from "@chakra-ui/react";

const MarketSellForm = ({ stockData, portfolioData, onSubmit }) => {
  const [amount, setAmount] = useState("");
  const [shares, setShares] = useState("");
  const [error, setError] = useState("");

  // Calculate values
  const totalValue =
    shares && stockData?.currentPrice
      ? parseFloat(shares) * parseFloat(stockData.currentPrice)
      : 0;

  const profitLoss =
    portfolioData?.avgPrice && shares
      ? totalValue - parseFloat(shares) * parseFloat(portfolioData.avgPrice)
      : 0;

  const handleAmountChange = (value) => {
    setAmount(value);
    if (stockData?.currentPrice) {
      setShares(
        (parseFloat(value) / parseFloat(stockData.currentPrice)).toFixed(2)
      );
    }
  };

  const handleSharesChange = (value) => {
    setShares(value);
    if (stockData?.currentPrice) {
      setAmount(
        (parseFloat(value) * parseFloat(stockData.currentPrice)).toFixed(2)
      );
    }
  };

  const validateInput = () => {
    if (!shares || parseFloat(shares) <= 0) {
      setError("Enter valid shares");
      return false;
    }
    if (
      portfolioData?.sharesOwned &&
      parseFloat(shares) > parseFloat(portfolioData.sharesOwned)
    ) {
      setError(`Only ${portfolioData.sharesOwned} shares available`);
      return false;
    }
    setError("");
    return true;
  };

  return (
    <VStack spacing={4} align="stretch">
      <Box>
        <Text fontWeight="bold" mb={2}>
          Sell Amount
        </Text>
        <HStack spacing={4}>
          <FormControl>
            <NumberInput value={amount} onChange={handleAmountChange}>
              <NumberInputField placeholder="$" borderColor="gray.300" />
            </NumberInput>
          </FormControl>
          <FormControl>
            <NumberInput value={shares} onChange={handleSharesChange}>
              <NumberInputField placeholder="Shares" borderColor="gray.300" />
            </NumberInput>
          </FormControl>
        </HStack>
        {error && (
          <Text color="red.500" fontSize="sm" mt={1}>
            {error}
          </Text>
        )}
      </Box>

      <Divider />

      <Box>
        <HStack justify="space-between">
          <Box>
            <Text fontWeight="bold">{stockData?.symbol}</Text>
            <Text fontSize="sm" color="gray.500">
              {stockData?.name}
            </Text>
          </Box>
          <Box textAlign="right">
            <Text fontWeight="bold">
              ${stockData?.currentPrice?.toFixed(2)}
            </Text>
            <Badge
              colorScheme={stockData?.change >= 0 ? "green" : "red"}
              fontSize="sm"
            >
              {stockData?.change >= 0 ? "+" : ""}
              {stockData?.change?.toFixed(2)} (
              {stockData?.changePercent?.toFixed(2)}%)
            </Badge>
          </Box>
        </HStack>

        <HStack mt={4} spacing={4}>
          <VStack align="flex-start" spacing={0}>
            <Text fontSize="sm" color="gray.500">
              Previous
            </Text>
            <Text fontSize="sm">${stockData?.previousClose?.toFixed(2)}</Text>
          </VStack>
          <VStack align="flex-start" spacing={0}>
            <Text fontSize="sm" color="gray.500">
              High
            </Text>
            <Text fontSize="sm">${stockData?.high?.toFixed(2)}</Text>
          </VStack>
          <VStack align="flex-start" spacing={0}>
            <Text fontSize="sm" color="gray.500">
              Low
            </Text>
            <Text fontSize="sm">${stockData?.low?.toFixed(2)}</Text>
          </VStack>
        </HStack>
      </Box>

      <Divider />

      <Box>
        <HStack justify="space-between" mb={2}>
          <Text>Market price per share</Text>
          <Text fontWeight="bold">${stockData?.currentPrice?.toFixed(2)}</Text>
        </HStack>
        <HStack justify="space-between" mb={2}>
          <Text>Total Value</Text>
          <Text fontWeight="bold">${totalValue.toFixed(2)}</Text>
        </HStack>
        <HStack justify="space-between">
          <Text>Profit/Loss:</Text>
          <Text
            fontWeight="bold"
            color={profitLoss >= 0 ? "green.500" : "red.500"}
          >
            ${profitLoss.toFixed(2)}
          </Text>
        </HStack>
      </Box>

      <Button
        colorScheme="red"
        size="lg"
        onClick={() =>
          validateInput() &&
          onSubmit({
            type: "MARKET",
            symbol: stockData.symbol,
            shares: parseFloat(shares),
            price: parseFloat(stockData.currentPrice),
          })
        }
        isDisabled={!shares || !!error}
      >
        Sell
      </Button>
    </VStack>
  );
};

export default MarketSellForm;
