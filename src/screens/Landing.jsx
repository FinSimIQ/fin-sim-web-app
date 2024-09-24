import {
	Box,
	Button,
	Center,
	Container,
	Flex,
	Grid,
	GridItem,
	HStack,
	Image,
	Spacer,
	Square,
	Text,
	VStack,
} from "@chakra-ui/react";
import LogoImage from "../assets/logo.svg";
import HeaderImage from "../assets/header.svg";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Landing = () => {
	return (
		<Container minW="100%" p="0" m="0" bg="brand.600" fontFamily="poppins">
			<Flex
				spacing="24px"
				bg="white"
				maxW="50%"
				borderRadius="24"
				px="6"
				alignItems="center"
				position="sticky"
				top="3%"
				left="25%"
				fontWeight="semibold"
				letterSpacing="tightish"
				fontSize="lg"
			>
				<Image src={LogoImage} alt="Logo" h="12" />
				<Spacer />
				<Text my="4">Home</Text>
				<Spacer />
				<Text my="4">Learn</Text>
				<Spacer />
				<Text my="4">Challenges</Text>
				<Spacer />
				<Text my="4">Leaderboard</Text>
				<Spacer />
				<Button colorScheme="brand" variant="primary" borderRadius="20">
					Sign In
				</Button>
			</Flex>
			<Container minW="100%">
				<HStack px="4" mt="20" mb="32" justify="center">
					<Image src={HeaderImage} alt="Header" w="50%" />
					{/* <Spacer /> */}
					<VStack textAlign="center">
						<HStack spacing="0" fontWeight="bold" letterSpacing="tightest">
							<Text fontSize="6xl" color="white">
								finsim
							</Text>
							<Text fontSize="6xl" color="brand.500">
								IQ
							</Text>
						</HStack>
						<Container
							maxW="md"
							fontSize="3xl"
							fontFamily="metrophobic"
							color="white"
						>
							A platform to learn and master financial literacy in a fun and
							engaging way!
						</Container>
						<Button
							colorScheme="brand"
							mt="4"
							borderRadius="20"
							fontWeight="semibold"
							letterSpacing="tightish"
							fontSize="lg"
							variant="primary"
							rightIcon={<ArrowForwardIcon boxSize={6} />}
						>
							Get Started
						</Button>
					</VStack>
				</HStack>
			</Container>
			<Container minW="100%" bg="#F4F4F4">
				<Text>Hello</Text>
			</Container>
		</Container>
	);
};

export default Landing;
