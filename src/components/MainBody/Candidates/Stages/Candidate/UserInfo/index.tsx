import { Avatar, Box, Flex, Heading, Icon, Show, Tag } from "@chakra-ui/react";
import { IoIosStarOutline } from "react-icons/io";

const UserInfo = () => {
  return (
    <Flex
      flexDirection={{ base: "row", lg: "column" }}
      alignItems={{ base: "flex-start", lg: "center" }}
      gap={{ base: "10px", lg: "12px" }}>
      <Avatar size={{ base: "sm", lg: "md" }} name="Demo User" />
      <Box>
        <Heading
          fontSize="md"
          color="gray.900"
          textTransform="capitalize"
          textAlign={{ base: "left", lg: "center" }}
          marginBottom="4px">
          Demo User
        </Heading>
        <Flex flexDirection="row" gap="4px">
          <Icon as={IoIosStarOutline} color="#C0C9CC" />
          <Icon as={IoIosStarOutline} color="#C0C9CC" />
          <Icon as={IoIosStarOutline} color="#C0C9CC" />
          <Icon as={IoIosStarOutline} color="#C0C9CC" />
          <Icon as={IoIosStarOutline} color="#C0C9CC" />
        </Flex>
      </Box>
      <Show below="lg">
        <Tag
          color="white"
          fontSize="xs"
          bg="#3E6EEB"
          border="1px solid"
          borderColor="rgba(15, 49, 139, 0.2)"
          px="8px"
          textTransform="capitalize">
          New
        </Tag>
      </Show>
    </Flex>
  );
};

export default UserInfo;
