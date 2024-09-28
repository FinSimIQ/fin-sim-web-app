import React from 'react';
import { Box, Image, Text, Flex } from '@chakra-ui/react';

const LeaderboardItem = ({ image, name, points, rank }) => {
  const rankColor = "#75FB4C"; // Fixed rank color
  const defaultImage = "https://via.placeholder.com/50"; // URL for a default image

  return (
    <Flex 
      bg="white" 
      width="818px" 
      height="80px" 
      alignItems="center" 
      padding="10px" 
      marginBottom="10px" 
      borderRadius="8px" 
      boxShadow="md"
      position="relative" // Ensures the rank circle is positioned correctly
    >
      {/* Rank Circle */}
      <Box 
        bg={rankColor} 
        width="30px" 
        height="30px" 
        borderRadius="full" 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        marginRight="10px" 
        fontWeight="bold"
        color="white"
      >
        {rank}
      </Box>

      {/* Profile Image */}
      <Image 
        src={image || defaultImage} 
        alt={name} 
        borderRadius="full" 
        boxSize="50px" 
        marginRight="20px" 
      />

      {/* Name */}
      <Text fontSize="lg" flexGrow={1} fontWeight="medium">
        {name}
      </Text>

      {/* Points */}
      <Text fontSize="lg" fontWeight="semibold">
        {points} pts
      </Text>
    </Flex>
  );
};

export default LeaderboardItem;