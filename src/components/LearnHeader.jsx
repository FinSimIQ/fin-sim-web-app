import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const LearnHeader = () => {
	return (
		<Flex
			bg="#316D60"
			borderRadius="20px"
			p={5}
			color="white"
			align="center"
			position="relative"
			height="400px"
		>
			<Image
				src="/images/learning-header/learning_header.png"
				alt="Learning illustration"
				objectFit="cover"
				h="100%"
			/>
			<Box textAlign="center" flex="1" p={5}>
				<Heading as="h1" size="2xl" mb={3}>
					Learn
				</Heading>
				<Text fontSize="lg">
					Test your knowledge with Quizzes and learn along the way! Quizzes are
					adaptive to user skill levels and tailored to the content and level of
					difficulty.
				</Text>
			</Box>
		</Flex>
	);
};

export default LearnHeader;
