import {
  Box,
  Center,
  Divider,
  Flex,
  Hide,
  Icon,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { IoIosList, IoMdMenu, IoMdPeople } from "react-icons/io";
import Stages from "./Stages";

const Candidates = () => {
  return (
    <Box padding={{ base: "16px 24px 0", lg: "26px 0 0" }}>
      <Flex alignItems="center" marginBottom={{ base: "16px", lg: "26px" }}>
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
      </Flex>
      <Stages />
    </Box>
  );
};

export default Candidates;
