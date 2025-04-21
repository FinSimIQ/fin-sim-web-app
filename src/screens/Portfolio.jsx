import React, { useState, useEffect } from 'react';
import { Box, Flex, Heading, useToast } from '@chakra-ui/react';
import PortfolioTable from '../components/PortfolioTable';
import PortfolioSummary from '../components/PortfolioSummary';
import NavBar from '../components/NavBar';
import useStore from '../store/useStore';

const Portfolio = () => {
  const toast = useToast();
  const user = useStore(state => state.user);
  const [portfolio, setPortfolio] = useState([]);
  const [financials, setFinancials] = useState({
    availableCash: 0,
    totalInvested: 0,
    profitLoss: 0,
    portfolioValue: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch portfolio data
  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:8081/api/users/email/${user?.email}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        
        const userData = await response.json();
        
        if (userData && userData.length > 0) {
          const userInfo = userData[0];
          
          const portfolioData = userInfo.portfolio ? 
            Array.isArray(userInfo.portfolio) ? userInfo.portfolio : [userInfo.portfolio] : [];
          
          const formattedPortfolio = portfolioData.map(asset => ({
            assetSymbol: asset.assetSymbol,
            assetName: asset.assetSymbol,
            assetType: asset.assetType,
            quantity: asset.quantity,
            price: asset.buyPrice,
            change: 0,
            changePercent: 0,
            marketValue: asset.quantity * asset.buyPrice
          }));
          
          setPortfolio(formattedPortfolio);
          
          const totalValue = formattedPortfolio.reduce(
            (sum, asset) => sum + asset.marketValue, 0
          );
          
          setFinancials({
            availableCash: userInfo.liquidMoney || 0,
            totalInvested: userInfo.totalInvested || 0,
            profitLoss: 0,
            portfolioValue: totalValue
          });
        } else {
          setPortfolio([]);
        }
      } catch (err) {
        console.error('Error fetching portfolio:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchPortfolio();
    } else {
      setLoading(false);
    }
  }, [user]);

  // Handle error
  useEffect(() => {
    if (error) {
      toast({
        title: 'Error',
        description: error,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  }, [error, toast]);

  // Function to handle selling a stock
  const handleSellStock = async (symbol) => {
    try {
      const stockToSell = portfolio.find(s => s.assetSymbol === symbol);
      const quantity = 1;

      if (!stockToSell || stockToSell.quantity < quantity) {
        toast({
          title: 'Error',
          description: `You don't have enough shares of ${symbol}`,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        return { success: false };
      }

      // The server doesn't have a dedicated sell endpoint in the routes
      // This needs to be implemented on the server side
      
      // Simulate a successful response
      const mockSuccessResponse = { success: true };
      
      setPortfolio(prevPortfolio => {
        const updatedPortfolio = prevPortfolio.map(asset => {
          if (asset.assetSymbol === symbol) {
            const updatedQuantity = asset.quantity - quantity;
            return {
              ...asset,
              quantity: updatedQuantity,
              marketValue: updatedQuantity * asset.price
            };
          }
          return asset;
        }).filter(asset => asset.quantity > 0);
        
        return updatedPortfolio;
      });

      const stockPrice = stockToSell.price * quantity;
      setFinancials(prev => ({
        ...prev,
        availableCash: prev.availableCash + stockPrice,
        totalInvested: prev.totalInvested - stockPrice,
        portfolioValue: prev.portfolioValue - stockPrice
      }));

      toast({
        title: 'Success',
        description: `Successfully sold ${quantity} share(s) of ${symbol}`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      
      return mockSuccessResponse;
    } catch (error) {
      console.error(`Error selling ${symbol}:`, error);
      toast({
        title: 'Error',
        description: 'There was an error processing your sell order',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      
      return { success: false, message: error.message };
    }
  };

  // Format portfolio data for the table component
  const getStocksForTable = () => {
    if (loading) {
      return [];
    }
    
    return portfolio.map(asset => ({
      symbol: asset.assetSymbol,
      name: asset.assetName || asset.assetSymbol,
      price: asset.price || 0,
      change: asset.change || 0,
      changePercent: asset.changePercent || 0,
      shares: asset.quantity,
      marketValue: (asset.price || 0) * asset.quantity,
      onSell: handleSellStock
    }));
  };

  const stocksForTable = getStocksForTable();

  return (
    <Box 
      height="100vh" 
      width="100%" 
      display="flex" 
      flexDirection="column"
    >
      <NavBar />
      <Flex
        direction="column"
        flex="1"
        width="100%"
        bg="#f5f5f5"
        overflowY="auto"
        pb="120px"
      >
        <Flex
          direction="column"
          width="100%"
          maxW="1400px"
          mx="auto"
          pt="20px"
          px={{ base: "10px", md: "30px" }}
        >
          <Heading 
            as="h2" 
            fontSize="28px" 
            m="0" 
            mb="10px"
            fontWeight="600"
            color="#333"
          >
            Stock Portfolio
          </Heading>
          
          <Box
            width="100%"
            position="relative"
          >
            <PortfolioTable 
              stocks={stocksForTable} 
              isLoading={loading}
            />
          </Box>
        </Flex>
      </Flex>
      
      <Box
        position="fixed"
        bottom="0"
        width="100%"
        zIndex="10"
      >
        <PortfolioSummary 
          availableCash={financials.availableCash}
          totalInvested={financials.totalInvested}
          profitLoss={financials.profitLoss}
          portfolioValue={financials.portfolioValue}
        />
      </Box>
    </Box>
  );
};

export default Portfolio; 