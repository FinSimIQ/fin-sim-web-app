import React from "react";
import {
  Table,
  Text,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  TableContainer,
  Tfoot,
} from "@chakra-ui/react";

const StockTable = () => {
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
