import React from 'react';
import { Box, Image, Text, Flex } from '@chakra-ui/react';

const LeaderboardItem = ({ image, name, points, rank }) => {
  const rankColor = "#75FB4C"; // Customize rank color based on the design
  const defaultImage = "https://via.placeholder.com/50"; // Placeholder for missing images

  return (
    <Flex 
      bg="white" 
      w="full" 
      maxW="818px" 
      h="80px" 
      align="center" 
      p="10px" 
      mb="10px" 
      borderRadius="md" 
      boxShadow="sm"
      position="relative"
    >
      {/* Rank Circle */}
      <Box 
        bg={rankColor} 
        w="30px" 
        h="30px" 
        borderRadius="full" 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        mr="10px" 
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
        mr="20px" 
      />

      {/* Name */}
      <Text fontSize="lg" flexGrow={1} fontWeight="medium" color="gray.700">
        {name}
      </Text>

      {/* Points */}
      <Text fontSize="lg" fontWeight="semibold" color="gray.800">
        {points} pts
      </Text>
    </Flex>
  );
};

export default LeaderboardItem;
