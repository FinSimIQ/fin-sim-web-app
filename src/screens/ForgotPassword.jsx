import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Flex,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Text,
  Link,
  FormControl,
  FormLabel,
  useToast
} from '@chakra-ui/react';
import { EmailIcon, ArrowBackIcon } from '@chakra-ui/icons';
import wave from "../assets/wave.svg";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    try {
      const response = await fetch('http://localhost:5173/resetPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Reset email sent!",
          description: "Please check your email for password reset instructions.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        // Redirect to login page after toast notification
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } else {
        toast({
          title: "Error",
          description: data.message || 'Failed to send reset email.',
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Error sending reset email:', error);
      toast({
        title: "Error",
        description: "Something went wrong, please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex h="100vh">
      <Box flex="1" bg="white" p="8" display="flex" alignItems="center" justifyContent="center">
        <Box w="100%" maxW="400px">
          <Text fontSize="4xl" fontWeight="bold" textAlign="center" mb="4" color="gray.600">
            Forgot Password
          </Text>
          <Text textAlign="center" mb="8" color="gray.600">
            Enter your email to receive password reset instructions
          </Text>

          <FormControl mb="6">
            <FormLabel fontWeight="bold">Email</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <EmailIcon color="gray.400" />
              </InputLeftElement>
              <Input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </FormControl>

          <Button
            colorScheme="green"
            size="lg"
            w="100%"
            mb="6"
            onClick={handleResetPassword}
          >
            Reset Password
          </Button>

          <Link
            href="/login"
            style={{ textDecoration: 'none' }}
          >
            <Flex
              align="center"
              justify="center"
              color="gray.600"
              _hover={{ color: 'green.500' }}
            >
              <ArrowBackIcon mr="2" />
              <Text>Back to Sign In</Text>
            </Flex>
          </Link>
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

export default ForgotPassword;