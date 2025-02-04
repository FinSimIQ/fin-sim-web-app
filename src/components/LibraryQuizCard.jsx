import { useNavigate } from "react-router-dom";
import { Image, Text, VStack, Button, HStack, Stack } from "@chakra-ui/react";

const LibraryQuizCard = ({ title, difficulty, imageSrc, numQuestions }) => {
	return (
		<HStack
			bg="brand.600"
			w="full"
			py={4}
			pl={4}
			pr={8}
			borderRadius={24}
			justify="space-between"
		>
			<HStack gap={6}>
				<Stack bg="white" p={4} borderRadius={16}>
					<Image src={imageSrc} alt="Logo" h="12" draggable="false" />
				</Stack>
				<VStack alignItems="start" color="white" gap={0}>
					<Text fontSize="2xl" fontWeight="medium">
						{title}
					</Text>
					<Text fontSize="lg" fontFamily="metrophobic">
						{numQuestions} Questions
					</Text>
				</VStack>
			</HStack>
			<Button
				colorScheme="brand"
				variant="tertiary"
				fontSize="lg"
				borderRadius="16"
				onClick={() => {}}
			>
				Review Quiz
			</Button>
		</HStack>
	);
};

export default LibraryQuizCard;
