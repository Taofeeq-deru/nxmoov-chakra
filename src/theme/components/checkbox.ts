import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Checkbox: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "base",
    height: "20px",
    width: "20px",
    border: "2px solid",
    borderColor: "gray.300",
    bg: "white",
    _checked: {
      bg: "primary.500",
      border: "none",
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

export default Checkbox;
