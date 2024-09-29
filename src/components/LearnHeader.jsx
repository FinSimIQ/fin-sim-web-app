import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const LearnHeader = () => {
	return (
		<Flex
			bg="brand.600"
			borderRadius="20px"
			p={5}
			color="white"
			align="center"
			position="relative"
			height="750px"
		>
			<Image
				src="/images/learning-header/learning_header.svg"
				alt="Learning illustration"
				objectFit="cover"
				h="100%"
			/>
			<Box textAlign="center" flex="1" p={5} position="relative" height="300px">
				<Box position="absolute" top="-115px" left="50%" transform="translateX(-50%)" zIndex="2">
					<Image src="/images/learning-header/sparkle.svg" alt="Sparkles" boxSize="300px" />
				</Box>
				<Heading spacing="0" fontWeight="bold" as="h1" size="2xl" mb={3} fontFamily="poppins" pt={10} zIndex="1">
					Learn
				</Heading>
				<Text fontSize="3xl" fontFamily="metrophobic" px={5} maxWidth={{ base: "90%", md: "80%", lg: "70%" }} mx="auto" >
					Test your knowledge with Quizzes and 
					learn along the way! Quizzes are adaptive to user skill 
					levels and tailored to the content and level of difficulty.
  				</Text>
			</Box>

		</Flex>
	);
};

export default LearnHeader;
