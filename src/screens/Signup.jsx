import React from 'react';
import { Flex, Box, Input, InputGroup, InputLeftElement, Button, Text, Link } from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { FaUserAlt } from 'react-icons/fa';

const Signup = () => {
  return (
    <Flex h="100vh">
      <Box flex="1" bg="white" p="8" display="flex" alignItems="center" justifyContent="center">
        <Box w="100%" maxW="400px">
          <Text fontSize="3xl" fontWeight="bold" mb="4">
            Create Your Account
          </Text>
          
          <InputGroup mb="4">
            <InputLeftElement pointerEvents="none">
              <FaUserAlt color="gray.400" />
            </InputLeftElement>
            <Input type="text" placeholder="Full Name" isRequired />
          </InputGroup>

          <InputGroup mb="4">
            <InputLeftElement pointerEvents="none">
              <EmailIcon color="gray.400" />
            </InputLeftElement>
            <Input type="email" placeholder="Enter Your Email" isRequired />
          </InputGroup>

          <InputGroup mb="4">
            <InputLeftElement pointerEvents="none">
              <LockIcon color="gray.400" />
            </InputLeftElement>
            <Input type="password" placeholder="Enter Your Password" isRequired />
          </InputGroup>

          <Button colorScheme="green" size="lg" w="100%" mb="4">
            Sign Up
          </Button>

          <Text textAlign="center">
            Already have an account?{' '}
            <Link color="green.500" href="#">
              Sign in
            </Link>
          </Text>
        </Box>
      </Box>

      <Box flex="1" bg="green.100" display={{ base: 'none', md: 'block' }}>
        <Box h="100%" bg="green.200" backgroundSize="cover" />
      </Box>
    </Flex>
  );
};

export default Signup;