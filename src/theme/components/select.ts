import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Select: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 400,
    fontSize: "sm",
    borderRadius: "base",
    px: "16px",
    py: "8px",
    height: "40px",
    border: "1px solid",
    borderColor: "gray.300",
    bg: "transparent",
    color: "gray.900",
    _placeholder: {
      color: "gray.500",
    },
    _focus: {
      borderColor: "primary.500",
    },
    _invalid: {
      borderColor: "red.50",
    },
    _disabled: {
      bg: "gray.50",
      borderColor: "gray.200",
      color: "gray.400",
    },
  },
};

export default Select;
