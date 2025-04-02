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
} from "@chakra-ui/react";

const StockTable = () => {
  const navigate = useNavigate();
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr backgroundColor="brand.600">
            <Th color="white">Symbol</Th>
            <Th color="white">Name</Th>
            <Th color="white" isNumeric>
              Price
            </Th>
            <Th color="white" isNumeric>
              Change
            </Th>
            <Th color="white" isNumeric>
              Volume
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr
            onClick={() => {
              navigate(`/stocks/APPL`);
            }}
          >
            <Td>AAPL</Td>
            <Td>Apple Inc</Td>
            <Td isNumeric>100.02</Td>
            <Td isNumeric>+22%</Td>
            <Td isNumeric>10M</Td>
          </Tr>
          <Tr>
            <Td>AAPL</Td>
            <Td>Apple Inc</Td>
            <Td isNumeric>100.02</Td>
            <Td isNumeric>+22%</Td>
            <Td isNumeric>10M</Td>
          </Tr>
          <Tr>
            <Td>AAPL</Td>
            <Td>Apple Inc</Td>
            <Td isNumeric>100.02</Td>
            <Td isNumeric>+22%</Td>
            <Td isNumeric>10M</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Symbol</Th>
            <Th>Name</Th>
            <Th isNumeric>Price</Th>
            <Th isNumeric>Change</Th>
            <Th isNumeric>Volume</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default StockTable;
