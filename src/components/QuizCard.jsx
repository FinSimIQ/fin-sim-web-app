import React from 'react';
import { Box, Image, Text, VStack, Heading, Button, useColorModeValue } from '@chakra-ui/react';

const colorSchemeMap = {
    Beginner: { bgColor: 'rgba(66, 214, 116, 0.18)', textColor: 'rgba(66, 214, 116, 1)' },
    Intermediate: { bgColor: 'rgba(255, 168, 0, 0.18)', textColor: 'rgba(255, 168, 0, 1)' },
    Advanced: { bgColor: 'rgba(255, 67, 55, 0.18)', textColor: 'rgba(255, 67, 55, 1)' }
  };

const QuizCard = ({ title, difficulty, imageSrc, description }) => {
    const { bgColor, textColor } = colorSchemeMap[difficulty] || { bgColor: 'gray.200', textColor: 'gray.800' };
  return (
    <VStack
      w="85%"
      h="100%"
      bg="#FFFFFF"
      boxShadow="2xl"
      rounded="50px"
      overflow="hidden"
      align="stretch"
      m="4"

    >
      <Box pl="5"pr="5" pt="6">
        <Image
          src={imageSrc}
          alt={`Cover image for ${title}`}
          borderRadius="2xl"
          objectFit="cover"
          boxSize="100%"
        />
      </Box>
      <VStack px={5} py={4} align="stretch" spacing={4} flexGrow={1}>
        <Heading size="lg" color="#3B3B3B" textAlign="left" fontFamily="poppins" fontWeight="semibold" >{title}</Heading>
        <Text fontFamily="metrophobic" fontSize="md" color="#5D5D5D" textAlign="left">{description}</Text>
        <Button
          size="sm"
          rounded="xl"
          bg={bgColor}
          color={textColor}
          variant="solid"
          width={"min-content"}
        >
          {difficulty}
        </Button>
      </VStack>
    </VStack>
  );
};

export default QuizCard;
