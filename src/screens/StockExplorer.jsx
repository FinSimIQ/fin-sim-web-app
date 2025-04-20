import React from "react";
import {
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Box,
  Flex,
  Stack,
  Container,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Navbar from "../components/NavBar";
import StockTable from "../components/StockTable";

const StockExplorer = () => {
  return (
    <>
      <Container minW="100%" p="0" m="0" fontFamily="poppins">
        <Navbar />
        <Stack m="10">
          <Text
            fontSize="3xl"
            fontWeight="semibold"
            letterSpacing="tightish"
            color="#3B3B3B"
          >
            Explore Stocks
          </Text>
          <Box>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.400" />}
              />
              <Input
                type="text"
                placeholder="Search by symbol or company name"
                borderRadius="md"
                bg="white"
                focusBorderColor="blue.400"
                _placeholder={{ color: "gray.500" }}
              />
            </InputGroup>
          </Box>
          <StockTable />
        </Stack>
      </Container>
    </>
  );
};

export default StockExplorer;
