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

const StockTable = ({ stocks }) => {
  const navigate = useNavigate();

  // Sample list
  // const stocks = [
  //   {
  //     Symbol: "MMM",
  //     AssetType: "Common Stock",
  //     Name: "3M Company",
  //     Description:
  //       "The 3M Company is an American multinational conglomerate corporation operating in the fields of industry, worker safety, US health care, and consumer goods. The company produces over 60,000 products under several brands, including adhesives, abrasives, laminates, passive fire protection, personal protective equipment, window films, paint protection films, dental and orthodontic products, electrical and electronic connecting and insulating materials, medical products, car-care products, electronic circuits, healthcare software and optical films. It is based in Maplewood, a suburb of Saint Paul, Minnesota.",
  //     CIK: "66740",
  //     Exchange: "NYSE",
  //     Currency: "USD",
  //     Country: "USA",
  //     Sector: "LIFE SCIENCES",
  //     Industry: "SURGICAL & MEDICAL INSTRUMENTS & APPARATUS",
  //     Address: "3M CENTER, BLDG. 220-13E-26A, ST PAUL, MN, US",
  //     OfficialSite: "https://www.3m.com",
  //     FiscalYearEnd: "December",
  //     LatestQuarter: "2024-12-31",
  //     MarketCapitalization: "74598564000",
  //     EBITDA: "5470000000",
  //     PERatio: "19.05",
  //     PEGRatio: "2.498",
  //     BookValue: "7.12",
  //     DividendPerShare: "3.61",
  //     DividendYield: "0.023",
  //     EPS: "6.98",
  //     RevenuePerShareTTM: "44.62",
  //     ProfitMargin: "0.17",
  //     OperatingMarginTTM: "0.177",
  //     ReturnOnAssetsTTM: "0.0593",
  //     ReturnOnEquityTTM: "0.918",
  //     RevenueTTM: "24575001000",
  //     GrossProfitTTM: "10158000000",
  //     DilutedEPSTTM: "6.98",
  //     QuarterlyEarningsGrowthYOY: "-0.217",
  //     QuarterlyRevenueGrowthYOY: "0.001",
  //     AnalystTargetPrice: "150.3",
  //     AnalystRatingStrongBuy: "2",
  //     AnalystRatingBuy: "9",
  //     AnalystRatingHold: "5",
  //     AnalystRatingSell: "1",
  //     AnalystRatingStrongSell: "2",
  //     TrailingPE: "19.05",
  //     ForwardPE: "17.7",
  //     PriceToSalesRatioTTM: "3.035",
  //     PriceToBookRatio: "19.42",
  //     EVToRevenue: "3.277",
  //     EVToEBITDA: "10.92",
  //     Beta: "1.06",
  //     "52WeekHigh": "156.35",
  //     "52WeekLow": "88.16",
  //     "50DayMovingAverage": "147.54",
  //     "200DayMovingAverage": "132.71",
  //     SharesOutstanding: "539318000",
  //     DividendDate: "2025-03-12",
  //     ExDividendDate: "2025-02-14",
  //   },
  //   {
  //     Symbol: "CVS",
  //     AssetType: "Common Stock",
  //     Name: "CVS Health Corp",
  //     Description:
  //       "CVS Health (previously CVS Corporation and CVS Caremark Corporation) is an American healthcare company that owns CVS Pharmacy, a retail pharmacy chain; CVS Caremark, a pharmacy benefits manager; Aetna, a health insurance provider, among many other brands. The company's headquarters is in Woonsocket, Rhode Island.",
  //     CIK: "64803",
  //     Exchange: "NYSE",
  //     Currency: "USD",
  //     Country: "USA",
  //     Sector: "TRADE & SERVICES",
  //     Industry: "RETAIL-DRUG STORES AND PROPRIETARY STORES",
  //     Address: "ONE CVS DR., WOONSOCKET, RI, US",
  //     OfficialSite: "https://www.cvshealth.com",
  //     FiscalYearEnd: "December",
  //     LatestQuarter: "2024-12-31",
  //     MarketCapitalization: "88594039000",
  //     EBITDA: "12615999000",
  //     PERatio: "19.16",
  //     PEGRatio: "0.728",
  //     BookValue: "59.97",
  //     DividendPerShare: "2.66",
  //     DividendYield: "0.0418",
  //     EPS: "3.6",
  //     RevenuePerShareTTM: "294.4",
  //     ProfitMargin: "0.0125",
  //     OperatingMarginTTM: "0.0196",
  //     ReturnOnAssetsTTM: "0.0199",
  //     ReturnOnEquityTTM: "0.0602",
  //     RevenueTTM: "370655986000",
  //     GrossProfitTTM: "49248002000",
  //     DilutedEPSTTM: "3.6",
  //     QuarterlyEarningsGrowthYOY: "-0.178",
  //     QuarterlyRevenueGrowthYOY: "0.036",
  //     AnalystTargetPrice: "73.02",
  //     AnalystRatingStrongBuy: "7",
  //     AnalystRatingBuy: "12",
  //     AnalystRatingHold: "9",
  //     AnalystRatingSell: "0",
  //     AnalystRatingStrongSell: "0",
  //     TrailingPE: "19.16",
  //     ForwardPE: "11.93",
  //     PriceToSalesRatioTTM: "0.239",
  //     PriceToBookRatio: "1.173",
  //     EVToRevenue: "0.431",
  //     EVToEBITDA: "11.71",
  //     Beta: "0.569",
  //     "52WeekHigh": "71.45",
  //     "52WeekLow": "43.01",
  //     "50DayMovingAverage": "64.16",
  //     "200DayMovingAverage": "58.46",
  //     SharesOutstanding: "1262380000",
  //     DividendDate: "2025-05-01",
  //     ExDividendDate: "2025-04-22",
  //   },
  //   {
  //     Symbol: "INTC",
  //     AssetType: "Common Stock",
  //     Name: "Intel Corporation",
  //     Description:
  //       "Intel Corporation is an American multinational corporation and technology company headquartered in Santa Clara, California, in Silicon Valley. It is the world's largest semiconductor chip manufacturer by revenue, and is the developer of the x86 series of microprocessors, the processors found in most personal computers (PCs).",
  //     CIK: "50863",
  //     Exchange: "NASDAQ",
  //     Currency: "USD",
  //     Country: "USA",
  //     Sector: "MANUFACTURING",
  //     Industry: "SEMICONDUCTORS & RELATED DEVICES",
  //     Address: "2200 MISSION COLLEGE BLVD, RNB-4-151, SANTA CLARA, CA, US",
  //     OfficialSite: "https://www.intel.com",
  //     FiscalYearEnd: "December",
  //     LatestQuarter: "2024-12-31",
  //     MarketCapitalization: "93883490000",
  //     EBITDA: "7526000000",
  //     PERatio: "None",
  //     PEGRatio: "0.501",
  //     BookValue: "22.93",
  //     DividendPerShare: "0.375",
  //     DividendYield: "0.0224",
  //     EPS: "-4.04",
  //     RevenuePerShareTTM: "12.41",
  //     ProfitMargin: "-0.353",
  //     OperatingMarginTTM: "-0.185",
  //     ReturnOnAssetsTTM: "-0.0123",
  //     ReturnOnEquityTTM: "-0.179",
  //     RevenueTTM: "53100999000",
  //     GrossProfitTTM: "18224001000",
  //     DilutedEPSTTM: "-4.04",
  //     QuarterlyEarningsGrowthYOY: "-0.717",
  //     QuarterlyRevenueGrowthYOY: "-0.074",
  //     AnalystTargetPrice: "22.9",
  //     AnalystRatingStrongBuy: "0",
  //     AnalystRatingBuy: "2",
  //     AnalystRatingHold: "40",
  //     AnalystRatingSell: "1",
  //     AnalystRatingStrongSell: "2",
  //     TrailingPE: "-",
  //     ForwardPE: "47.39",
  //     PriceToSalesRatioTTM: "1.768",
  //     PriceToBookRatio: "0.946",
  //     EVToRevenue: "2.294",
  //     EVToEBITDA: "101.27",
  //     Beta: "1.122",
  //     "52WeekHigh": "36.93",
  //     "52WeekLow": "17.66",
  //     "50DayMovingAverage": "22.27",
  //     "200DayMovingAverage": "23.26",
  //     SharesOutstanding: "4360590000",
  //     DividendDate: "2024-09-01",
  //     ExDividendDate: "2024-08-07",
  //   },
  // ];
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr backgroundColor="brand.600">
            <Th color="white">Symbol</Th>
            <Th color="white">Name</Th>
            {/* <Th color="white" isNumeric>
              Price
            </Th> */}
            {/* <Th color="white" isNumeric>
              Change
            </Th>
            <Th color="white" isNumeric>
              Volume
            </Th> */}
          </Tr>
        </Thead>
        <Tbody>
          {stocks.map((stock) => (
            <Tr
              onClick={() => {
                navigate(`/stocks/${stock.Symbol}`);
              }}
            >
              <Td>{stock.Symbol}</Td>
              <Td>{stock.Name}</Td>
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
    </TableContainer>
  );
};

export default StockTable;
