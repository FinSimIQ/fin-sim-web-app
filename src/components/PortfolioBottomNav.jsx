import React from "react";
import { Box, Flex, Text, Button, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const PortfolioBottomNav = ({ portfolioData }) => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue("white", "gray.100");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  // Calculate total invested amount
  const totalInvested = portfolioData ?
    portfolioData.totalPortfolioValue - portfolioData.liquidCash : 0;

  const handleExploreStocks = () => {
    navigate("/stockexplorer");
  };

  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      width="100%"
      bg={bgColor}
      borderTop="1px solid"
      borderColor={borderColor}
      boxShadow="0 -4px 10px rgba(0, 0, 0, 0.05)"
      py={3}
      zIndex={10}
    >
      <Flex
        maxW="container.xl"
        mx="auto"
        px={4}
        justifyContent="space-between"
        alignItems="center"
        flexDir={{ base: "column", md: "row" }}
        gap={{ base: 3, md: 0 }}
      >
        <Flex
          justifyContent="space-between"
          width={{ base: "100%", md: "auto" }}
          gap={{ base: 2, md: 4 }}
        >
          <Box textAlign="center">
            <Text color="gray.500" fontSize="xs">
              Available Cash
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
              ${portfolioData?.liquidCash.toFixed(2)}
            </Text>
          </Box>

          <Text display={{ base: "none", md: "flex" }} alignSelf="center">+</Text>

          <Box textAlign="center">
            <Text color="gray.500" fontSize="xs">
              Total Invested
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
              ${totalInvested.toFixed(2)}
            </Text>
          </Box>

          <Text display={{ base: "none", md: "flex" }} alignSelf="center">+</Text>

          <Box textAlign="center">
            <Text color="gray.500" fontSize="xs">
              Profit/Loss
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="bold"
              color={portfolioData?.unrealizedGains >= 0 ? "green.500" : "red.500"}
            >
              {portfolioData?.unrealizedGains >= 0 ? "+" : "-"}
              ${Math.abs(portfolioData?.unrealizedGains || 0).toFixed(2)}
            </Text>
          </Box>

          <Text display={{ base: "none", md: "flex" }} alignSelf="center">=</Text>

          <Box textAlign="center">
            <Text color="gray.500" fontSize="xs">
              Portfolio Value
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
              ${portfolioData?.totalPortfolioValue.toFixed(2)}
            </Text>
          </Box>
        </Flex>

        <Button
          colorScheme="green"
          size={{ base: "md", md: "md" }}
          onClick={handleExploreStocks}
          width={{ base: "100%", md: "auto" }}
          mt={{ base: 2, md: 0 }}
        >
          Explore More Stocks
        </Button>
      </Flex>
    </Box>
  );
};

export default PortfolioBottomNav;