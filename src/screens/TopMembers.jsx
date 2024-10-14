import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import LeaderboardItem from './LeaderboardItem';

const TopMembers = ({ topMembers }) => {
  if (!topMembers || topMembers.length === 0) {
    return <Text>No top members available.</Text>;
  }

  return (
    <Box marginBottom="20px">
      <Text 
        fontSize={{ base: "20px", md: "24px" }} 
        fontWeight="semibold" 
        color="#3B3B3B" 
        fontFamily="'Poppins', sans-serif"
        marginBottom="10px"
      >
        Top Members
      </Text>

      <Flex direction="column">
        {topMembers.map((member, index) => (
          <LeaderboardItem 
            key={member._id}  // Use unique identifier from the member object
            image={member.image || null}
            name={member.fullName}
            points={member.totalPoints}
            rank={index + 1} // Assign rank starting from 1
          />
        ))}
      </Flex>
    </Box>
  );
};

export default TopMembers;