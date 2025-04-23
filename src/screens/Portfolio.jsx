import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Button,
  Flex,
  Heading,
  useToast,
} from "@chakra-ui/react";
import Navbar from "../components/NavBar";
import useStore from "../store/useStore";

const PortfolioBottomNav = ({ portfolioData }) => {
  const bgColor = "white";
  const borderColor = "gray.200";

  // Calculate total invested amount
  const totalInvested = portfolioData ?
    portfolioData.totalPortfolioValue - portfolioData.liquidCash : 0;

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
      py={4}
      zIndex={10}
    >
      <Flex
        maxW="container.xl"
        mx="auto"
        px={4}
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          justifyContent="space-between"
          width={{ base: "100%", md: "80%" }}
          gap={{ base: 2, md: 4 }}
        >
          <Box textAlign="center">
            <Text color="gray.500" fontSize="xs">
              Available Cash
            </Text>
            <Text fontSize={{ base: "md", md: "xl" }} fontWeight="bold">
              ${portfolioData?.liquidCash.toFixed(2)}
            </Text>
          </Box>

          <Text display={{ base: "none", md: "flex" }} alignSelf="center">+</Text>

          <Box textAlign="center">
            <Text color="gray.500" fontSize="xs">
              Total Invested
            </Text>
            <Text fontSize={{ base: "md", md: "xl" }} fontWeight="bold">
              ${totalInvested.toFixed(2)}
            </Text>
          </Box>

          <Text display={{ base: "none", md: "flex" }} alignSelf="center">+</Text>

          <Box textAlign="center">
            <Text color="gray.500" fontSize="xs">
              Profit/Loss
            </Text>
            <Text
              fontSize={{ base: "md", md: "xl" }}
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
            <Text fontSize={{ base: "md", md: "xl" }} fontWeight="bold">
              ${portfolioData?.totalPortfolioValue.toFixed(2)}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

const Portfolio = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [portfolioData, setPortfolioData] = useState(null);
  const [stocksData, setStocksData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = useStore(state => state.isAuthenticated);
  const user = useStore(state => state.user?.id);

  useEffect(() => {
    console.log("Current user in store:", user);
    console.log("User ID:", user?.id);
    console.log("Is authenticated:", isAuthenticated);
  }, [user, isAuthenticated]);

  // Fetch portfolio data
  useEffect(() => {
    const fetchPortfolioData = async () => {
        setIsLoading(true);
        try {
          const userId = user?.id;
          console.log("Fetching portfolio for user ID:", userId);

          const authToken = localStorage.getItem("authToken");

          // Make the fetch request
          const response = await fetch(`http://localhost:8081/api/portfolio/value/${userId}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${authToken}`
            }
          });

          if (!response.ok) {
            console.error("API response:", response.status, response.statusText);
            throw new Error("Failed to fetch portfolio data");
          }

          const data = await response.json();
          console.log("Portfolio data received:", data);
          setPortfolioData(data);

          // Get additional stock details for each holding
          const holdingSymbols = Object.keys(data.holdings || {});
          if (holdingSymbols.length > 0) {
            await fetchStocksData(holdingSymbols);
          }
        } catch (error) {
          console.error("Error fetching portfolio:", error);
          toast({
            title: "Error",
            description: "Failed to load portfolio data. Using demo data instead.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });

          // Load demo data if API fails
          loadDemoData();
        } finally {
          setIsLoading(false);
        }
      };

    fetchPortfolioData();
  }, [toast, user]);


  const loadDemoData = () => {
    // Demo portfolio data
    const demoPortfolio = {
      liquidCash: 9803.02,
      totalPortfolioValue: 10000,
      unrealizedGains: 196.98,
      lastUpdated: "2025-04-20T23:13:13.344Z",
      holdings: {
        AAPL: { quantity: 1, avgBuyPrice: 196.98 },
        MSFT: { quantity: 0.5, avgBuyPrice: 410.35 },
        TSLA: { quantity: 0.25, avgBuyPrice: 168.29 }
      }
    };

    setPortfolioData(demoPortfolio);

    // Demo stock data (current prices, etc.)
    const demoStocks = {
      AAPL: {
        symbol: "AAPL",
        name: "Apple Inc.",
        price: 195.42,
        change: 2.34,
        changePercent: 1.21
      },
      MSFT: {
        symbol: "MSFT",
        name: "Microsoft Corporation",
        price: 415.10,
        change: 1.85,
        changePercent: 0.45
      },
      TSLA: {
        symbol: "TSLA",
        name: "Tesla, Inc.",
        price: 175.50,
        change: -3.25,
        changePercent: -1.82
      }
    };

    setStocksData(demoStocks);
  };

  // Fetch current stock data for holdings
  const fetchStocksData = async (symbols) => {
    try {
      const stockDetails = {};

      symbols.forEach(symbol => {
        stockDetails[symbol] = {
          symbol: symbol,
          name: getDummyStockName(symbol),
          price: getRandomPrice(symbol),
          change: getRandomChange(),
          changePercent: getRandomChangePercent()
        };
      });

      setStocksData(stockDetails);
    } catch (error) {
      console.error("Error fetching stock details:", error);
    }
  };

  // Navigate to stock details with sell tab selected
  const handleSellClick = (symbol) => {
    navigate(`/stock?symbol=${symbol}&tab=sell`);
  };

  // Navigate to stock explorer
  const handleExploreStocks = () => {
    navigate("/stockexplorer");
  };

  // Helper functions for demo data
  const getDummyStockName = (symbol) => {
    const names = {
      AAPL: "Apple Inc.",
      MSFT: "Microsoft Corporation",
      TSLA: "Tesla, Inc.",
      GOOGL: "Alphabet Inc.",
      AMZN: "Amazon.com, Inc.",
      META: "Meta Platforms, Inc.",
      NVDA: "NVIDIA Corporation"
    };
    return names[symbol] || `${symbol} Corp`;
  };

  const getRandomPrice = (symbol) => {
    const baseValues = {
      AAPL: 195.42,
      MSFT: 415.10,
      TSLA: 175.50,
      GOOGL: 168.12,
      AMZN: 185.07,
      META: 493.78,
      NVDA: 950.02
    };
    return baseValues[symbol] || 100 + Math.random() * 200;
  };

  const getRandomChange = () => {
    return parseFloat((Math.random() * 6 - 3).toFixed(2));
  };

  const getRandomChangePercent = () => {
    return parseFloat((Math.random() * 3 - 1.5).toFixed(2));
  };

  // Check if portfolio is empty (no holdings)
  const isPortfolioEmpty = !portfolioData?.holdings ||
    Object.keys(portfolioData.holdings).length === 0;

  return (
    <Box minH="100vh" bg="gray.50" fontFamily="poppins" pb="130px"> {/* Add padding bottom */}
      <Navbar />

      <Container maxW="container.xl" py={6}>
        <Box mb={6}>
          <Heading as="h1" size="xl" fontWeight="bold" color="#3B3B3B">
            Stock Portfolio
          </Heading>
        </Box>

        {/* Portfolio Table */}
        <Box
          borderRadius="md"
          overflow="hidden"
          boxShadow="md"
          mb={6}
        >
          <Table variant="simple">
            <Thead>
              <Tr
                backgroundColor="brand.600"
                sx={{
                  "& th:first-of-type": { borderTopLeftRadius: "md" },
                  "& th:last-of-type": { borderTopRightRadius: "md" },
                }}
              >
                <Th color="white">Symbol</Th>
                <Th color="white">Name</Th>
                <Th color="white" isNumeric>Price</Th>
                <Th color="white" isNumeric>Change</Th>
                <Th color="white" isNumeric>Change %</Th>
                <Th color="white" isNumeric>Shares</Th>
                <Th color="white" isNumeric>Market Value</Th>
                <Th color="white">Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {!isLoading && isPortfolioEmpty && (
                <Tr>
                  <Td colSpan={8} textAlign="center" py={8}>
                    <Text fontSize="xl" fontWeight="semibold" mb={2}>
                      Your portfolio is empty
                    </Text>
                    <Text mb={4}>
                      Explore stocks and make your first purchase
                    </Text>
                    <Button
                      colorScheme="green"
                      onClick={handleExploreStocks}
                    >
                      Explore Stocks
                    </Button>
                  </Td>
                </Tr>
              )}

              {!isLoading && !isPortfolioEmpty && portfolioData &&
                Object.entries(portfolioData.holdings).map(([symbol, holding]) => {
                  const stock = stocksData[symbol] || {
                    symbol,
                    name: getDummyStockName(symbol),
                    price: 0,
                    change: 0,
                    changePercent: 0
                  };

                  const marketValue = stock.price * holding.quantity;

                  return (
                    <Tr
                      key={symbol}
                      _hover={{ backgroundColor: "#f9f9f9" }}
                    >
                      <Td fontWeight="semibold">{symbol}</Td>
                      <Td>{stock.name}</Td>
                      <Td isNumeric>${stock.price.toFixed(2)}</Td>
                      <Td
                        isNumeric
                        color={stock.change >= 0 ? "green.500" : "red.500"}
                      >
                        {stock.change >= 0 ? "+" : ""}{stock.change.toFixed(2)}
                      </Td>
                      <Td
                        isNumeric
                        color={stock.changePercent >= 0 ? "green.500" : "red.500"}
                      >
                        {stock.changePercent >= 0 ? "+" : ""}{stock.changePercent.toFixed(2)}%
                      </Td>
                      <Td isNumeric>{holding.quantity}</Td>
                      <Td isNumeric>${marketValue.toFixed(2)}</Td>
                      <Td>
                        <Button
                          size="sm"
                          colorScheme="red"
                          onClick={() => handleSellClick(symbol)}
                        >
                          SELL
                        </Button>
                      </Td>
                    </Tr>
                  );
                })
              }
            </Tbody>
          </Table>
        </Box>
      </Container>

      {/* Bottom navigation bar */}
      {portfolioData && !isPortfolioEmpty && (
        <PortfolioBottomNav portfolioData={portfolioData} />
      )}
    </Box>
  );
};

export default Portfolio;