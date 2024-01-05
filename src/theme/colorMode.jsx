import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "Light",
  useSystemColorMode: true
};

const colorMode = extendTheme({ config });

export default colorMode;
