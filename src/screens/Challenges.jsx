import { Text, Container, Heading, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

const Challenges = (props) => {
  // for question 1
  const [selectedAnswer1, setSelectedAnswer1] = useState(null);
  const [isSelected1, setIsSubmitted1] = useState(false);

  // assign the correct answer for question 1 to check later
  const correctAnswer1 = "A";

  // handle answer selection
  const handleAnswerClick = (answer) => {
    if (!isSubmitted) {
      setSelectedAnswer(answer);
    }
  };

  // handle submission
  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  // getting and setting answer button color
  const getButtonColor = (answer) => {
    if (isSubmitted) {
      return answer === correctAnswer1 ? "green" : "red"; // Green if correct, red if wrong
    }
    return selectedAnswer1 === answer ? "gray" : "#FFFFFF"; // Gray when selected before submission
  };

  return (
    <Flex
      width={"100vw"}
      height={"100wh"}
      justifyContent={"center"}
      bg="#D9D9D9"
    >
      <Flex padding="10" spacing="10" flexDirection={"column"}>
        <Container bg="#316D60" color="#FFFFFF" borderRadius="15" padding="4">
          <Heading fontSize="32px">Weekly Market Challenge</Heading>
          <Text fontSize="18px">
            Test your market analysis skills with this week's challenge.
          </Text>
        </Container>
        {/* Question Container 1 */}
        <Container bg="#FFFFFF" color="#3B3B3B" borderRadius="15" padding="4">
          <Heading fontSize="28px">Market Volatility Analysis</Heading>
          <Text fontSize="18px">Scenario:</Text>
          <Text fontSize="12px">
            The stock market has been fluctuating significantly due to
            uncertainty around a central bank's interest rate decisions. One
            company, XYZ Corp, experienced a 10% drop in stock price over the
            last two weeks but rebounded by 5% in the last few days. As an
            investor, you are analyzing whether to adjust your portfolio. Given
            the market conditions, you are considering the best strategy to
            manage risk.
          </Text>
          <Text fontSize="18px">Question:</Text>
          <Text fontSize="12px">
            What is the best approach to mitigate the impact of market
            volatility on your portfolio in this scenario?
          </Text>
          <Flex flexDirection={"column"} direction={"LTR"} flexWrap={true}>
            <Button
              bg="#FFFFFF"
              borderColor="#E3E3E3"
              _hover={{ bg: "#E3E3E3" }}
              _active={{
                bg: "#42D674",
                transform: "scale(0.98)",
                borderColor: "#51B276",
              }}
              display="inline-block"
              overflow="hidden"
              whiteSpace="normal"
            >
              <Text fontSize="12px" textAlign="left">
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
              display="inline-block"
              overflow="hidden"
              whiteSpace="normal"
            >
              <Text fontSize="12px" textAlign="left">
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
              display="inline-block"
              overflow="hidden"
              whiteSpace="normal"
            >
              <Text fontSize="12px" textAlign="left">
                Diversify your portfolio by investing in a mix of low-volatility
                assets, such as bonds and utilities.
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
            <Container>
              <Button
                bg="#316D60"
                paddingLeft="10"
                paddingRight="10"
                color="#FFFFFF"
                borderRadius="20"
                fontSize="14px"
                display="inline-block"
                overflow="hidden"
                whiteSpace="normal"
                onClick={handleSubmit}
              >
                Submit Answer
              </Button>
            </Container>
          </Flex>
        </Container>
        {/*// Question Container 2 // Question Container 3*/}
      </Flex>
    </Flex>
  );
};

export default Challenges;
