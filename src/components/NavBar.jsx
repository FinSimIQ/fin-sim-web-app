import React from 'react';
import { Flex, Box, Text, Button, Link, IconButton } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="white"
      color="#102126"
      position="relative"
      width="100%"
      fontFamily="poppins"
    >
      {/* Logo Section */}
      <Flex align="center" letterSpacing="tightest">
        <Text fontSize={{ base: '4xl', md: '6xl' }} fontWeight="bold" ml={3} textShadow="1px 1px 1px gray" color="#262626">
          finsim
        </Text>
        <Text fontSize={{ base: '4xl', md: '6xl' }} fontWeight="bold" textShadow="1px 1px 1px gray" color="#42D674">
          IQ
        </Text>
      </Flex>

      {/* Hamburger Icon for Mobile */}
      <IconButton
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        display={{ base: 'block', md: 'none' }}
        onClick={toggleMenu}
        variant="outline"
        aria-label="Toggle Navigation"
      />

      {/* Links Section */}
      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        justifyContent="flex-end"
        pr={10}
      >
        <Link
          as={RouterLink}
          to="/"
          p={2}
          mx={4}
          rounded="md"
          display="block"
          align="center"
          _hover={{ bg: 'gray.100' }}
          fontWeight="medium"
          fontSize={{ base: '16px', md: '18px' }}
          color="#3B3B3B"
        >
          Home
        </Link>
        <Link
          as={RouterLink}
          to="/learn"
          p={2}
          mx={4}
          rounded="md"
          display="block"
          align="center"
          _hover={{ bg: 'gray.100' }}
          fontWeight="medium"
          fontSize={{ base: '16px', md: '18px' }}
          color="#3B3B3B"
        >
          Learn
        </Link>
        <Link
          as={RouterLink}
          to="/challenges"
          p={2}
          mx={4}
          rounded="md"
          display="block"
          align="center"
          _hover={{ bg: 'gray.100' }}
          fontWeight="medium"
          fontSize={{ base: '16px', md: '18px' }}
          color="#3B3B3B"
        >
          Challenges
        </Link>
        <Link
          as={RouterLink}
          to="/leaderboard"
          p={2}
          mx={4}
          rounded="md"
          display="block"
          align="center"
          _hover={{ bg: 'gray.100' }}
          fontWeight="medium"
          fontSize={{ base: '16px', md: '18px' }}
          color="#3B3B3B"
        >
          Leaderboard
        </Link>
        <Button
          as={RouterLink}
          to="/login"
          variant="primary"
          size={{ base: 'sm', md: 'md' }}
          px={6}
          py={3}
          fontSize={{ base: '16px', md: '18px' }}
          borderRadius="30px"
          mx={4}
          width="9%"
        >
          Log In
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;

