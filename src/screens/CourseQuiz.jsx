import react from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Icon,
  Box,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
  Link,
  useBreakpointValue,
  SimpleGrid,
  Image,
  Container,
  Flex,
  CircularProgress,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Link as RouterLink, useParams, useLocation } from "react-router-dom";
import CourseSubtopic from "../components/CourseSubtopic";
import QuizIcon from "../assets/quizIcon.svg";
import React, { useState, useEffect } from "react";

const CourseQuiz = (props) => {
  {
    /* For Modal Open and Close */
  }
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  // global variable
  const [index, setIndex] = useState(0);

  const [questionStr, setQuestion] = useState("");
  const [answerA, setanswerA] = useState("");
  const [answerB, setanswerB] = useState("");
  const [answerC, setanswerC] = useState("");
  const [answerD, setanswerD] = useState("");
  const [correctAnswer, setcorrectAnswer] = useState("");

  const [message, setMessage] = useState("");
  const [quiz, setQuiz] = useState(null);

  const nextQuestion = () => {
    setIndex((prevState) => prevState + 1);
  };

  const [allCorrect, setAllCorrect] = useState(false);

  // for QUESTION
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // handle answer selection
  const handleAnswerClick = (answer) => {
    if (!isSubmitted) {
      setSelectedAnswer(answer);
    }
  };

  // handle submit quiz button
  const handleSubmit = () => {
    amountCorrect = 0.8;
    if (amountCorrect >= 0.8) {
      modeal;
    } else if (isSubmitted && isCorrect) {
      nextQuestion();
      setIsSubmitted(false);
      setSelectedAnswer(null);
      setIsCorrect(false);
    } else if (!isSubmitted) {
      setIsSubmitted(true);
      setIsCorrect(selectedAnswer === correctAnswer);
    } else {
      setIsSubmitted(false);
      setSelectedAnswer(null);
      setIsCorrect(false);
    }
  };

  // getting and setting answer button bg color
  // hover and pressed
  const getButtonColor = (answer) => {
    if (isSubmitted) {
      if (answer === selectedAnswer) {
        return answer === correctAnswer ? "#42D674" : "#FFADA8"; // Green if correct, red if wrong
      } else {
        return "#FFFFFF";
      }
    }
    if (!isSubmitted & (selectedAnswer != null)) {
      if (answer === selectedAnswer) {
        return "#E3E3E3";
      } else {
        return "#FFFFFF";
      }
    }
    if (!isSubmitted & (selectedAnswer == null)) {
      return "#FFFFFF";
    }
  };

  var submitButtonText;

  if (!isSubmitted) {
    submitButtonText = "Submit Answer";
  } else if (isSubmitted && !isCorrect) {
    submitButtonText = "Try Again!";
  } else if (isSubmitted && isCorrect) {
    submitButtonText = "Correct!";
  }

  useEffect(() => {
    fetch("http://localhost:8081/api/quiz/generate", {
      method: "POST",
      body: {},
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message); // sets message
        setQuiz(data.quiz); // sets quiz

        setQuestion(data.quiz.questions[index].question);
        setanswerA(data.quiz.questions[index].answers[0]);
        setanswerB(data.quiz.questions[index].answers[1]);
        setanswerC(data.quiz.questions[index].answers[2]);
        setanswerD(data.quiz.questions[index].answers[3]);
        setcorrectAnswer(
          data.quiz.questions[index].correctAnswer.substring(0, 1)
        );
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    // move onto the current index's question
    if (quiz !== null) {
      setQuestion(quiz.questions[index].question);
      setanswerA(quiz.questions[index].answers[0]);
      setanswerB(quiz.questions[index].answers[1]);
      setanswerC(quiz.questions[index].answers[2]);
      setanswerD(quiz.questions[index].answers[3]);
      setcorrectAnswer(quiz.questions[index].correctAnswer.substring(0, 1));
    }
  }, [index]);

  // for QUESTION 2
  const [selectedAnswer2, setSelectedAnswer2] = useState(null);
  const [isSubmitted2, setIsSubmitted2] = useState(false);
  const [isCorrect2, setIsCorrect2] = useState(false);

  // assign the correct answer for question 1 to check later
  const correctAnswer2 = "C";

  // handle answer selection
  const handleAnswerClick2 = (answer) => {
    if (!isSubmitted2) {
      setSelectedAnswer2(answer);
    }
  };

  // handle submission
  const handleSubmit2 = () => {
    if (!isSubmitted2) {
      setIsSubmitted2(true);
      setIsCorrect2(selectedAnswer2 === correctAnswer2);
    } else {
      setIsSubmitted2(false);
      setSelectedAnswer2(null);
      setIsCorrect2(false);
    }
  };

  // getting and setting answer button bg color
  // hover and pressed
  const getButtonColor2 = (answer) => {
    if (isSubmitted2) {
      if (answer === selectedAnswer2) {
        return answer === correctAnswer2 ? "#42D674" : "#FFADA8"; // Green if correct, red if wrong
      } else {
        return "#FFFFFF";
      }
    }
    if (!isSubmitted2 & (selectedAnswer2 != null)) {
      if (answer === selectedAnswer2) {
        return "#E3E3E3";
      } else {
        return "#FFFFFF";
      }
    }
    if (!isSubmitted2 & (selectedAnswer2 == null)) {
      return "#FFFFFF";
    }
  };

  var submitButtonText2;

  if (!isSubmitted2) {
    submitButtonText2 = "Submit Answer";
  } else if (isSubmitted2 && !isCorrect2) {
    submitButtonText2 = "Try Again!";
  } else if (isSubmitted2 && isCorrect2) {
    submitButtonText2 = "Correct!";
  }

  if (allCorrect) {
    return (
      <Container minW="100%" p="0" m="0">
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
      </Container>
    );
  }

  return (
    <Container
      minW="100%"
      p="0"
      m="0"
      bg="#D9D9D9"
      maxW="container.2xl"
      height="100vh"
    >
      <VStack padding="10" spacing="10">
        <Container minW="container.xl" borderRadius="5">
          <HStack alignItems="flex-start" textAlign="left" width="100%">
            <Link
              as={RouterLink}
              to="/learn"
              p={2}
              rounded="md"
              display="block"
              _hover={{ bg: "gray.100" }}
              fontWeight="600"
              fontSize={{ base: "14px", md: "18px" }}
              color="#3B3B3B"
            >
              <Icon as={ArrowBackIcon} w={6} h={6} />
              Return
            </Link>
          </HStack>
        </Container>
        <Container
          minW="container.xl"
          bg="#316D60"
          color="#FFFFFF"
          borderRadius="15"
          paddingY="8"
          paddingX="6"
        >
          <Heading fontSize="32px">Course Quiz</Heading>
          <Text fontSize="18px">
            Test your knowledge by completing a quiz over the topic and earn
            points.
          </Text>
        </Container>
        <Container
          minW="container.xl"
          bg="#FFFFFF"
          color="#3B3B3B"
          borderRadius="15"
          padding="4"
        >
          <Heading fontSize="28px">Question:</Heading>
          <Text fontSize="12px">
            Lorem ipsum dolor sit amet {questionStr} {/* ????? */}
          </Text>
          <Text fontSize="18px" py="1">
            Please select an answer choice.
          </Text>
          <Flex
            flexDirection={"column"}
            direction={"LTR"}
            flexWrap={true}
            gap={3}
            py="4"
          >
            <Button
              bg={getButtonColor("A")}
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
              onClick={() => handleAnswerClick("A")}
            >
              <Text fontSize="12px" textAlign="left">
                {answerA}
              </Text>
            </Button>
            <Button
              bg={getButtonColor("B")}
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
              onClick={() => handleAnswerClick("B")}
            >
              <Text fontSize="12px" textAlign="left">
                {answerB}
              </Text>
            </Button>
            <Button
              bg={getButtonColor("C")}
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
              onClick={() => handleAnswerClick("C")}
            >
              <Text fontSize="12px" textAlign="left">
                {answerC}
              </Text>
            </Button>
            <Button
              bg={getButtonColor("D")}
              borderColor="#E3E3E3"
              borderWidth="2px"
              border
              _hover={{ bg: "#E3E3E3" }}
              _active={{
                bg: "#E3E3E3",
                transform: "scale(0.98)",
              }}
              display="inline-block"
              overflow="hidden"
              whiteSpace="normal"
              onClick={() => handleAnswerClick("D")}
            >
              <Text fontSize="12px" textAlign="left">
                {answerD}
              </Text>
            </Button>
          </Flex>
          {/* Floating Submit Button */}
          <Flex justifyContent="flex-end" mt="4">
            <Button
              position="fixed"
              bg="#316D60"
              paddingLeft="10"
              paddingRight="10"
              bottom="10"
              color="#FFFFFF"
              borderRadius="20"
              fontSize="14px"
              onClick={onOpen}
            >
              Submit Quiz
            </Button>
          </Flex>
        </Container>

        {/* Modal pop-up*/}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Congratulations!</ModalHeader>
            <ModalBody>
              <Text>You have successfully completed the course.</Text>
            </ModalBody>
            <ModalHeader>+10 points</ModalHeader>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Review Answers
              </Button>
              <Button variant="ghost">Return to Learn</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
    </Container>
  );
};

export default CourseQuiz;
