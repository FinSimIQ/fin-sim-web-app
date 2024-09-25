import {
  Stack,
  Input,
  InputLeftElement,
  InputGroup,
  Button,
  ButtonGroup,
  Text,
  Box,
  Container,
  Flex,
  Image,
} from "@chakra-ui/react";
import { EmailIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div>
      <Flex height="100vh">
        <Box width="50%" p={4} display="flex" alignItems="center">
          <Container>
            <Stack spacing={5}>
              <Text fontSize="6xl" align="center">
                Forgot Password
              </Text>
              <Stack spacing={1}>
                <Text fontSize="xl">Enter Email</Text>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    height="full"
                    display="flex"
                    alignItems="center"
                    justifyItems="center"
                  >
                    <EmailIcon color="gray.300" boxSize="2rem" />
                  </InputLeftElement>
                  <Input placeholder="Enter Email Here" size="lg" />
                </InputGroup>
              </Stack>
              <Button colorScheme="green">Reset Password</Button>
              <Link to="/home">
                <Box>
                  <Stack
                    direction="row"
                    spacing={1}
                    display="flex"
                    alignItems="center"
                  >
                    <ArrowBackIcon />
                    <Text fontSize="sm">Back to Sign In</Text>
                  </Stack>
                </Box>
              </Link>
            </Stack>
          </Container>
        </Box>
        <Box
          width="50%"
          h="100%"
          backgroundImage="url('images/password_reset_background.svg')"
          backgroundSize="cover"
          backgroundPosition="center"
        ></Box>
      </Flex>
    </div>
  );
};
export default ForgotPassword;
