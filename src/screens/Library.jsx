import {
	Container,
	Heading,
	VStack,
	HStack,
	useBreakpointValue,
} from "@chakra-ui/react";
import Navbar from "../components/NavBar";

const Library = () => {
	const headingSize = useBreakpointValue({ base: "xl", md: "xl" });

	return (
		<Container minW="100%" p="0" m="0">
			<Navbar></Navbar>
			<Container
				h="100dvh"
				maxW="100%"
				align="center"
				py="65px"
				background="#F1F1F1"
			>
				<VStack spacing={4} align="center">
					<HStack
						justifyContent="space-between"
						alignItems="center"
						px={[2, 4]}
						py={2}
						width="100%"
					>
						<Heading
							as="h2"
							size={headingSize} // Assuming headingSize is either "xl" or "2xl"
							color="#3B3B3B"
							pl={5}
							fontFamily="poppins"
							fontWeight="semibold"
						>
							Quizzes Library
						</Heading>
					</HStack>
				</VStack>
			</Container>
		</Container>
	);
};

export default Library;
