import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Button,
  VStack,
  HStack,
  Divider,
  FormControl,
  NumberInput,
  NumberInputField,
  Badge,
  useToast,
} from "@chakra-ui/react";

const MarketBuyForm = ({ stockData, portfolioData, onSubmit }) => {
  const [amount, setAmount] = useState("");
  const [shares, setShares] = useState("");
  const [error, setError] = useState("");
  const toast = useToast();

  // Calculate values
  const totalCost =
    shares && stockData?.currentPrice
      ? parseFloat(shares) * parseFloat(stockData.currentPrice)
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

    if (totalCost > portfolioData?.liquidCash) {
      setError("Insufficient funds");
      return false;
    }

    setError("");
    return true;
  };

  const handleBuy = () => {
    if (validateInput()) {
      onSubmit({
        type: "MARKET",
        symbol: stockData.symbol,
        shares: parseFloat(shares),
        price: parseFloat(stockData.currentPrice),
      });
      toast({
        title: "Buy order submitted",
        description: `You are buying ${shares} shares at market price of $${stockData.currentPrice}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      <Box>
        <Text fontWeight="bold" mb={2}>
          Buy Amount
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
          <Text>Total Cost</Text>
          <Text fontWeight="bold">${totalCost.toFixed(2)}</Text>
        </HStack>
        <HStack justify="space-between">
          <Text>Available Cash</Text>
          <Text fontWeight="bold">${portfolioData?.liquidCash?.toFixed(2)}</Text>
        </HStack>
      </Box>

      <Button
        colorScheme="green"
        size="lg"
        onClick={handleBuy}
        isDisabled={!shares || !!error}
      >
        Buy
      </Button>
    </VStack>
  );
};

export default MarketBuyForm;