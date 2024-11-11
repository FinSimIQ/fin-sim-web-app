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
} from "@chakra-ui/react";
import { Link as RouterLink, useParams, useLocation } from "react-router-dom";

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
  const { title, difficulty, imageSrc, description } = useLocation().state;

  const { bgColor, textColor } = colorSchemeMap[difficulty] || {
    bgColor: "gray.200",
    textColor: "gray.800",
  };

  return (
    <VStack w="100%" h="100%" bg="#FFFFFF" align="stretch" m="10">
      <HStack>
        <Link
          as={RouterLink}
          to="/learn"
          p={2}
          mx={{ base: 2, md: 6, lg: 10 }}
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
      <VStack px={5} py={4} align="stretch" spacing={4} flexGrow={1}>
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
      </VStack>
    </VStack>
  );
};

export default Course;
