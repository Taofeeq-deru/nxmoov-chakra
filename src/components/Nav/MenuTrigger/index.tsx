import { Box, Flex, VisuallyHidden } from "@chakra-ui/react";
import { FC } from "react";
import { TriggerProps } from "..";

const MenuTrigger: FC<TriggerProps> = ({ onToggle, isOpen }) => {
  return (
    <Flex
      cursor="pointer"
      p="1px"
      bg="gray.300"
      borderRadius="2px"
      w="24px"
      h="24px"
      onClick={onToggle}>
      {isOpen ? (
        <Box w="11px" h="22px" bg="white" marginLeft="auto" borderRadius="2px">
          <VisuallyHidden>Expand Menu</VisuallyHidden>
        </Box>
      ) : (
        <Box w="11px" h="22px" bg="white" borderRadius="2px">
          <VisuallyHidden>Close Menu</VisuallyHidden>
        </Box>
      )}
    </Flex>
  );
};

export default MenuTrigger;
