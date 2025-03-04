import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    Flex,
    Box,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Button,
    Text,
    Link,
    FormControl,
    FormLabel,
    useToast
  } from "@chakra-ui/react";

import { ArrowBackIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import wave from "../assets/wave.svg";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [token, setToken] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const location = useLocation();
  const navigate = useNavigate();

  // password visibility
  const handlePasswordToggle = () => setShowPassword(!showPassword);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const resetToken = queryParams.get('token');
    if (resetToken) {
      setToken(resetToken);
    } else {
      toast({
        title: "Error",
        description: "Invalid or expired reset token.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      navigate('/login');
    }
  }, [location.search, toast, navigate]);

  const handleResetPassword = async () => {
    if (!newPassword) {
      toast({
        title: "Error",
        description: "Password is required.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await fetch('http://localhost:8081/api/users/resetPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          newPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Password Reset Successful",
          description: "Your password has been reset successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate('/login');
      } else {
        toast({
          title: "Error",
          description: data.message || 'Failed to reset password.',
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Error resetting password:', error);
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
              Reset Password
            </Text>
            <Text textAlign="center" mb="8" color="gray.600">
            Enter your new password below. This link will be invalid from one hour after the email was sent.
            </Text>
  
            <FormControl mb="4" isRequired>
                <FormLabel fontWeight="bold">New Password</FormLabel>
                <InputGroup>
                    <InputLeftElement pointerEvents="none">
                    <LockIcon color="gray.400" />
                    </InputLeftElement>
                    <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Your New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                    <Button
                        h="1.75rem"
                        size="sm"
                        onClick={handlePasswordToggle}
                        variant="ghost"
                    >
                        {showPassword ? (
                        <ViewOffIcon color="gray.400" />
                        ) : (
                        <ViewIcon color="gray.400" />
                        )}
                    </Button>
                    </InputRightElement>
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
                <Link fontWeight="bold" href="/login">Back to Sign In
                </Link>
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

export default ResetPassword;
