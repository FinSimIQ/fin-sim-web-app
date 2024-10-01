import React from 'react';
import { Flex, Box, Input, InputGroup, InputLeftElement, Button, Text, Link } from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';

const Login = () => {
  return (
    <Flex h="100vh">
      <Box flex="1" bg="white" p="8" display="flex" alignItems="center" justifyContent="center">
        <Box w="100%" maxW="400px">
          <Text fontSize="5xl" fontWeight="bold" mb="4">
            Sign In
          </Text>
          <Text mb="8" color="gray.500">
            Welcome back! Please enter your details.
          </Text>
          
          <InputGroup mb="4">
            <InputLeftElement pointerEvents="none">
              <EmailIcon color="gray.400" />
            </InputLeftElement>
            <Input type="email" placeholder="Enter Your Email" />
          </InputGroup>

          <InputGroup mb="4">
            <InputLeftElement pointerEvents="none">
              <LockIcon color="gray.400" />
            </InputLeftElement>
            <Input type="password" placeholder="Enter Your Password" />
          </InputGroup>

          <Box textAlign="right" mb="6">
            <Link color="gray.500" href="/forgotpassword">
              Forgot Password?
            </Link>
          </Box>

          <Button colorScheme="green" size="lg" w="100%" mb="4">
            Sign In
          </Button>

          <Text textAlign="center">
            Don't have an account?{' '}
            <Link color="green.500" href="/signup">
              Sign up
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

export default Login;