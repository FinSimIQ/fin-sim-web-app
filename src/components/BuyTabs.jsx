import React from "react";
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import MarketBuyForm from "./MarketBuyForm";
import LimitBuyForm from "./LimitBuyForm";

const BuyTabs = ({ stockData, portfolioData }) => {
  const onSubmit = async (orderData) => {
    try {
      const buyData = {
        userId: "", // portfolioData.userId,
        symbol: stockData.symbol,
        quantity: orderData.shares,
        price: orderData.price,
        orderType: orderData.type
      };

      const response = await fetch("/api/portfolio/buy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(buyData),
      });

      const result = await response.json();

      // Update the portfolio state in the parent component
      // This should be handled in the calling component
      return result;
    } catch (error) {
      console.error("Error submitting buy order:", error);
    }
  };

  return (
    <Box bg="white" borderRadius="lg" boxShadow="sm" p={4}>
      <Tabs variant="unstyled">
        <TabList borderBottom="1px solid" borderColor="gray.200" mb={4}>
          <Tab
            _selected={{
              color: "white",
              bg: "brand.500",
              borderBottom: "3px solid",
              borderColor: "brand.500",
            }}
            borderRadius="none"
            fontWeight="semibold"
            px={6}
            py={2}
            mr={2}
          >
            Market Buy
          </Tab>
          <Tab
            _selected={{
              color: "white",
              bg: "brand.500",
              borderBottom: "3px solid",
              borderColor: "brand.500",
            }}
            borderRadius="none"
            fontWeight="semibold"
            px={6}
            py={2}
          >
            Limit Buy
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel p={0}>
            <MarketBuyForm
              stockData={stockData}
              portfolioData={portfolioData}
              onSubmit={onSubmit}
            />
          </TabPanel>
          <TabPanel p={0}>
            <LimitBuyForm
              stockData={stockData}
              portfolioData={portfolioData}
              onSubmit={onSubmit}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default BuyTabs;