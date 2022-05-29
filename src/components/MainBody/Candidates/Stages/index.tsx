import {
  Badge,
  Box,
  Flex,
  Heading,
  Hide,
  Icon,
  IconButton,
  Show,
} from "@chakra-ui/react";
import { IoIosArrowDown, IoIosMore } from "react-icons/io";
import Candidate from "./Candidate";

const Stages = () => {
  return (
    <Flex flexDirection="column">
      <Box
        background={{ lg: "white" }}
        textAlign={{ base: "center", lg: "left" }}
        padding={{ base: "8px 12px", lg: "14px 12px" }}
        borderRadius={{ lg: "0 0 4px 4px" }}
        borderBottom={{ lg: "4px solid" }}
        width="200px"
        borderColor="#287CC9">
        <Flex
          width="100%"
          justifyContent={{ base: "center", lg: "flex-start" }}
          alignItems="center"
          gap={{ base: "11px", lg: "8px" }}>
          <Heading
            fontSize={{ base: "md", lg: "sm" }}
            color="gray.900"
            fontWeight="500">
            Sourcing
          </Heading>
          <Show below="lg">
            <Icon ml="1px" as={IoIosArrowDown} color="gray.500" />
          </Show>
          <Hide below="lg">
            <Badge
              fontSize="sm"
              color="gray.900"
              bg="#EEEEF0"
              fontFamily="sans-serif"
              textAlign="center"
              p="1px 4px">
              13
            </Badge>
            <IconButton
              aria-label="more"
              marginLeft="auto"
              variant="ghost"
              boxShadow="none"
              height="unset"
              icon={<IoIosMore fill="gray.500" />}
            />
          </Hide>
        </Flex>
      </Box>
      <Show below="lg">Progress</Show>
      <Flex
        flexDirection="column"
        gap={{ base: "12px", lg: "16px" }}
        marginTop={{ base: "16px", lg: "10px" }}>
        <Candidate />
      </Flex>
    </Flex>
  );
};

export default Stages;
