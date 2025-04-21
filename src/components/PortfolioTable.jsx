import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Text, Button, Spinner, Center } from '@chakra-ui/react';

const PortfolioTable = ({ stocks, isLoading = false }) => {
  const minTableHeight = 300;

  if (isLoading) {
    return (
      <Box 
        bg="white" 
        borderRadius="10px"
        boxShadow="0 2px 5px rgba(0, 0, 0, 0.1)"
        overflow="visible"
        width="100%"
        m="20px 0"
        border="1px solid #e0e0e0"
        height={`${minTableHeight}px`}
      >
        <Flex 
          bg="#4c6e5d" 
          color="white" 
          fontWeight="600"
          width="100%"
          borderTopLeftRadius="9px"
          borderTopRightRadius="9px"
        >
          <Text flex="1" p="16px" textAlign="left" fontSize="16px">Symbol</Text>
          <Text flex="1" p="16px" textAlign="left" fontSize="16px">Name</Text>
          <Text flex="1" p="16px" textAlign="left" fontSize="16px">Price</Text>
          <Text flex="1" p="16px" textAlign="left" fontSize="16px">Change</Text>
          <Text flex="1" p="16px" textAlign="left" fontSize="16px">Change %</Text>
          <Text flex="1" p="16px" textAlign="left" fontSize="16px">Shares</Text>
          <Text flex="1" p="16px" textAlign="left" fontSize="16px">Market Value</Text>
          <Text flex="1" p="16px" textAlign="left" fontSize="16px">Action</Text>
        </Flex>
        
        <Center 
          height="calc(100% - 54px)" 
          bg="white"
          borderBottomLeftRadius="9px"
          borderBottomRightRadius="9px"
        >
          <Spinner 
            size="xl" 
            color="#4c6e5d" 
            thickness="4px"
            speed="0.65s"
          />
        </Center>
      </Box>
    );
  }

  return (
    <Box 
      bg="white" 
      borderRadius="10px"
      boxShadow="0 2px 5px rgba(0, 0, 0, 0.1)" 
      overflow="visible"
      width="100%"
      m="20px 0"
      border="1px solid #e0e0e0"
      display="flex"
      flexDirection="column"
      height={stocks && stocks.length > 0 ? 'auto' : `${minTableHeight}px`}
    >
      <Flex 
        bg="#4c6e5d" 
        color="white" 
        fontWeight="600"
        width="100%"
        borderTopLeftRadius="9px"
        borderTopRightRadius="9px"
      >
        <Text flex="1" p="16px" textAlign="left" fontSize="16px">Symbol</Text>
        <Text flex="1" p="16px" textAlign="left" fontSize="16px">Name</Text>
        <Text flex="1" p="16px" textAlign="left" fontSize="16px">Price</Text>
        <Text flex="1" p="16px" textAlign="left" fontSize="16px">Change</Text>
        <Text flex="1" p="16px" textAlign="left" fontSize="16px">Change %</Text>
        <Text flex="1" p="16px" textAlign="left" fontSize="16px">Shares</Text>
        <Text flex="1" p="16px" textAlign="left" fontSize="16px">Market Value</Text>
        <Text flex="1" p="16px" textAlign="left" fontSize="16px">Action</Text>
      </Flex>
      
      {stocks && stocks.length > 0 ? (
        <Box 
          width="100%" 
          bg="white"
          height="auto"
          borderBottomLeftRadius="9px"
          borderBottomRightRadius="9px"
        >
          {stocks.map((stock, index) => (
            <Flex 
              key={`${stock.symbol}-${index}`}
              borderBottom={index === stocks.length - 1 ? "none" : "1px solid #e0e0e0"}
              _hover={{ bg: "#f5f5f5" }}
              width="100%"
              py="4px"
              borderBottomLeftRadius={index === stocks.length - 1 ? "9px" : "0"}
              borderBottomRightRadius={index === stocks.length - 1 ? "9px" : "0"}
            >
              <Text flex="1" p="16px" textAlign="left" fontSize="16px" fontWeight="500">{stock.symbol}</Text>
              <Text flex="1" p="16px" textAlign="left" fontSize="16px">{stock.name}</Text>
              <Text flex="1" p="16px" textAlign="left" fontSize="16px">${stock.price.toFixed(2)}</Text>
              <Text 
                flex="1" 
                p="16px" 
                textAlign="left"
                fontSize="16px"
                color={stock.change >= 0 ? 'green' : 'red'}
              >
                {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}
              </Text>
              <Text 
                flex="1" 
                p="16px" 
                textAlign="left"
                fontSize="16px"
                color={stock.changePercent >= 0 ? 'green' : 'red'}
              >
                {stock.changePercent.toFixed(2)}%
              </Text>
              <Text flex="1" p="16px" textAlign="left" fontSize="16px">{stock.shares}</Text>
              <Text flex="1" p="16px" textAlign="left" fontSize="16px">${stock.marketValue.toFixed(2)}</Text>
              <Flex flex="1" p="16px" textAlign="left" justifyContent="center">
                <Button
                  bg="white"
                  color="#ff3b30"
                  border="1px solid #ff3b30"
                  borderRadius="4px"
                  px="20px"
                  py="8px"
                  fontWeight="600"
                  fontSize="14px"
                  _hover={{ bg: "#ff3b30", color: "white" }}
                  onClick={() => stock.onSell(stock.symbol)}
                >
                  SELL
                </Button>
              </Flex>
            </Flex>
          ))}
        </Box>
      ) : (
        <Flex 
          p="60px 20px" 
          textAlign="center" 
          flexDirection="column" 
          justifyContent="center" 
          alignItems="center" 
          height="calc(100% - 54px)"
          bg="white"
          borderBottomLeftRadius="9px"
          borderBottomRightRadius="9px"
        >
          <Text fontSize="20px" fontWeight="500" mb="15px">
            Your portfolio is empty
          </Text>
          <Text fontSize="16px" color="#666">
            Explore stocks and make your first purchase
          </Text>
        </Flex>
      )}
    </Box>
  );
};

PortfolioTable.propTypes = {
  stocks: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      change: PropTypes.number.isRequired,
      changePercent: PropTypes.number.isRequired,
      shares: PropTypes.number.isRequired,
      marketValue: PropTypes.number.isRequired,
      onSell: PropTypes.func.isRequired
    })
  ),
  isLoading: PropTypes.bool
};

export default PortfolioTable; 