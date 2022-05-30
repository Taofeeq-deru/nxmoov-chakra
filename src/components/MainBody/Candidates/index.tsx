import {
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Hide,
  Icon,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { IoIosList, IoMdMenu, IoMdPeople } from "react-icons/io";
import { candidates } from "./candidates";
import Stages from "./Stages";

const Candidates = () => {
  return (
    <Grid
      padding={{ base: "16px 24px 8px", lg: "26px 0 8px" }}
      templateColumns={"1fr"}
      templateRows={"40px 1fr"}
      rowGap={{ base: "16px", lg: "26px" }}>
      <GridItem display="flex" alignItems="center" colSpan={1} rowSpan={1}>
        <Flex alignItems="center" gap="8px">
          <Text fontSize="md" color="gray.900" fontWeight="500">
            22 Candidates
          </Text>
          <Hide below="lg">
            <IconButton
              aria-label="add candidate"
              colorScheme="primary.500"
              height="40px"
              icon={<IoMdPeople fontSize="24px" />}
            />
          </Hide>
        </Flex>
        <Hide below="lg">
          <Flex alignItems="center" gap="17px" marginLeft="auto">
            <Icon
              as={IoMdMenu}
              transform="rotate(90deg)"
              height="16px"
              color="primary.500"
            />
            <Center height="16px">
              <Divider orientation="vertical" />
            </Center>
            <Icon as={IoIosList} color="gray.500" />
          </Flex>
        </Hide>
      </GridItem>
      <GridItem
        colSpan={1}
        rowSpan={1}
        gap="12px"
        overflowX="scroll"
        overflowY="hidden"
        display="flex"
        flexDirection="row"
        width="100%">
        {candidates?.map((stage, i) => (
          <Flex gap="12px" key={i} height="inherit">
            <Stages stage={stage} amount={candidates?.length} index={i} />
            {i === candidates?.length - 1 ? null : (
              <Hide below="lg">
                <Divider orientation="vertical" />
              </Hide>
            )}
          </Flex>
        ))}
      </GridItem>
    </Grid>
  );
};

export default Candidates;
