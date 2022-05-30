import { FC } from "react";
import { Box, Flex, Heading, Icon, IconButton, Text } from "@chakra-ui/react";
import { SubMenuIcon } from "icons";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropdown,
} from "react-icons/io";

type Props = {
  getButtonProps: (e?: any) => any;
  sideOpen: boolean;
};

const Sidebar: FC<Props> = ({ getButtonProps, sideOpen }) => {
  return (
    <Box
      borderRight="1px solid #E1EAED"
      padding="32px 17px"
      height={{ base: "100vh", lg: "calc(100vh - 72px)" }}
      width={{ base: "240px", lg: "unset" }}
      position="relative"
      zIndex={2000}
      bg={{ base: "white", lg: "transparent" }}>
      <IconButton
        aria-label="jobs sidebar"
        bg="white"
        variant="solid"
        filter="drop-shadow(0px 5.33333px 13.3333px rgba(0, 0, 0, 0.12))"
        height="35px"
        position="absolute"
        right="-36px"
        top="32px"
        isRound
        zIndex={5000}
        icon={
          sideOpen ? (
            <IoIosArrowBack fill="gray.500" />
          ) : (
            <IoIosArrowForward fill="gray.500" />
          )
        }
        marginRight="16px"
        {...getButtonProps()}
      />
      <Flex gap="15px" alignItems="center">
        <Icon as={IoIosArrowBack} fontSize="24px" />
        <Heading color="gray.900" fontSize="md" fontWeight="600">
          Jobs
        </Heading>
      </Flex>
      <Flex flexDirection="column" gap="23px" marginTop="27px">
        <Flex gap="15px" alignItems="center">
          <SubMenuIcon />
          <Text noOfLines={1} fontSize="sm" color="gray.900" fontWeight="400">
            Computer Engineering
          </Text>
          <Icon as={IoMdArrowDropdown} marginLeft="auto" />
        </Flex>
        <Flex gap="15px" alignItems="center">
          <SubMenuIcon />
          <Text noOfLines={1} fontSize="sm" color="gray.900" fontWeight="400">
            Computer Engineering
          </Text>
          <Icon as={IoMdArrowDropdown} marginLeft="auto" />
        </Flex>
        <Flex gap="15px" alignItems="center">
          <SubMenuIcon />
          <Text noOfLines={1} fontSize="sm" color="gray.900" fontWeight="400">
            Computer Engineering
          </Text>
          <Icon as={IoMdArrowDropdown} marginLeft="auto" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Sidebar;
