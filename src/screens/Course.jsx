import react from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Icon,
  Box,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
  Link,
  useBreakpointValue,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { Link as RouterLink, useParams, useLocation } from "react-router-dom";
import CourseSubtopic from "../components/CourseSubtopic";
import QuizIcon from "../assets/quizIcon.svg";

const colorSchemeMap = {
  Beginner: {
    bgColor: "rgba(66, 214, 116, 0.18)",
    textColor: "rgba(66, 214, 116, 1)",
  },
  Intermediate: {
    bgColor: "rgba(255, 168, 0, 0.18)",
    textColor: "rgba(255, 168, 0, 1)",
  },
  Advanced: {
    bgColor: "rgba(255, 67, 55, 0.18)",
    textColor: "rgba(255, 67, 55, 1)",
  },
};

const Course = () => {
  const { title, difficulty, imageSrc, description, subtopics } =
    useLocation().state;

  const { bgColor, textColor } = colorSchemeMap[difficulty] || {
    bgColor: "gray.200",
    textColor: "gray.800",
  };

  return (
    <VStack
      w="100%"
      h="100%"
      bg="#FFFFFF"
      align="stretch"
      flexGrow={1}
      justifyContent="center"
      alignItems="center"
      display="flex"
    >
      <VStack
        px={5}
        py={4}
        align="stretch"
        spacing={4}
        flexGrow={1}
        width="80%"
      >
        <HStack alignItems="left" display="flex" left="0" textAlign="left">
          <Link
            as={RouterLink}
            to="/learn"
            p={2}
            rounded="md"
            display="block"
            align="center"
            _hover={{ bg: "gray.100" }}
            fontWeight="600"
            fontSize={{ base: "14px", md: "18px" }}
            color="#3B3B3B"
          >
            <Icon as={ArrowBackIcon} w={6} h={6} />
            Return
          </Link>
        </HStack>
        <Heading
          size="lg"
          color="#3B3B3B"
          textAlign="left"
          fontFamily="poppins"
          fontWeight="semibold"
        >
          {title}
        </Heading>
        <Text
          fontFamily="metrophobic"
          fontSize="md"
          color="#5D5D5D"
          textAlign="left"
        >
          {description}
        </Text>
        <Button
          size="md"
          rounded="xl"
          bg={bgColor}
          color={textColor}
          variant="solid"
          width={"min-content"}
        >
          {difficulty}
        </Button>
        <SimpleGrid width="full" justifyItems="center" spacing="6">
          {subtopics.map((topic, index) => {
            console.log("topic", topic);
            return (
              <CourseSubtopic key={index} index={index + 1} input={topic} />
            );
          })}
        </SimpleGrid>
        <HStack
          justify="space-between"
          width="100%"
          backgroundColor="#316D60"
          borderRadius="25px"
          mt="4"
        >
          <VStack align="start" ml="6" my="4" spacing="2">
            <Heading
              size="lg"
              color="white"
              fontFamily="poppins"
              fontWeight="semibold"
            >
              Course Quiz
            </Heading>
            <Text color="white" fontFamily="poppins">
              Test your knowledge by completing a quiz about the topic and earn
              points!
            </Text>
            <Link
              as={RouterLink}
              to="/learn"
              px={10}
              py={2}
              rounded="25px"
              display="block"
              align="center"
              _hover={{ bg: "gray.100" }}
              backgroundColor="white"
              fontWeight="600"
              color="rgba(66, 214, 116, 1)"
              fontSize={{ base: "14px", md: "18px" }}
            >
              Start Quiz
            </Link>
          </VStack>
          <Image
            src={QuizIcon}
            alt={`Cover image for quiz icon`}
            maxWidth="50%"
            height="auto"
          />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Course;
