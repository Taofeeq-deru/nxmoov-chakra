import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Header from "components/Header";
import { FC } from "react";
import Candidates from "./Candidates";
import { tabs } from "./tabs";

type Props = {
  getButtonProps: (e?: any) => any;
};

const MainBody: FC<Props> = ({ getButtonProps }) => {
  return (
    <Box padding={{ lg: "24px 0 0 48px" }}>
      <Header getButtonProps={getButtonProps} />
      <Tabs variant="unstyled">
        <TabList
          borderBottom="1px solid"
          borderColor="gray.200"
          background={{ base: "white", lg: "transparent" }}
          overflowY="hidden"
          width={{ base: "100vw", lg: "100%" }}
          sx={{
            scrollbarWidth: "none",
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
          padding={{ base: "0 24px", lg: "unset" }}>
          {tabs?.map((tab: string) => (
            <Tab
              flexShrink={0}
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
