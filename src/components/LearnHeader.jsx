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
			height={{ base: "400px", md: "800px", lg: "1000px" }} // Responsive height
			flexDirection={{ base: "column", md: "row" }} // Flex column on small screens, row on larger
		>
			<Image
				src="/images/learning-header/learning_header.svg"
				alt="Learning illustration"
				objectFit="cover"
				h={{ base: "50%", md: "100%" }} // Adjust height based on screen size
				w={{ base: "100%", md: "50%" }} // Full width on small screens, half on larger screens
			/>
			<Box
				textAlign="center"
				flex="1"
				p={5}
				position="relative"
				height={{ base: "auto", md: "300px" }} // Auto height on small screens
			>
				<Box
					position="absolute"
					top={{ base: "-50px", md: "-115px" }} // Adjust position of the sparkles
					left="50%"
					transform="translateX(-50%)"
					zIndex="2"
				>
					<Image
						src="/images/learning-header/sparkle.svg"
						alt="Sparkles"
						boxSize={{ base: "150px", md: "300px" }} // Smaller on mobile
					/>
				</Box>
				<Heading
					spacing="0"
					fontWeight="bold"
					as="h1"
					size={{ base: "xl", md: "2xl" }} // Smaller font size for mobile
					mb={3}
					fontFamily="poppins"
					pt={{ base: 5, md: 10 }} // Adjust top padding for smaller screens
					zIndex="1"
				>
					Learn
				</Heading>
				<Text
					fontSize={{ base: "lg", md: "2xl", lg: "3xl" }} // Responsive font size
					fontFamily="metrophobic"
					px={5}
					maxWidth={{ base: "90%", md: "80%", lg: "70%" }}
					mx="auto"
				>
					Test your knowledge with Quizzes and learn along the way! Quizzes are adaptive to user skill levels and tailored to the content and level of difficulty.
				</Text>
			</Box>
		</Flex>
	);
};

export default LearnHeader;
