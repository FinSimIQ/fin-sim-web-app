import {
  Text,
  Container,
  Heading,
  Button,
  Flex,
  VStack,
  CircularProgress,
} from "@chakra-ui/react";
import React, { useState, useEffect, useReducer } from "react";
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
