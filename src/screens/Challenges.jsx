import {
  Text,
  Container,
  Heading,
  Button,
  Flex,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../components/NavBar";

const Challenges = (props) => {
  // for question 1
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // assign the correct answer for question 1 to check later
  const correctAnswer1 = "B";

  // handle answer selection
  const handleAnswerClick = (answer) => {
    if (!isSubmitted) {
      setSelectedAnswer(answer);
    }
  };

  // handle submission
  const handleSubmit = () => {
    if (!isSubmitted) {
      setIsSubmitted(true);
      setIsCorrect(selectedAnswer === correctAnswer1);
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
        return answer === correctAnswer1 ? "#42D674" : "#FFADA8"; // Green if correct, red if wrong
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

  return (
    <Container minW="100%" p="0" m="0" bg="#D9D9D9">
      <Navbar></Navbar>
      <Container maxW="100%" py="65" background="#F1F1F1">
        <VStack spacing="4" align="stretch">
          <Container
            minW="100%"
            bg="#316D60"
            color="#FFFFFF"
            borderRadius="15"
            padding="4"
          >
            <Heading fontSize="32px">Weekly Market Challenge</Heading>
            <Text fontSize="18px">
              Test your market analysis skills with this week's challenge.
            </Text>
          </Container>
          {/* Question Container 1 */}
          <Container
            minW="100%"
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
            <Text fontSize="12px">
              What is the best approach to mitigate the impact of market
              volatility on your portfolio in this scenario?
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
                  Buy more shares of XYZ Corp, taking advantage of the price dip
                  in hopes of long-term growth.
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
                  borderColor: "#51B276",
                }}
                display="inline-block"
                overflow="hidden"
                whiteSpace="normal"
                onClick={() => handleAnswerClick("B")}
              >
                <Text fontSize="12px" textAlign="left">
                  Sell all shares of XYZ Corp to avoid further potential losses.
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
                  borderColor: "#51B276",
                }}
                display="inline-block"
                overflow="hidden"
                whiteSpace="normal"
                onClick={() => handleAnswerClick("C")}
              >
                <Text fontSize="12px" textAlign="left">
                  Diversify your portfolio by investing in a mix of
                  low-volatility assets, such as bonds and utilities.
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
                  borderColor: "#51B276",
                }}
                display="inline-block"
                overflow="hidden"
                whiteSpace="normal"
                onClick={() => handleAnswerClick("D")}
              >
                <Text fontSize="12px" textAlign="left">
                  Hold your current position in XYZ Corp and wait for the market
                  to stabilize before making any changes.
                </Text>
              </Button>
            </Flex>
            {/* Right-aligned Submit Button */}
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
          {/*// Question Container 2 // Question Container 3*/}
        </VStack>
      </Container>
    </Container>
  );
};

export default Challenges;
