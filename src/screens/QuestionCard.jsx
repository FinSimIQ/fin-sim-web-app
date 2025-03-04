  import {
    Text,
    Button,
    Flex,
    VStack,
  } from "@chakra-ui/react";
  import React, { useState, useEffect } from "react";

  const QuestionCard = ({ answers, correctAnswer, onNext }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    useEffect(() => {
      // Reset state when a new question loads
      setIsSubmitted(false);
      setSelectedAnswer(null);
      setIsCorrect(false);
    }, [onNext]);
  
    const handleAnswerClick = (answer) => {
      if (!isSubmitted) {
        setSelectedAnswer(answer);
      }
    };
  
    const handleSubmit = () => {
      if (!isSubmitted) {
        setIsCorrect(selectedAnswer.substring(0, 1) === correctAnswer);
        setIsSubmitted(true);
      } else {  
        if (isCorrect) {
          onNext();
        } else {
          setIsSubmitted(false);
          setSelectedAnswer(null);
        }
      }
    };
  
    const getButtonColor = (answer) => {
      const answerLetter = answer.charAt(0);
        if (isSubmitted) {
          if (answer === selectedAnswer) {
            return answerLetter === correctAnswer ? "#42D674" : "#FFADA8";
          }
          return "#FFFFFF";
        }
        return selectedAnswer === answer ? "#E3E3E3" : "#FFFFFF";
      };
  
    return (
      <VStack spacing={3} p={4} bg="white" borderRadius="15px" width="100%">
        <Flex flexDirection={"column"}
                direction={"LTR"}
                flexWrap={true}
                gap={3}
                py="4"
                width="100%">
          {answers.map((answer, index) => (
            <Button
              key={index}
              bg={getButtonColor(answer)}
              borderColor="#E3E3E3"
              borderWidth="2px"
              _hover={{ bg: "#E3E3E3" }}
              _active={{ 
                bg: "#E3E3E3",
                transform: "scale(0.98)", 
              }}
              display="inline-block"
              overflow="hidden"
              whiteSpace="normal"
              onClick={() => handleAnswerClick(answer)}
            >
              <Text fontSize="12px" textAlign="left">{answer}</Text>
            </Button>
          ))}
        </Flex>
        <Flex justifyContent="flex-end" mt="4" width="100%">
          <Button
            bg="#316D60"
            paddingLeft="10"
            paddingRight="10"
            color="#FFFFFF"
            borderRadius="20"
            fontSize="14px"
            onClick={handleSubmit}
          >
            {isSubmitted ? (isCorrect ? "Correct!" : "Try Again!") : "Submit Answer"}
          </Button>
        </Flex>
      </VStack>
    );
  };  
  
  export default QuestionCard;