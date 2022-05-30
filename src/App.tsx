import { useState } from "react";
import {
  ChakraProvider,
  Grid,
  GridItem,
  Hide,
  Show,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import MainBody from "components/MainBody";
import MenuLeft from "components/MenuLeft";
import MenuRight from "components/MenuRight";
import Nav from "components/Nav";
import Sidebar from "components/Sidebar";
import theme from "theme";
import "theme/fonts/font.css";
import "App.css";

export const App = () => {
  const { isOpen, onToggle } = useDisclosure();
  const {
    getButtonProps,
    getDisclosureProps,
    isOpen: sideOpen,
  } = useDisclosure();
  const [hidden, setHidden] = useState(!sideOpen);
  return (
    <ChakraProvider theme={theme}>
      <Grid
        h="100vh"
        templateColumns={{
          base: "1fr",
          lg: isOpen ? "180px 1fr 72px" : "80px 1fr 72px",
          xl: isOpen ? "240px 1fr 72px" : "80px 1fr 72px",
        }}
        templateRows={{ base: "1fr", lg: "72px 1fr" }}>
        <Hide below="lg">
          <GridItem rowSpan={2} colSpan={1} bg="tertiary">
            <MenuLeft expanded={isOpen} />
          </GridItem>
        </Hide>
        <Hide below="lg">
          <GridItem rowSpan={1} colSpan={1} bg="white">
            <Nav onToggle={onToggle} isOpen={isOpen} />
          </GridItem>
        </Hide>
        <Hide below="lg">
          <GridItem
            rowSpan={2}
            colSpan={1}
            bg="white"
            borderLeft="1px solid"
            borderColor="gray.200">
            <MenuRight />
          </GridItem>
        </Hide>
        <GridItem display="flex" rowSpan={1} colSpan={1} bg="gray.50">
          <Hide below="lg">
            <Sidebar {...{ getButtonProps, sideOpen }} />
          </Hide>
          <Show below="lg">
            <motion.div
              {...getDisclosureProps()}
              hidden={hidden}
              initial={false}
              onAnimationStart={() => setHidden(false)}
              onAnimationComplete={() => setHidden(!sideOpen)}
              animate={{ width: sideOpen ? "100vw" : 0 }}
              style={{
                background: "rgba(2, 7, 18, 0.6)",
                overflow: "hidden",
                whiteSpace: "nowrap",
                position: "absolute",
                left: "0",
                height: "100vh",
                top: "0",
                zIndex: 999,
              }}>
              <Sidebar {...{ getButtonProps, sideOpen }} />
            </motion.div>
          </Show>
          <MainBody getButtonProps={getButtonProps} />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};
