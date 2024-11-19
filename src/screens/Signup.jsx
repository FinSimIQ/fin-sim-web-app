import React, { useState } from "react";
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
  Spinner,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import wave from "../assets/wave.svg";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  // password visibility
  const handlePasswordToggle = () => setShowPassword(!showPassword);

  // handle form submission
  const handleSignup = async () => {
    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    const signupData = {
      fullName,
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:8081/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });

      const result = await response.json();

      console.log(result);

      if (response.ok) {
        navigate("/");
        setSuccessMessage("Account created successfully! You can now sign in.");
      } else {
        setError(result.message || "An error occurred during signup.");
      }
    } catch (err) {
      setError("Failed to connect to the server. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex h="100vh">
      <Box
        flex="1"
        bg="white"
        p="8"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box w="100%" maxW="400px">
          <Text
            fontSize="4xl"
            fontWeight="bold"
            textAlign="center"
            mb="4"
            color="gray.600"
          >
            Create Your Account
          </Text>

          {/* display error or success message */}
          {error && (
            <Alert status="error">
              <AlertIcon />
              {error}
            </Alert>
          )}
          {successMessage && (
            <Alert status="success">
              <AlertIcon />
              {successMessage}
            </Alert>
          )}

          <FormControl mb="4" isRequired>
            <FormLabel fontWeight="bold">Full Name</FormLabel>
            <Input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </FormControl>

          <FormControl mb="4" isRequired>
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

          <FormControl mb="4" isRequired>
            <FormLabel fontWeight="bold">Password</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <LockIcon color="gray.400" />
              </InputLeftElement>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            mb="4"
            marginTop="5"
            onClick={handleSignup}
            isDisabled={isLoading}
          >
            {isLoading ? <Spinner size="sm" /> : "Sign Up"}
          </Button>

          <Text textAlign="center" color="gray.500">
            Already have an account?{" "}
            <Link color="green.500" href="/login" fontWeight="bold">
              Sign in
            </Link>
          </Text>
        </Box>
      </Box>

      {/* background */}
      <Box position="relative" flex="1" display={{ base: "none", md: "block" }}>
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

export default Signup;
