// Full Navbar component (Logo and Navbar)
// By: Kairos
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MAX_WIDTH } from "config";
import Logo from "../UI/logo";
import Navbar from "./navbar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      as="header"
      boxShadow="md"
      position="sticky"
      top="0"
      zIndex={100}
      bg={isScrolled ? "rgba(255, 255, 255, 0.02)" : "transparent"}
      backdropFilter="blur(15px)"
      transition="background-color 0.3s ease"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        h="4rem"
        px={[4, 6, 10, 14, 20]}
        maxW={MAX_WIDTH}
        mx="auto"
      >
        <Logo />
        <Navbar />
      </Box>
    </Box>
  );
};

export default Header;
