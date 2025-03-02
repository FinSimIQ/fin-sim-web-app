import {
  Text,
  Container,
  Heading,
  Button,
  Flex,
  VStack,
  CircularProgress,
} from "@chakra-ui/react";
import React, { useState, useEffect, useReducer } from "react";
import Navbar from "../components/NavBar";

const Challenges = (props) => {
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

  // handle submission
  const handleSubmit = () => {
    if (isSubmitted && isCorrect && index == 4) {
      setAllCorrect(true);
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

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:8081/api/quiz/weekly-quiz/latest`, {
      method: "GET",
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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // set a useState loading variable to false so that the ui updates from the loader
    if (quiz !== null) {
      setLoading(false);
    }
  }, [quiz]);

  // question;
  // correctAnswer;
  // options[list];

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

  if (loading) {
    // return a loader which there should be a chakra ui component for
    return (
      <Container minW="100%" p="0" m="0">
        <Navbar></Navbar>
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
      </Container>
    );
  }

  if (allCorrect) {
    return (
      <Container minW="100%" p="0" m="0">
        <Navbar></Navbar>
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
    <Container minW="100%" p="0" m="0">
      <Navbar></Navbar>
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
            {/* Submit Button */}
            <Flex justifyContent="flex-end" mt="4">
              <Button
                bg="#316D60"
                paddingLeft="10"
                paddingRight="10"
                color="#FFFFFF"
                borderRadius="20"
                fontSize="14px"
                onClick={handleSubmit}
              >
                {submitButtonText}
              </Button>
            </Flex>
          </Container>
          {/* Question Container 2 */}
          {/* Question 3 etc... */}
          {/* <VStack>
               <Button
                 bg="#FFFFFF"
                 borderColor="#E3E3E3"
                 _hover={{ bg: "#E3E3E3" }}
                 _active={{
                   bg: "#42D674",
                   transform: "scale(0.98)",
                   borderColor: "#51B276",
                 }}
                 w="100%"
                 justifyContent={"start"}
               >
                 <Text fontSize="12px">
                   Buy more shares of XYZ Corp, taking advantage of the price dip
                   in hopes of long-term growth.
                 </Text>
               </Button>
               <Button
                 bg="#FFFFFF"
                 borderColor="#E3E3E3"
                 _hover={{ bg: "#E3E3E3" }}
                 _active={{
                   bg: "#42D674",
                   transform: "scale(0.98)",
                   borderColor: "#51B276",
                 }}
                 w="100%"
                 justifyContent={"start"}
               >
                 <Text fontSize="12px" textAlign="right">
                   Sell all shares of XYZ Corp to avoid further potential losses.
                 </Text>
               </Button>
               <Button
                 bg="#FFFFFF"
                 borderColor="#E3E3E3"
                 _hover={{ bg: "#E3E3E3" }}
                 _active={{
                   bg: "#42D674",
                   transform: "scale(0.98)",
                   borderColor: "#51B276",
                 }}
                 w="100%"
                 justifyContent={"start"}
               >
                 <Text fontSize="12px" textAlign="right">
                  Diversify your portfolio by investing in a mix of
                   low-volatility assets, such as bonds and utilities.
                 </Text>
               </Button>
               <Button
                 bg="#FFFFFF"
                 borderColor="#E3E3E3"
                _hover={{ bg: "#E3E3E3" }}
               _active={{
                   bg: "#42D674",
                   transform: "scale(0.98)",
                   borderColor: "#51B276",
                 }}
                 w="100%"
                 justifyContent={"start"}
               >
                 <Text fontSize="12px" textAlign="right">
                   Hold your current position in XYZ Corp and wait for the market
                   to stabilize before making any changes.
                 </Text>
               </Button>
               <Container
                 minW="container.xl"
                 display="flex"
                 paddingRight={10}
                 justifyContent="end"
               >
                 <Button
                   bg="#316D60"
                   paddingLeft="10"
                   paddingRight="10"
                   color="#FFFFFF"
                   borderRadius="20"
                   fontSize="14px"
                 >
                   Submit Answer
                 </Button>
               </Container>
             </VStack>
           </Container>*/}
        </VStack>
      </Container>
    </Container>
  );
};

export default Challenges;
