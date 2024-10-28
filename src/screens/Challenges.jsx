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
	// for QUESTION 1
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
					<Container
						minW="100%"
						bg="#FFFFFF"
						color="#3B3B3B"
						borderRadius="15"
						padding="4"
					>
						<Heading fontSize="28px">Economic Recession</Heading>
						<Text fontSize="18px" py="1">
							Scenario:
						</Text>
						<Text fontSize="12px">
							The economy has entered a recession, leading to declining consumer
							spending and rising unemployment. Many companies are issuing
							profit warnings, and overall market sentiment is pessimistic. You
							currently hold a variety of stocks, but the majority are in
							consumer discretionary sectors, which are highly sensitive to
							economic cycles. You’re trying to decide the best course of action
							to manage your investments during this recession.
						</Text>
						<Text fontSize="18px" py="1">
							Question:
						</Text>
						<Text fontSize="12px">
							What is the most prudent investment strategy to protect your
							portfolio during an economic downturn?
						</Text>
						<Flex
							flexDirection={"column"}
							direction={"LTR"}
							flexWrap={true}
							gap={3}
							py="4"
						>
							<Button
								bg={getButtonColor2("A")}
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
								onClick={() => handleAnswerClick2("A")}
							>
								<Text fontSize="12px" textAlign="left">
									Move a large portion of your investments into cash to avoid
									further losses.
								</Text>
							</Button>
							<Button
								bg={getButtonColor2("B")}
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
								onClick={() => handleAnswerClick2("B")}
							>
								<Text fontSize="12px" textAlign="left">
									Continue holding your consumer discretionary stocks, as the
									market will eventually recover.
								</Text>
							</Button>
							<Button
								bg={getButtonColor2("C")}
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
								onClick={() => handleAnswerClick2("C")}
							>
								<Text fontSize="12px" textAlign="left">
									Shift some of your investments into sectors like utilities and
									healthcare that tend to perform well during recessions.
								</Text>
							</Button>
							<Button
								bg={getButtonColor2("D")}
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
								onClick={() => handleAnswerClick2("D")}
							>
								<Text fontSize="12px" textAlign="left">
									Increase your investments in high-growth stocks, as they are
									likely to offer better returns when the recession ends.
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
								onClick={handleSubmit2}
							>
								{submitButtonText2}
							</Button>
						</Flex>
					</Container>
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
