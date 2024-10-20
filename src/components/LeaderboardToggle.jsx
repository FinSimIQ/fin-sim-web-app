import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';

const LeaderboardToggle = () => {
  const [activeButton, setActiveButton] = useState('weekly'); // Default to 'weekly'

  const handleToggle = (button) => {
    setActiveButton(button);
  };

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      bgColor="rgba(49, 109, 96, 0.7)" // 70% of #316D60
      borderRadius="8px" 
      padding="5px"
      width={{ base: "200px", md: "300px" }} // Responsive width
      marginBottom="20px"
    >
      <Button
        onClick={() => handleToggle('weekly')}
        bg={activeButton === 'weekly' ? '#316D60' : 'rgba(49, 109, 96, 0.7)'} // Active color
        color="white"
        width="50%"
        borderRadius="8px 0 0 8px"
        aria-pressed={activeButton === 'weekly'} // Accessibility
        _hover={{ bg: "#2A8D77" }} // Hover effect
        _active={{ bg: "#1F705A" }} // Active state effect
      >
        Weekly
      </Button>
      <Button
        onClick={() => handleToggle('all-time')}
        bg={activeButton === 'all-time' ? '#316D60' : 'rgba(49, 109, 96, 0.7)'} // Active color
        color="white"
        width="50%"
        borderRadius="0 8px 8px 0"
        aria-pressed={activeButton === 'all-time'} // Accessibility
        _hover={{ bg: "#2A8D77" }} // Hover effect
        _active={{ bg: "#1F705A" }} // Active state effect
      >
        All Time
      </Button>
    </Box>
  );
};

export default LeaderboardToggle;