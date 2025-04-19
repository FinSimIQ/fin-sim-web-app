import React from "react";
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import MarketSellForm from "./MarketSellForm";
import LimitSellForm from "./LimitSellForm";

const SellTabs = ({ stockData, portfolioData, onSubmitOrder }) => {
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
              onSubmit={onSubmitOrder}
            />
          </TabPanel>
          <TabPanel p={0}>
            <LimitSellForm
              stockData={stockData}
              portfolioData={portfolioData}
              onSubmit={onSubmitOrder}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default SellTabs;
