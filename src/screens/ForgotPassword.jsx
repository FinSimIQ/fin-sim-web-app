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
} from "@chakra-ui/react";
import { EmailIcon, ArrowBackIcon } from "@chakra-ui/icons";

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
                  <InputLeftElement pointerEvents="none">
                    <EmailIcon color="gray.300" boxSize="2rem" />
                  </InputLeftElement>
                  <Input placeholder="Enter Email Here" size="lg" />
                </InputGroup>
              </Stack>
              <Button colorScheme="green">Reset Password</Button>
              <Box display="flex" alignItems="center">
                <ArrowBackIcon />
                <Text fontSize="sm">Back to Sign In</Text>
              </Box>
            </Stack>
          </Container>
        </Box>
        <Box width="50%" bg="green.500" p={4}>
          Image here
        </Box>
      </Flex>
    </div>
  );
};
export default ForgotPassword;
