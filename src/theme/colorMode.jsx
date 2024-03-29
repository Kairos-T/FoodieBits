// Configurations using Chakra UI (Dark Mode, Light Mode, etc.)
// By: Kairos

import { extendTheme } from "@chakra-ui/react";

// Sets light to default in local storage
const config = {
  initialColorMode: "Light",
  useSystemColorMode: true
};

const colorMode = extendTheme({ config });

export default colorMode;
