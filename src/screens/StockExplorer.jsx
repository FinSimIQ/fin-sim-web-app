import React, { useEffect, useState } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://ticker-2e1ica8b9.now.sh/keyword/${searchTerm}`
        );
        const data = await response.json();
        console.log(data);
        setTableData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };
    if (searchTerm.length > 0) {
      fetchData();
    } else {
      setTableData(stocks);
    }
  }, [searchTerm]);

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
                onChange={(e) => setSearchTerm(e.target.value)}
                focusBorderColor="blue.400"
                _placeholder={{ color: "gray.500" }}
              />
            </InputGroup>
          </Box>
          <StockTable stocks={tableData} />
        </Stack>
      </Container>
    </>
  );
};

const stocks = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    Price: 195.42,
    Change: "+2.34 (1.21%)",
    Volume: "45.2M",
  },
  {
    symbol: "IBM",
    name: "International Business Machines Corporation",
    Price: 133.25,
    Change: "+0.75 (0.56%)",
    Volume: "5.8M",
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    Price: 69.33,
    Change: "-0.42 (0.61%)",
    Volume: "12.1M",
  },
  {
    symbol: "INTC",
    name: "Intel Corporation",
    Price: 22.15,
    Change: "+0.35 (1.61%)",
    Volume: "31.7M",
  },
];

export default StockExplorer;
