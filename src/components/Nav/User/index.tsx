import { Avatar, Flex, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";

const User = () => {
  return (
    <Flex alignItems="center" cursor="pointer">
      <Text color="gray.900" fontSize="sm" mr="5px">
        William Smith
      </Text>
      <Avatar
        name="William Smith"
        src="https://res.cloudinary.com/taofeeq/image/upload/v1653838248/pexels-august-de-richelieu-7428236_1_gyfdmi.png"
        mr="12px"
      />
      <Icon as={IoIosArrowDown} />
    </Flex>
  );
};

export default User;
