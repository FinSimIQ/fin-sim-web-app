import React from 'react';
import { Box, Container, Grid, GridItem, Heading, Image, Text, UnorderedList, ListItem, Code } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import QuizCard from '../components/QuizCard';

const Learning = () => {
  const quizzes = [
    { id: 1, title: 'Stock Market', difficulty: 'Intermediate', imageSrc: '/path/to/image.jpg' },
    // Add more quizzes here...
  ];

  return (
    <Container m={0} maxW="container.xl">
      <Heading as="h1" size="xl" mb={4}>
        Learning Quizzes
      </Heading>
      <Text fontSize="lg" mb={2}>
        Test Your Knowledge with Quizzes! Quizzes are adaptive to user skill levels and tailored to the content and level of difficulty.
      </Text>
      <Text mb={4}>
        Navigate to your desired quiz below:
      </Text>
      <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6} pb={6}>
        {quizzes.map(quiz => (
          <GridItem key={quiz.id}>
            <QuizCard title={quiz.title} difficulty={quiz.difficulty} imageSrc={quiz.imageSrc} />
          </GridItem>
        ))}
      </Grid>
      <Box as="h2" fontSize="xl" mt={6} mb={2}>
        Other Pages
      </Box>
      <UnorderedList>
        <ListItem>
          <Link to="/home">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/example">Example Page</Link>
        </ListItem>
        {/* Add more links here as needed */}
      </UnorderedList>
    </Container>
  );
};

export default Learning;
