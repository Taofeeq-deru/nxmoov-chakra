import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Hide,
  Icon,
  IconButton,
  Show,
  Text,
} from "@chakra-ui/react";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosBriefcase,
  IoIosGlobe,
  IoIosPin,
  IoIosSearch,
  IoIosShareAlt,
  IoIosTime,
} from "react-icons/io";

const Header = () => {
  return (
    <Flex
      flexDirection={{ base: "row", lg: "column" }}
      alignItems={{ base: "flex-start", lg: "unset" }}
      width="100%"
      padding={{ base: "30px 38px 16px 21px", lg: "0 48px 32px 0" }}
      bg={{ base: "white", lg: "transparent" }}>
      <Show below="lg">
        <IconButton
          aria-label="jobs sidebar"
          colorScheme="white"
          variant="solid"
          filter="drop-shadow(0px 5.33333px 13.3333px rgba(0, 0, 0, 0.12))"
          width="28px"
          height="32px"
          isRound
          icon={<IoIosArrowForward fill="gray.500" />}
          marginRight="16px"
        />
      </Show>
      <Box>
        <Show below="lg">
          <Text color="primary.600" fontSize="sm" cursor="pointer">
            Back to jobs
          </Text>
        </Show>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading
            color="gray.900"
            fontSize={{ base: "xl", lg: "2xl" }}
            marginRight={{ lg: "auto" }}>
            C#/React Developer
          </Heading>
          <Hide below="lg">
            <Button
              leftIcon={<IoIosShareAlt stroke="primary.500" fontSize="24px" />}
              variant="secondary"
              marginRight="12px">
              Share
            </Button>
            <Button leftIcon={<IoIosGlobe />} rightIcon={<IoIosArrowDown />}>
              Published
            </Button>
          </Hide>
        </Flex>
      </Box>
      <Show below="lg">
        <IconButton
          marginLeft="auto"
          aria-label="jobs sidebar"
          variant="ghost"
          boxShadow="none"
          height="unset"
          icon={<IoIosSearch fontSize="24px" />}
        />
      </Show>
      <Hide below="lg">
        <Flex gap="16px" alignItems="center">
          <Flex gap="10px" alignItems="center">
            <Icon as={IoIosBriefcase} color="gray.600" fontSize="sm" />
            <Text fontSize="sm" color="gray.900">
              Full Time
            </Text>
          </Flex>
          <Center height="14px">
            <Divider orientation="vertical" />
          </Center>
          <Flex gap="10px" alignItems="center">
            <Icon as={IoIosPin} color="gray.600" fontSize="sm" />
            <Text fontSize="sm" color="gray.900">
              Boston, MA
            </Text>
          </Flex>
          <Center height="14px">
            <Divider orientation="vertical" />
          </Center>
          <Flex gap="10px" alignItems="center">
            <Icon as={IoIosTime} color="gray.600" fontSize="sm" />
            <Text fontSize="sm" color="gray.900">
              8 days ago
            </Text>
          </Flex>
        </Flex>
      </Hide>
    </Flex>
  );
};

export default Header;
