import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const QuizCard = ({ title, difficulty, imageSrc }) => {
  return (
    <Box borderWidth="1px" rounded="lg" overflow="hidden">
      <Image src={imageSrc} alt={`Cover image for ${title}`} />
      <Box p={4}>
        <Text fontWeight="bold">{title}</Text>
        <Text fontSize="sm">{difficulty}</Text>
      </Box>
    </Box>
  );
};

export default QuizCard;
