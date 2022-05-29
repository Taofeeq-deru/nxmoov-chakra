import { Badge, Center, Divider, Flex, Select, Text } from "@chakra-ui/react";
import SearchInput from "components/SearchInput";
import { FC } from "react";
import MenuTrigger from "./MenuTrigger";
import Notifications from "./Notifications";
import User from "./User";

export type TriggerProps = {
  onToggle: () => void;
  isOpen: boolean;
};

const Nav: FC<TriggerProps> = ({ onToggle, isOpen }) => {
  return (
    <Flex
      w="100%"
      h="100%"
      p="16px 48px 16px 16px"
      alignItems="center"
      justifyContent="space-between">
      <Flex alignItems="center">
        <MenuTrigger onToggle={onToggle} isOpen={isOpen} />
        <Select
          placeholder="Select Option"
          marginLeft="25px"
          w="283px"
          value="Advanced Micro Devices, Inc."
          fontSize="sm"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/taofeeq/image/upload/v1653841917/image_39_rul8yo.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "12px center",
            paddingLeft: "48px",
          }}>
          <option value="Advanced Micro Devices, Inc.">
            Advanced Micro Devices, Inc.
          </option>
        </Select>
        <Badge
          fontSize="sm"
          ml="12px"
          mr="8px"
          color="gray.900"
          bg="#EEEEF0"
          fontFamily="sans-serif"
          h="22px"
          textAlign="center"
          w="31px"
          p="1px 4px">
          130
        </Badge>
        <Text color="primary.600" fontSize="sm">
          Credits
        </Text>
      </Flex>
      <Flex alignItems="center" gap="24px">
        <SearchInput />
        <User />
        <Center height="36px">
          <Divider orientation="vertical" />
        </Center>
        <Notifications />
      </Flex>
    </Flex>
  );
};

export default Nav;
