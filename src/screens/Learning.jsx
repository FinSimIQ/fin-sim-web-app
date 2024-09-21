import React from 'react';
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  Button
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import QuizCard from '../components/QuizCard';

const Learning = () => {
  const quizzes = [
    { id: 1, title: 'Stock Market', difficulty: 'Beginner', imageSrc: '/images/quiz-covers/stock_market.png' },
    { id: 2, title: 'Personal Finance', difficulty: 'Beginner', imageSrc: '/images/quiz-covers/personal_finance.png' },
    { id: 3, title: 'Fintech', difficulty: 'Beginner', imageSrc: '/images/quiz-covers/fintech.png' },
    { id: 4, title: 'Investment', difficulty: 'Intermediate', imageSrc: '/images/quiz-covers/investment.png' },
    { id: 5, title: 'Risk Management', difficulty: 'Intermediate', imageSrc: '/images/quiz-covers/risk_management.png' },
    { id: 6, title: 'Financial Analysis', difficulty: 'Intermediate', imageSrc: '/images/quiz-covers/financial_analysis.png' },
    { id: 7, title: 'Quantitative Finance', difficulty: 'Advanced', imageSrc: '/images/quiz-covers/quantitative_finance.png' },
    { id: 8, title: 'Financial Modeling', difficulty: 'Advanced', imageSrc: '/images/quiz-covers/financial_modeling.png' },
    { id: 9, title: 'Trading', difficulty: 'Advanced', imageSrc: '/images/quiz-covers/trading.png' },
  ];

  return (
    <Container maxW="container.xl" p={0}>
      <VStack spacing={4} align="stretch">
        <Box bg="#316D60" borderRadius="20px" p={5} color="white">
          <Heading as="h1" size="xl">
            Learn
          </Heading>
          <Text fontSize="lg">
            Test Your Knowledge with Quizzes! Quizzes are adaptive to user skill levels and tailored to the content and level of difficulty.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" my={4}>
            Explore Quizzes
          </Heading>
          <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
            {quizzes.map(quiz => (
              <GridItem key={quiz.id}>
                <QuizCard title={quiz.title} difficulty={quiz.difficulty} imageSrc={quiz.imageSrc} />
              </GridItem>
            ))}
          </Grid>
        </Box>

        <Box as="footer" pt={10}>
          <HStack justify="space-evenly">
            <Link to="/home">
              <Button variant="link" colorScheme="teal">Home</Button>
            </Link>
            <Link to="/example">
              <Button variant="link" colorScheme="teal">Example Page</Button>
            </Link>
            {/* Add more links as needed */}
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Learning;
