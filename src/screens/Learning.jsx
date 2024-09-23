import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  Button,
  background,
  Input,
  InputGroup,
  InputLeftElement,
  Icon
} from '@chakra-ui/react';
import {SearchIcon} from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import QuizCard from '../components/QuizCard';
import LearningHeader from '../components/LearningHeader';
import Navbar from '../components/NavBar';

const Learning = () => {
  const quizzes = [
    { id: 1, title: 'Stock Market', difficulty: 'Beginner', imageSrc: '/images/quiz-covers/stock_market.png', description: 'Overview of stock market operations, exchanges, and types of securities.' },
    { id: 2, title: 'Personal Finance', difficulty: 'Beginner', imageSrc: '/images/quiz-covers/personal_finance.png', description: 'Core principles of budgeting, saving, investing, and debt management.'  },
    { id: 3, title: 'Fintech', difficulty: 'Beginner', imageSrc: '/images/quiz-covers/fintech.png', description: 'Insights into technology’s impact on finance, including digital payments and blockchain.' },
    { id: 4, title: 'Investment', difficulty: 'Intermediate', imageSrc: '/images/quiz-covers/investment.png', description: 'Concepts of asset classes, portfolio diversification, and wealth-building strategies.' },
    { id: 5, title: 'Risk Management', difficulty: 'Intermediate', imageSrc: '/images/quiz-covers/risk_management.png', description: 'Strategies for identifying and mitigating financial risks across various contexts.' },
    { id: 6, title: 'Financial Analysis', difficulty: 'Intermediate', imageSrc: '/images/quiz-covers/financial_analysis.png', description: 'Overview of financial statements and using metrics to evaluate performance.' },
    { id: 7, title: 'Quantitative Finance', difficulty: 'Advanced', imageSrc: '/images/quiz-covers/quantitative_finance.png', description: 'Mathematical methods for pricing financial instruments and managing risk.' },
    { id: 8, title: 'Financial Modeling', difficulty: 'Advanced', imageSrc: '/images/quiz-covers/financial_modeling.png', description: 'Techniques for creating financial models to forecast performance and value companies.' },
    { id: 9, title: 'Trading', difficulty: 'Advanced', imageSrc: '/images/quiz-covers/trading.png', description: 'Understanding market mechanics, order types, and strategies for buying and selling securities.' },
  ];
  

  return (
    <Container maxW="unset" p={50} background="#F1F1F1">
      <VStack spacing={4} align="stretch">
        <Box>
          <Navbar></Navbar>
        </Box>

        <Box>
            <LearningHeader></LearningHeader>
        </Box>

        <HStack justifyContent="space-between" alignItems="center" px={4} py={2}>
  <Heading as="h2" size="lg" color="#3B3B3B">
    Explore Quizzes
  </Heading>

  <InputGroup maxW="400px"> {/* Set a max width to the InputGroup for better responsiveness */}
    <InputLeftElement
      pointerEvents="none" // Makes the icon non-interactive
      children={<Icon as={SearchIcon} color="#5D5D5D" />} // Use the SearchIcon
    />
    <Input
      placeholder="Search"
      _placeholder={{ color: "#AAAAAA" }}
      bg="#E3E3E3"
      textColor="#AAAAAA"
      pl="2.5rem" // Padding left to make room for the icon inside the input
      fontSize="md" // Font size of the input text
    />
  </InputGroup>
</HStack>

        <Box>
          <SimpleGrid columns={"3"} spacingX={20} spacingY={40}>
        {quizzes.map(quiz => (
          <QuizCard key={quiz.id} title={quiz.title} difficulty={quiz.difficulty} imageSrc={quiz.imageSrc} description={quiz.description} />
        ))}
      </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Learning;