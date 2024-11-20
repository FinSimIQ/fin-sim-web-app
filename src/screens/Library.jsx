import {
  Container,
  Heading,
  VStack,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import LogoImage from "../assets/logo.svg";
import Navbar from "../components/NavBar";
import { useEffect, useState } from "react";
import LibraryQuizCard from "../components/LibraryQuizCard";

const Library = () => {
  const headingSize = useBreakpointValue({ base: "xl", md: "xl" });

  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/quiz/quizzes", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);

        setQuizzes(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <Container minW="100%" p="0" m="0">
      <Navbar></Navbar>
      <Container maxW="100%" align="center" py="65px" background="#F1F1F1">
        <VStack spacing={4} align="center" px={[2, 4]} mx={12}>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            py={2}
            width="100%"
          >
            <Heading
              as="h2"
              size={headingSize} // Assuming headingSize is either "xl" or "2xl"
              color="#3B3B3B"
              fontFamily="poppins"
              fontWeight="semibold"
            >
              Quizzes Library
            </Heading>
          </HStack>
          {quizzes.map((quiz, index) => (
            <LibraryQuizCard
              key={index}
              title={quiz.title}
              imageSrc={LogoImage}
              numQuestions={quiz.questions?.length}
            />
          ))}
        </VStack>
      </Container>
    </Container>
  );
};

export default Library;
