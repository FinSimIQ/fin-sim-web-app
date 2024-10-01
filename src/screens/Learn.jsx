import {
	Box,
	Container,
	SimpleGrid,
	Heading,
	VStack,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	Icon,
	useBreakpointValue,
  } from "@chakra-ui/react";
  import { SearchIcon } from "@chakra-ui/icons";
  import QuizCard from "../components/QuizCard";
  import LearnHeader from "../components/LearnHeader";
  import Navbar from "../components/NavBar";
  
  const Learn = () => {
	const quizzes = [
	  {
		id: 1,
		title: "Stock Market",
		difficulty: "Beginner",
		imageSrc: "/images/quiz-covers/stock_market.svg",
		description:
		  "Overview of stock market operations, exchanges, and types of securities.",
	  },
	  {
		id: 2,
		title: "Personal Finance",
		difficulty: "Beginner",
		imageSrc: "/images/quiz-covers/personal_finance.svg",
		description:
		  "Core principles of budgeting, saving, investing, and debt management.",
	  },
	  {
		id: 3,
		title: "Fintech",
		difficulty: "Beginner",
		imageSrc: "/images/quiz-covers/fintech.svg",
		description:
		  "Insights into technology’s impact on finance, including digital payments and blockchain.",
	  },
	  {
		id: 4,
		title: "Investment",
		difficulty: "Intermediate",
		imageSrc: "/images/quiz-covers/investment.svg",
		description:
		  "Concepts of asset classes, portfolio diversification, and wealth-building strategies.",
	  },
	  {
		id: 5,
		title: "Risk Management",
		difficulty: "Intermediate",
		imageSrc: "/images/quiz-covers/risk_management.svg",
		description:
		  "Strategies for identifying and mitigating financial risks across various contexts.",
	  },
	  {
		id: 6,
		title: "Financial Analysis",
		difficulty: "Intermediate",
		imageSrc: "/images/quiz-covers/financial_analysis.svg",
		description:
		  "Overview of financial statements and using metrics to evaluate performance.",
	  },
	  {
		id: 7,
		title: "Quantitative Finance",
		difficulty: "Advanced",
		imageSrc: "/images/quiz-covers/quantitative_finance.svg",
		description:
		  "Mathematical methods for pricing financial instruments and managing risk.",
	  },
	  {
		id: 8,
		title: "Financial Modeling",
		difficulty: "Advanced",
		imageSrc: "/images/quiz-covers/financial_modeling.svg",
		description:
		  "Techniques for creating financial models to forecast performance and value companies.",
	  },
	  {
		id: 9,
		title: "Trading",
		difficulty: "Advanced",
		imageSrc: "/images/quiz-covers/trading.svg",
		description:
		  "Understanding market mechanics, order types, and strategies for buying and selling securities.",
	  },
	];
  
	const headingSize = useBreakpointValue({ base: "xl", md: "2xl" });
	const gridColumns = useBreakpointValue({ base: 1, md: 2, lg: 3 });
  
	return (
	  <Container minW="100%" p="0" m="0">
		<Navbar></Navbar>
		<Container maxW="100%" align="center" py="65" background="#F1F1F1">
		  <VStack spacing={4} align="center">
			<Box pl={[4, 8]} pr={[4, 8]}>
			  <LearnHeader></LearnHeader>
			</Box>
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
					Explore Quizzes
				</Heading>

				<InputGroup size="lg" maxW="400px" pr={4} height="48px"> // Adjusting the height to match typical heading height
					<InputLeftElement
					pointerEvents="none"
					height="100%" // Ensure icon container matches input height
					children={<Icon as={SearchIcon} color="#5D5D5D" boxSize={6} />} // Optionally adjust icon size
					/>
					<Input
					placeholder="Search"
					_placeholder={{ color: "#AAAAAA" }}
					bg="#E3E3E3"
					textColor="#AAAAAA"
					pl="2.5rem"
					fontSize="lg" // Adjust font size if needed
					height="100%" // Make input height fill the InputGroup
					/>
				</InputGroup>
			</HStack>

			<Box display="flex" justifyContent="center" width="100%">
			  <SimpleGrid
				columns={gridColumns}
				spacingX={60}
				spacingY={10}
				width="auto"
				justifyItems="center"
				px={[4, 12]}
			  >
				{quizzes.map((quiz) => (
				  <QuizCard
					key={quiz.id}
					title={quiz.title}
					difficulty={quiz.difficulty}
					imageSrc={quiz.imageSrc}
					description={quiz.description}
				  />
				))}
			  </SimpleGrid>
			</Box>
		  </VStack>
		</Container>
	  </Container>
	);
  };
  
  export default Learn;
  