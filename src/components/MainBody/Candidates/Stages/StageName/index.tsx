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
import { FC } from "react";
import { IoIosArrowDown, IoIosMore } from "react-icons/io";
import { StageProps } from "../../candidates";

const StageName: FC<StageProps> = ({ stageName, candidates, color }) => {
  return (
    <Box
      background={{ lg: "white" }}
      textAlign={{ base: "center", lg: "left" }}
      padding={{ base: "8px 12px", lg: "14px 12px" }}
      borderRadius={{ lg: "base" }}
      borderBottom={{ lg: `4px solid ${color}` }}
      width={{ base: "80vw", md: "300px", lg: "200px" }}>
      <Flex
        width="100%"
        justifyContent={{ base: "center", lg: "flex-start" }}
        alignItems="center"
        gap={{ base: "11px", lg: "8px" }}>
        <Heading
          fontSize={{ base: "md", lg: "sm" }}
          color="gray.900"
          fontWeight="500"
          textTransform="capitalize"
          noOfLines={1}>
          {stageName}
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
            {candidates?.length}
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
  );
};

export default StageName;
