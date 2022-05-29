import { extendTheme } from "@chakra-ui/react";
import components from "./components";
import colors from "./colors/color";
import typography from "./typography/typography";

const theme = extendTheme({ ...typography, colors, components });

export default theme;
