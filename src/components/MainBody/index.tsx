import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Header from "components/Header";
import Candidates from "./Candidates";
import { tabs } from "./tabs";

const MainBody = () => {
  return (
    <Box padding={{ lg: "24px 0 0 48px" }}>
      <Header />
      <Tabs variant="unstyled">
        <TabList
          borderBottom="1px solid"
          borderColor="gray.200"
          background={{ base: "white", lg: "transparent" }}
          padding={{ base: "0 24px", lg: "unset" }}>
          {tabs?.map((tab: string) => (
            <Tab
              _selected={{
                color: "gray.900",
                borderBottom: "2px solid",
                borderColor: "primary.500",
              }}
              _focus={{
                outline: "none",
                boxShadow: "none",
              }}
              color="gray.600"
              fontSize="md"
              pb="16px"
              textTransform="capitalize">
              {tab}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel>
            <Candidates />
          </TabPanel>
          <TabPanel>2</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default MainBody;
