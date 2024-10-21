import React, { useState } from 'react';
import { Flex, Box, Input, InputGroup, InputLeftElement, InputRightElement, Button, Text, Link, FormControl, FormLabel } from '@chakra-ui/react';
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import wave from "../assets/wave.svg";

const Login = () => {
  // password visibility
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordToggle = () => setShowPassword(!showPassword);

  return (
    <Flex h="100vh">
      <Box flex="1" bg="white" p="8" display="flex" alignItems="center" justifyContent="center">
        <Box w="100%" maxW="400px">

          <Text fontSize="4xl" fontWeight="bold" textAlign="center" mb="4" color="gray.600">
            Sign In
          </Text>
          <Text textAlign="center" mb="8" color="gray.600">
            Welcome back! Please enter your details.
          </Text>
          
          <FormControl mb="4">
            <FormLabel fontWeight="bold">Email</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <EmailIcon color="gray.400" />
              </InputLeftElement>
              <Input type="email" placeholder="Enter Your Email" />
            </InputGroup>
          </FormControl>

          <FormControl mb="4">
            <FormLabel fontWeight="bold">Password</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <LockIcon color="gray.400" />
              </InputLeftElement>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter Your Password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handlePasswordToggle} variant="ghost">
                  {showPassword ? <ViewOffIcon color="gray.400" /> : <ViewIcon color="gray.400" />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Box textAlign="right" mb="6">
            <Link color="gray.600" fontWeight="bold" href="/forgotpassword">
              Forgot Password?
            </Link>
          </Box>

          <Button colorScheme="green" size="lg" w="100%" mb="4">
            Sign In
          </Button>

          <Text textAlign="center" color="gray.500">
            Don't have an account?{' '}
            <Link color="green.500" href="/signup" fontWeight="bold">
              Sign up
            </Link>
          </Text>
        </Box>
      </Box>

      {/* background */}
      <Box position="relative" flex="1" display={{ base: 'none', md: 'block' }}>
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgGradient="linear(to-t, green.900, green.100)"
          zIndex="1"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgImage={`url(${wave})`}
          bgSize="cover"
          bgRepeat="no-repeat"
          bgPosition="center"
          zIndex="2"
          bgColor="green.500"
          backgroundBlendMode="overlay"
          opacity="0.75"
        />
      </Box>

    </Flex>
  );
};

export default Login;