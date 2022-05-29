import {
  ChakraProvider,
  Grid,
  GridItem,
  Hide,
  useDisclosure,
} from "@chakra-ui/react";
import MenuLeft from "components/MenuLeft";
import MenuRight from "components/MenuRight";
import Nav from "components/Nav";
import theme from "theme";
import "theme/fonts/font.css";

export const App = () => {
  const { isOpen, onToggle } = useDisclosure();
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
        <GridItem rowSpan={1} colSpan={1} bg="gray.50">
          4
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};
