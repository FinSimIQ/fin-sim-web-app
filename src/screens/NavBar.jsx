import React from "react";
import { Flex, Box, Text, Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      fontWeight="semibold"
      bg="white"
      color="#102126"
      position="relative"
      width="100%"
    >
      <Flex align="center">
        <Text
          fontSize="6xl"
          fontWeight="bold"
          ml={3}
          textShadow="1px 1px 1px gray"
          color={"#262626"}
        >
          finsim
        </Text>
        <Text
          fontSize="6xl"
          fontWeight="bold"
          textShadow="1px 1px 1px gray"
          color={"#42D674"}
        >
          IQ
        </Text>
      </Flex>

      <Box
        display="flex"
        width="auto"
        alignItems="center"
        flexGrow={1}
        justifyContent="right"
        pr={10}
      >
        <Link
          as={RouterLink}
          to="/"
          p={2}
          mx={2}
          rounded="md"
          _hover={{ bg: "gray.100" }}
        >
          Home
        </Link>
        <Link
          as={RouterLink}
          to="/learning"
          p={2}
          mx={2}
          rounded="md"
          _hover={{ bg: "gray.100" }}
        >
          Learn
        </Link>
        <Link
          as={RouterLink}
          to="/challenges"
          p={2}
          mx={2}
          rounded="md"
          _hover={{ bg: "gray.100" }}
        >
          Challenges
        </Link>
        <Link
          as={RouterLink}
          to="/leaderboard"
          p={2}
          mx={2}
          rounded="md"
          _hover={{ bg: "gray.100" }}
        >
          Leaderboard
        </Link>
        <Button
          as={RouterLink}
          to="/login"
          bg="#42D674"
          color="white"
          size="md"
          mr={4}
          _hover={{ bg: "teal.300" }}
        >
          Log In
        </Button>
      </Box>
    </Flex>
  );
};
export default NavBar;
