import React from "react";
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import MarketSellForm from "./MarketSellForm";
import LimitSellForm from "./LimitSellForm";

const SellTabs = ({ stockData, portfolioData }) => {
  const onSubmit = async () => {
    try {
      const orderData = {
        symbol: stockData.symbol,
        quantity: stockData.quantity,
        userId: "", // portfolioData.userId,
      };

      const result = fetch("/api/portfolio/sell", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      const response = await result.json();

      // the response is a new portfolio object
      // update the portfolio state in the parent component
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  return (
    <Box bg="white" borderRadius="lg" boxShadow="sm" p={4}>
      <Tabs variant="unstyled">
        <TabList borderBottom="1px solid" borderColor="gray.200" mb={4}>
          <Tab
            _selected={{
              color: "white",
              bg: "#316D60",
              borderBottom: "3px solid",
              borderColor: "#316D60",
            }}
            borderRadius="none"
            fontWeight="semibold"
            px={6}
            py={2}
            mr={2}
          >
            Market Sell
          </Tab>
          <Tab
            _selected={{
              color: "white",
              bg: "#316D60",
              borderBottom: "3px solid",
              borderColor: "#316D60",
            }}
            borderRadius="none"
            fontWeight="semibold"
            px={6}
            py={2}
          >
            Limit Sell
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel p={0}>
            <MarketSellForm
              stockData={stockData}
              portfolioData={portfolioData}
              onSubmit={onSubmit}
            />
          </TabPanel>
          <TabPanel p={0}>
            <LimitSellForm
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

export default SellTabs;
