import React, { useState, useEffect } from 'react';
import { Flex, Box, Text, Button, Link, IconButton} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    navigate('/');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={{ base: '1rem', md: '1.5rem' }} 
      bg="#FFFFFF"
      color="#102126"
      width="100%"
      mx="auto"
      position="relative"
      fontFamily="poppins"
      fontWeight="bold"
      boxShadow="0px 2px 5px rgba(0, 0, 0, 0.1)"
    >
      {/* Logo Section */}
      <Flex align="center" letterSpacing="tight">
        <Text
          fontSize={{ base: '3xl', md: '5xl', lg: '7xl' }}
          fontWeight="bold"
          ml={3}
          textShadow="1px 1px 1px gray"
          color="#262626"
        >
          finsim
        </Text>
        <Text
          fontSize={{ base: '3xl', md: '5xl', lg: '7xl' }}
          fontWeight="bold"
          textShadow="1px 1px 1px gray"
          color="#42D674"
        >
          IQ
        </Text>
      </Flex>

      <IconButton
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        display={{ base: 'block', md: 'none' }}
        onClick={toggleMenu}
        variant="outline"
        aria-label="Toggle Navigation"
        bg="transparent"
        border="none"
        _hover={{ bg: 'gray.100' }}
        color="black"
      />

      {/* Links Section */}
      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }} 
        alignItems="center"
        flexGrow={1}
        justifyContent="flex-end"
        pr={{ base: 0, md: 10 }} 
        mt={{ base: isOpen ? 4 : 0, md: 0 }}
      >
        <Link
          as={RouterLink}
          to="/"
          p={2}
          mx={{ base: 2, md: 6, lg: 10 }}
          rounded="md"
          display="block"
          align="center"
          _hover={{ bg: 'gray.100' }}
          fontWeight="600"
          fontSize={{ base: '14px', md: '18px' }}
          color="#3B3B3B"
        >
          Home
        </Link>
        <Link
          as={RouterLink}
          to="/learn"
          p={2}
          mx={{ base: 2, md: 6, lg: 10 }}  
          rounded="md"
          display="block"
          align="center"
          _hover={{ bg: 'gray.100' }}
          fontWeight="600"
          fontSize={{ base: '14px', md: '18px' }}
          color="#3B3B3B"
        >
          Learn
        </Link>
        <Link
          as={RouterLink}
          to="/challenges"
          p={2}
          mx={{ base: 2, md: 6, lg: 10 }}
          rounded="md"
          display="block"
          align="center"
          _hover={{ bg: 'gray.100' }}
          fontWeight="600"
          fontSize={{ base: '14px', md: '18px' }}
          color="#3B3B3B"
        >
          Challenges
        </Link>
        <Link
          as={RouterLink}
          to="/leaderboard"
          p={2}
          mx={{ base: 2, md: 6, lg: 10 }}
          rounded="md"
          display="block"
          align="center"
          _hover={{ bg: 'gray.100' }}
          fontWeight="600"
          fontSize={{ base: '14px', md: '18px' }}
          color="#3B3B3B"
        >
          Leaderboard
        </Link>

        {isAuthenticated ? (
          <Button
            onClick={handleLogout}
            variant="solid"
            bg="#42D674"
            color="white"
            _hover={{ bg: '#36b96c' }}
            size={{ base: 'sm', md: 'md', lg: 'lg' }}
            px={{ base: 4, md: 6 }}
            py={3}
            fontSize={{ base: '14px', md: '18px' }}
            borderRadius="30px"
            ml={{ base: 2, md: 6, lg: 10 }} 
          >
            Log Out
          </Button>
        ) : (
          <Button
            as={RouterLink}
            to="/login"
            variant="solid"
            bg="#42D674"
            color="white"
            _hover={{ bg: '#36b96c' }}
            size={{ base: 'sm', md: 'md', lg: 'lg' }}
            px={{ base: 4, md: 6 }}
            py={3}
            fontSize={{ base: '14px', md: '18px' }}
            borderRadius="30px"
            ml={{ base: 2, md: 6, lg: 10 }} 
            width="10%"
          >
            Log In
          </Button>
        )}
      </Box>
    </Flex>
  );
};

export default Navbar;
