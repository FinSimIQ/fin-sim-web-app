  import {
    Text,
    Container,
    Heading,
    Flex,
    CircularProgress,
    VStack,
  } from "@chakra-ui/react";
  import React, { useState, useEffect } from "react";
  import QuestionCard from "./QuestionCard";

  const QuizContainer = () => {
    const [index, setIndex] = useState(0);
    const [quizData, setQuiz] = useState(null);
    const [questionStr, setQuestion] = useState("");
    const [loading, setLoading] = useState(true);
    const [allCorrect, setAllCorrect] = useState(false);
  
    useEffect(() => {
      fetch(`http://localhost:8081/api/quiz/weekly-quiz/latest`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setQuiz(data.quiz);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
      if (quizData) {
        setQuestion(quizData.questions[index].question);
      }
    }, [index, quizData]);
  
    const handleNextQuestion = () => {
      if (index + 1 < quizData.questions.length) {
        setIndex((prev) => prev + 1);
      } else {
        setAllCorrect(true);
      }
    };
  
    if (loading) {
      return (
         <Container bg="#F1F1F1" m={0} maxW="container.2xl" height="100vh">
           <VStack padding="10" spacing="10">
             <Container
                minW="container.xl"
                bg="#316D60"
                color="#FFFFFF"
                borderRadius="15"
                paddingY="8"
                paddingX="6"
            >
              <Heading fontSize="32px">Weekly Market Challenge</Heading>
              <Text fontSize="18px">
                Test your market analysis skills with this week's challenge.
              </Text>
            </Container>
            <Container
              minW="container.xl"
              bg="#FFFFFF"
              color="#3B3B3B"
              borderRadius="15"
              padding="4"
            >
              <Flex justify="center" align="center">
                {/*Loading Circle*/}
                <CircularProgress isIndeterminate color="#316D60" size="100%" />
              </Flex>
            </Container>
          </VStack>
        </Container>
      );
    }
  
    if (allCorrect) {
      return (
        <Container bg="#D9D9D9" m={0} maxW="container.2xl" height="100vh">
          <VStack padding="10" spacing="10">
            <Container
              minW="container.xl"
              bg="#316D60"
              color="#FFFFFF"
              borderRadius="15"
              paddingY="8"
              paddingX="6"
            >
              <Heading fontSize="32px">
                Weekly Market Challenge Completed!
              </Heading>
              <Text fontSize="18px">
                Good job! Be sure to check out the Learn page for more questions
                to test your skills and knowledge. Don't forget to come back
                next week for new challenge questions!
              </Text>
            </Container>
          </VStack>
        </Container>
      );
    }
  
    return (
      <Container bg="#D9D9D9" m={0} maxW="container.2xl" height="100vh">
        <VStack padding="10" spacing="10">
          <Container 
            minW="container.xl"
            bg="#316D60"
            color="#FFFFFF"
            borderRadius="15"
            paddingY="8"
            paddingX="6"
          >
            <Heading fontSize="32px">Weekly Market Challenge</Heading>
            <Text fontSize="18px">
                Test your market analysis skills with this week's challenge.
            </Text>
          </Container>
          <Container 
            minW="container.xl" 
            bg="#FFFFFF" 
            color="#3B3B3B" 
            borderRadius="15" 
            padding="4"
            width="100%"
          >
            <Heading fontSize="28px">Market Volatility Analysis</Heading>
            <Text fontSize="18px" py="1">
                Scenario:
            </Text>
            <Text fontSize="12px">
              The stock market has been fluctuating significantly due to
              uncertainty around a central bank's interest rate decisions. One
              company, XYZ Corp, experienced a 10% drop in stock price over the
              last two weeks but rebounded by 5% in the last few days. As an
              investor, you are analyzing whether to adjust your portfolio.
              Given the market conditions, you are considering the best strategy
              to manage risk.
            </Text>
            <Text fontSize="18px" py="1">
              Question:
            </Text>
            <Text fontSize="12px">{questionStr}</Text>
            <QuestionCard
              answers={quizData.questions[index].answers}
              correctAnswer={quizData.questions[index].correctAnswer.substring(0, 1)}
              onNext={handleNextQuestion}
            />
          </Container>
        </VStack>
      </Container>
    );
  };  
  
  export default QuizContainer;