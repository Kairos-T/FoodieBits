// Color toggler (light/dark mode) for the navbar
// By: Kairos

import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const hoverColor = useColorModeValue("telegram.600", "telegram.400");

  return (
    <Button
      aria-label={
        colorMode === "light" ? "switch to dark mode" : "switch to light mode"
      }
      ml={{ lg: "6" }}
      variant="ghost"
      _hover={{ color: hoverColor,  bgColor: "rgba(180, 180, 180, 0.2)", transform: "scale(1.1)", transition: "background-color 0.3s ease-in-out" }}
      onClick={toggleColorMode}
    >
      {colorMode === "light" ? (
        <MoonIcon name="moon-icon" />
      ) : (
        <SunIcon name="sun-icon" />
      )}
    </Button>
  );
};

export default DarkModeToggle;
