import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "Dark",
  useSystemColorMode: false
};

const colorMode = extendTheme({ config });

export default colorMode;
