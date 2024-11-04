import React from 'react';
import { Box, Image, Text, Flex } from '@chakra-ui/react';

const LeaderboardItem = ({ image, name, points, rank }) => {
  const rankColor = "#75FB4C"; // Customize rank color based on the design
  const defaultImage = "https://via.placeholder.com/50"; // Placeholder for missing images

  return (
    <Flex
      bg="white"
      w="98%"
      h="85px"
      align="center"
      p="10px"
      mb="10px"
      borderRadius="30px"
      boxShadow="sm"
      position="relative"
      fontFamily="poppins"
      color="#262626"
    >
      {/* Rank Circle */}
      <Box
        bg={rankColor}
        w="35px"
        h="30px"
        borderRadius="lg"
        display="flex"
        justifyContent="center"
        alignItems="center"
        mr="20px"
        fontWeight="bold"
      >
        {rank}.
      </Box>

      {/* Wrapper for Image and Name */}
      <Flex align="center">
        {/* Profile Image */}
        <Image
          src={image || defaultImage}
          alt={name}
          borderRadius="full"
          boxSize="60px"
        />

        {/* Name */}
        <Text fontSize="lg" fontWeight="medium" ml="20px">
          {name}
        </Text>
      </Flex>

      {/* Points */}
      <Text fontSize="lg" fontWeight="medium" ml="auto" mr="10px">
        {points} pts
      </Text>
    </Flex>
  );
};

export default LeaderboardItem;
