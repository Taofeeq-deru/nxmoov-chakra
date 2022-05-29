import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 500,
    textTransform: "capitalize",
    borderRadius: "base",
    boxShadow: "0px 2px 2px rgba(5, 128, 164, 0.08)",
    _disabled: {
      boxShadow: "0px 2px 2px rgba(23, 25, 26, 0.06)",
    },
    _focus: {
      outline: "none",
      boxShadow: "none",
    },
  },
  sizes: {
    xs: {
      fontSize: "xs",
      px: "8px",
      py: "6px",
      height: "32px",
    },
    sm: {
      fontSize: "sm",
      px: "16px",
      py: "8px",
      height: "40px",
    },
    md: {
      fontSize: "md",
      px: "12px",
      py: "16px",
      height: "48px",
    },
  },
  variants: {
    primary: {
      bg: "primary.500",
      color: "white",
      _hover: {
        bg: "primary.600",
      },
      _disabled: {
        bg: "gray.400",
      },
    },
    secondary: {
      bg: "white",
      color: "#0580A4",
      border: "1px solid rgba(5, 128, 164, 0.5)",
      _hover: {
        bg: "linear-gradient(0deg, rgba(5, 128, 164, 0.03), rgba(5, 128, 164, 0.03))",
        color: "primary.600",
      },
      _disabled: {
        bg: "white",
        color: "gray.400",
        border: "1px solid",
        borderColor: "gray.300",
      },
    },
    tertiary: {
      bg: "white",
      color: "gray.900",
      border: "1px solid",
      borderColor: "gray.300",
      _hover: {
        bg: "gray.50",
      },
      _disabled: {
        bg: "white",
        color: "gray.400",
        border: "1px solid",
        borderColor: "gray.300",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "primary",
  },
};

export default Button;
