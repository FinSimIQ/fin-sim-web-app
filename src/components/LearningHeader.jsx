import { Box, Heading, Text } from '@chakra-ui/react';

const LearningHeader = () => {
  return (
    <Box
      bg="#316D60"
      borderRadius="20px"
      p={5}
      color="white"
      textAlign="center"
      position="relative"
      height="304px"
      width="100%"
    >
      <Heading as="h1" size="2xl" mb={3}>
        Learn
      </Heading>
      <Text fontSize="lg" px={12}>
        Test your knowledge with Quizzes and learn along the way! Quizzes are adaptive to user skill levels and tailored to the content and level of difficulty.
      </Text>
    </Box>
  );
};

export default LearningHeader;
