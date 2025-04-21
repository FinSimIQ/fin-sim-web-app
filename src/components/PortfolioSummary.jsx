import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Text } from '@chakra-ui/react';

const PortfolioSummary = ({ availableCash, totalInvested, profitLoss, portfolioValue }) => {
  const isProfitable = profitLoss >= 0;

  return (
    <Flex 
      justify="space-between" 
      align="center" 
      p="25px 30px" 
      bg="white"
      width="100%"
      height="120px"
      boxShadow="0 -4px 12px rgba(0, 0, 0, 0.1)"
    >
      <Flex 
        direction="column" 
        align="center" 
        flex="1"
      >
        <Text fontSize="22px" fontWeight="600" mb="8px">
          ${availableCash.toFixed(2)}
        </Text>
        <Text fontSize="14px" color="#666">
          Available Cash
        </Text>
      </Flex>

      <Text mx="10px" fontSize="24px" fontWeight="600" color="#666">+</Text>

      <Flex 
        direction="column" 
        align="center" 
        flex="1"
      >
        <Text fontSize="22px" fontWeight="600" mb="8px">
          ${totalInvested.toFixed(2)}
        </Text>
        <Text fontSize="14px" color="#666">
          Total Invested
        </Text>
      </Flex>

      <Text mx="10px" fontSize="24px" fontWeight="600" color="#666">+</Text>

      <Flex 
        direction="column" 
        align="center" 
        flex="1"
      >
        <Text 
          fontSize="22px" 
          fontWeight="600" 
          mb="8px"
          color={isProfitable ? 'green' : 'red'}
        >
          {isProfitable ? '' : '-'}${Math.abs(profitLoss).toFixed(2)}
        </Text>
        <Text fontSize="14px" color="#666">
          Profit/Loss
        </Text>
      </Flex>

      <Text mx="10px" fontSize="24px" fontWeight="600" color="#666">=</Text>

      <Flex 
        direction="column" 
        align="center" 
        flex="1"
      >
        <Text fontSize="22px" fontWeight="600" mb="8px" color="black">
          ${portfolioValue.toFixed(2)}
        </Text>
        <Text fontSize="14px" color="#666">
          Portfolio Value
        </Text>
      </Flex>
    </Flex>
  );
};

PortfolioSummary.propTypes = {
  availableCash: PropTypes.number.isRequired,
  totalInvested: PropTypes.number.isRequired,
  profitLoss: PropTypes.number.isRequired,
  portfolioValue: PropTypes.number.isRequired
};

export default PortfolioSummary; 