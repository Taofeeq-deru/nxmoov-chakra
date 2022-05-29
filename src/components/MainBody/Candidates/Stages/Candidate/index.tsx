import {
  Box,
  Button,
  Collapse,
  Flex,
  Hide,
  Icon,
  IconButton,
  Show,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  IoIosArrowDown,
  IoIosMore,
  IoMdEye,
  IoMdThumbsDown,
  IoMdThumbsUp,
} from "react-icons/io";
import UserInfo from "./UserInfo";

const Candidate = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box
      bg="white"
      padding={{ base: "16px", lg: "12px" }}
      width={{ base: "100%", lg: "200px" }}>
      <Flex alignItems={{ base: "flex-start", lg: "center" }}>
        <Hide below="lg">
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
        </Hide>
        <Show below="lg">
          <UserInfo />
        </Show>
        <IconButton
          aria-label="more"
          marginLeft="auto"
          variant="ghost"
          boxShadow="none"
          height="unset"
          icon={<IoIosMore fill="gray.500" />}
        />
      </Flex>
      <Hide below="lg">
        <UserInfo />
        <Flex flexDirection="column" gap="8px" alignItems="center">
          <Text fontSize="xs" color="green.900">
            Challenge Sent
          </Text>
          <Text fontSize="xs" color="gray.900">
            2 days ago
          </Text>
          <Flex
            alignItems="center"
            justifyContent="center"
            width="36px"
            height="36px"
            borderRadius="100%"
            background="#E9FAF2">
            <Icon
              as={IoMdThumbsUp}
              color="green.500"
              width="24px"
              height="24px"
            />
          </Flex>
        </Flex>
      </Hide>
      <Flex
        marginTop="12px"
        bg="gray.50"
        borderRadius="base"
        py="12px"
        flexDirection="column"
        alignItems="center"
        gap="12px">
        <Flex alignItems="center" justifyContent="center" cursor="pointer">
          <Text color="gray.900" fontSize="sm" onClick={onToggle}>
            Phone screen?
          </Text>
          <Icon ml="1px" as={IoIosArrowDown} color="gray.500" />
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <Flex flexDirection="row" gap="12px">
            <IconButton
              aria-label="thumbs down"
              width="36px"
              height="36px"
              borderRadius="100%"
              variant="outline"
              colorScheme="gray.400"
              icon={<IoMdThumbsDown />}
            />
            <IconButton
              aria-label="thumbs up"
              width="36px"
              height="36px"
              borderRadius="100%"
              variant="outline"
              colorScheme="gray.400"
              icon={<IoMdThumbsUp />}
            />
          </Flex>
        </Collapse>
      </Flex>
      <Button
        marginTop="12px"
        width={{ base: "100%", lg: "unset" }}
        leftIcon={<IoMdEye />}
        variant="tertiary"
        size="sm">
        View Candidate
      </Button>
    </Box>
  );
};

export default Candidate;
