import React from 'react';
import { Flex, Box, Text, Button, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="white" color="#102126" position="relative" width="100%" fontFamily="poppins">
      <Flex align="center" letterSpacing="tightest">
        <Text fontSize="6xl" fontWeight="bold" ml={3} textShadow="1px 1px 1px gray" color="#262626">
          finsim
        </Text>
        <Text fontSize="6xl" fontWeight="bold" textShadow="1px 1px 1px gray" color="#42D674">
          IQ
        </Text>
      </Flex>

      <Box display="flex" width="auto" alignItems="center" flexGrow={1} justifyContent="right" pr={10}>
        <Link as={RouterLink} to="/" p={2} mx={4} rounded="md" width="8%" align="center" _hover={{ bg: 'gray.100' }} fontWeight="medium" fontSize="18px" color="#3B3B3B0">
          Home
        </Link>
        <Link as={RouterLink} to="/learn" p={2} mx="2%" rounded="md" width="8%" align="center"_hover={{ bg: 'gray.100' }} fontWeight="medium" fontSize="18px" color="#3B3B3B">
          Learn
        </Link>
        <Link as={RouterLink} to="/challenges" p={2} mx="2%" rounded="md" width="8%" align="center" _hover={{ bg: 'gray.100' }} fontWeight="medium" fontSize="18px" color="#3B3B3B">
          Challenges
        </Link>
        <Link as={RouterLink} to="/leaderboard" p={2} mx="2%" rounded="md" width="8%" align="center" _hover={{ bg: 'gray.100' }} fontWeight="medium" fontSize="18px" color="#3B3B3B">
          Leaderboard
        </Link>
        <Button as={RouterLink} to="/login" variant="primary" size="md" px={6} py={3} width="9%" fontSize="18px" borderRadius="30px" mx="2%">
          Log In
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
