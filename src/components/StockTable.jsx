import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Table,
  Text,
  TableCaption,
  Link,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  TableContainer,
  Tfoot,
  Box,
} from "@chakra-ui/react";

const StockTable = (props) => {
  const navigate = useNavigate();

  const stocks = props.stocks || [];

  return (
    <Box
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      mt="6"
      mb="6"
      mx="auto"
      width="full"
    >
      <Table variant="simple">
        <Thead>
          <Tr
            backgroundColor="brand.600"
            borderTopLeftRadius="md"
            borderTopRightRadius="md"
            sx={{
              "& th:first-of-type": { borderTopLeftRadius: "md" },
              "& th:last-of-type": { borderTopRightRadius: "md" },
            }}
          >
            <Th color="white">Symbol</Th>
            <Th color="white">Name</Th>
            {/* <Th color="white" isNumeric>
              Price
            </Th>
            <Th color="white" isNumeric>
              Change
            </Th>
            <Th color="white" isNumeric>
              Volume
            </Th> */}
          </Tr>
        </Thead>
        <Tbody>
          {stocks.map((stock, index) => (
            <Tr
              key={index} // Add a key prop for React list rendering
              onClick={() => {
                // navigate(`/stocks/${stock.symbol}`);
                navigate(`/stock?symbol=${stock.symbol}`);
              }}
              backgroundColor={index % 2 === 0 ? "white" : "#f9f9f9"}
              _hover={{ backgroundColor: "#f0f0f0", cursor: "pointer" }}
            >
              <Td fontWeight="medium">{stock.symbol}</Td>
              <Td>{stock.name}</Td>
              {/* <Td isNumeric>${stock?.Price}</Td>
              <Td
                isNumeric
                color={stock?.Change?.includes("+") ? "green.500" : "red.500"}
              >
                {stock?.Change}
              </Td>
              <Td isNumeric>{stock?.Volume}</Td> */}
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Symbol</Th>
            <Th>Name</Th>
            {/* <Th isNumeric>Price</Th>
            <Th isNumeric>Change</Th>
            <Th isNumeric>Volume</Th> */}
          </Tr>
        </Tfoot>
      </Table>
    </Box>
  );
};

export default StockTable;
