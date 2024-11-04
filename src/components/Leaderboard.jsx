import React from 'react';
import { Box, Text, Flex, background } from '@chakra-ui/react';
import LeaderboardItem from './LeaderboardItem';
import ToggleButton from './LeaderboardToggle'; // Import your ToggleButton component here

const Leaderboard = ({ remainingMembers }) => {
  return (
    <Box padding={{ base: "10px", md: "20px" }}>
      <Flex justify="space-between" align="center" marginBottom="20px">
        {/* Leaderboard Title */}
        <Text 
          fontSize={{ base: "20px", md: "24px" }} 
          fontWeight="semibold" 
          color="#3B3B3B" 
          fontFamily="'Poppins', sans-serif"
        >
          Leaderboard
        </Text>
        
        {/* Toggle Button on the Right */}
        <ToggleButton />
      </Flex>

      {/* Leaderboard Items */}
      <Box>
        {remainingMembers.map((member, index) => (
          <LeaderboardItem 
            key={member._id} // Using unique identifier from the member object
            image={member.image} // Image will be handled accordingly
            name={member.fullName}
            points={member.totalPoints}
            rank={index + 4} // Adjusted rank for remaining members
          />
        ))}
      </Box>
    </Box>
  );
};

export default Leaderboard;
