  import { Container } from "@chakra-ui/react";
  import Navbar from "../components/NavBar";
  import QuizContainer from "./QuizContainer";

  const Challenges = () => {
    return (
      <Container minW="100%" p="0" m="0">
        <Navbar />
        <QuizContainer />
      </Container>
    );
  };

  export default Challenges;
