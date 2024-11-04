import React from "react";
import { Box, Text, Flex, Avatar, VStack } from "@chakra-ui/react";

const TopMembers = ({ topMembers }) => {
  if (!topMembers || topMembers.length < 3) {
    return <Text>No top members available.</Text>;
  }

  return (
    <Box py={8} bg="#316D60" borderRadius="lg" color="#262626" fontFamily={"poppins"}>
      <Flex justifyContent="center" alignItems="flex-end" gap={10} position="relative">
        {/* Second Place */}
        <VStack spacing={2} textAlign="center" position="relative" top="20px">
          <Avatar
            src={topMembers[1].image || "https://via.placeholder.com/150"}
            size="xl"
            borderColor="lightgreen"
            borderWidth={4}
          />
          <Text fontSize="lg" fontWeight="bold" bg="#75FB4C" px={2} borderRadius="md">
            2
          </Text>
          <Text fontSize="md" fontWeight="semibold" color="#FFFFFF">
            {topMembers[1].name}
          </Text>
          <Text fontSize="sm" color="#FFFFFF">{topMembers[1].points} pts</Text>
        </VStack>

        {/* First Place - Higher Position */}
        <VStack spacing={2} textAlign="center" position="relative" top="-20px">
          <Avatar
            src={topMembers[0].image || "https://via.placeholder.com/150"}
            size="2xl"
            borderColor="lightgreen"
            borderWidth={4}
          />
          <Text fontSize="lg" fontWeight="bold" bg="#75FB4C" px={2} borderRadius="md">
            1
          </Text>
          <Text fontSize="md" fontWeight="semibold" color="#FFFFFF">
            {topMembers[0].name}
          </Text>
          <Text fontSize="sm" color="#FFFFFF">{topMembers[0].points} pts</Text>
        </VStack>

        {/* Third Place */}
        <VStack spacing={2} textAlign="center" position="relative" top="20px">
          <Avatar
            src={topMembers[2].image || "https://via.placeholder.com/150"}
            size="xl"
            borderColor="lightgreen"
            borderWidth={4}
          />
          <Text fontSize="lg" fontWeight="bold" bg="#75FB4C" px={2} borderRadius="md">
            3
          </Text>
          <Text fontSize="md" fontWeight="semibold" color="#FFFFFF">
            {topMembers[2].name}
          </Text>
          <Text fontSize="sm" color="#FFFFFF">{topMembers[2].points} pts</Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default TopMembers;
