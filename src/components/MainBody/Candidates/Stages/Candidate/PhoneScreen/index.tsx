import {
  Collapse,
  Flex,
  Icon,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { IoIosArrowDown, IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";

const PhoneScreen = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      marginTop="12px"
      bg="gray.50"
      borderRadius="base"
      py="12px"
      flexDirection="column"
      alignItems="center"
      gap="12px">
      <Flex
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        onClick={onToggle}>
        <Text color="gray.900" fontSize="sm">
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
  );
};

export default PhoneScreen;
