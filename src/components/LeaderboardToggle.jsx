import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';

const LeaderboardToggle = () => {
  const [activeButton, setActiveButton] = useState('weekly');

  const handleToggle = (button) => {
    setActiveButton(button);
  };

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      align="center" 
      bg="rgba(49, 109, 96, 0.7)" 
      borderRadius="md" 
      p="5px"
      w={{ base: "200px", md: "300px" }}
      mb="20px"
    >
      {['weekly', 'all-time'].map((period) => (
        <Button
          key={period}
          onClick={() => handleToggle(period)}
          bg={activeButton === period ? '#316D60' : 'transparent'}
          color="white"
          w="50%"
          borderRadius={period === 'weekly' ? 'md 0 0 md' : '0 md md 0'}
          aria-pressed={activeButton === period}
          _hover={{ bg: "#2A8D77" }}
          _active={{ bg: "#1F705A" }}
        >
          {period === 'weekly' ? 'Weekly' : 'All Time'}
        </Button>
      ))}
    </Box>
  );
};

export default LeaderboardToggle;
