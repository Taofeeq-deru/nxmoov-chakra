import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { rightMenuList, RigthMenuProps } from "./menuList";

const MenuRight = () => {
  return (
    <Flex flexDirection="column" alignItems="center" gap="32px" p="16px 15px">
      {rightMenuList?.map(({ title, icon, colorScheme }: RigthMenuProps) => (
        <Box>
          <IconButton
            aria-label={title}
            bg={colorScheme}
            isRound
            height="40px"
            width="40px"
            icon={icon?.()}
          />
          <Text
            fontSize="xs"
            mt="9px"
            textAlign="center"
            color="gray.900"
            casing="capitalize">
            {title}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};

export default MenuRight;
