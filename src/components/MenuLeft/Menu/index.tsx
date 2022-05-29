import { FC } from "react";
import {
  Flex,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tag,
  Text,
} from "@chakra-ui/react";
import { MenuProps } from "../menuList";

type Props = {
  expanded: boolean;
  menu: MenuProps
};

const Menu: FC<Props> = ({ menu, expanded }) => {
  const { active, title, icon } = menu;
  return (
    <Popover trigger="hover" closeOnBlur={true} placement="right">
      <PopoverTrigger>
        <Flex
          p="16px"
          h="56px"
          w="100%"
          alignItems="center"
          gap="15px"
          cursor="pointer"
          borderRadius="base"
          justifyContent={expanded ? "flex-start" : "center"}
          bg={active ? "rgba(255, 255, 255, 0.1)" : "transparent"}
          _hover={{ background: "rgba(255, 255, 255, 0.03)" }}>
          {icon?.()}
          {expanded ? (
            <Text
              casing="capitalize"
              fontSize="md"
              color="white"
              opacity={active ? 1 : 0.6}>
              {title}
            </Text>
          ) : null}
        </Flex>
      </PopoverTrigger>
      {expanded ? null : (
        <PopoverContent w="max-content" border="none" borderColor="tertiary">
          <Tag
            color="white"
            fontSize="xs"
            bg="tertiary"
            p="10px"
            textTransform="capitalize">
            {title}
          </Tag>
        </PopoverContent>
      )}
    </Popover>
  );
};

export default Menu;
