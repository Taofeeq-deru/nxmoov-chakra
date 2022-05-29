import { FC } from "react";
import { Box, Center, Flex } from "@chakra-ui/react";
import { FullLogo, LogoIcon } from "icons";
import { extraMenu, menuList, MenuProps } from "./menuList";
import Menu from "./Menu";

type Props = {
  expanded: boolean;
};

const MenuLeft: FC<Props> = ({ expanded }) => {
  return (
    <Flex
      flexDirection="column"
      px={expanded ? "12px" : "3px"}
      paddingBottom="16px"
      w="100%"
      h="100%"
      alignItems="center">
      <Center h="72px" w="100%" mb="40px">
        {expanded ? <FullLogo /> : <LogoIcon />}
      </Center>
      <Box w="100%">
        {menuList?.map((menu: MenuProps) => (
          <Menu menu={menu} expanded={expanded} />
        ))}
      </Box>
      <Box w="100%" mt="auto">
        {extraMenu?.map((menu: MenuProps) => (
          <Menu menu={menu} expanded={expanded} />
        ))}
      </Box>
    </Flex>
  );
};

export default MenuLeft;
