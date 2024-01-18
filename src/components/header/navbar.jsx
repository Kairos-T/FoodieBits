// Code for rendering the navbar component
// Contains dark/light mode toggle and links to other pages
// By: Kairos

import { useState } from "react";
import { Box, chakra, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

import HamburgerMenu from "../UI/hamburgerMenu";
import ColorModeToggle from "../UI/colorModeToggle";

import { navbarLinks } from "../../data/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const bg = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("black", "white");
  const hoverColor = useColorModeValue("telegram.600", "telegram.400");

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Box
      as="nav"
      display="flex"
      flexDir={{ base: "row-reverse", lg: "row" }}
      alignItems="center"
      fontWeight="500"
    >
      <HamburgerMenu toggled={isOpen} toggle={setIsOpen} />
      <chakra.ul
        bg={{ base: bg, lg: "transparent" }}
        color={color}
        display={{
          base: isOpen ? "block" : "none",
          lg: "flex"
        }}
        position={{ base: "absolute", lg: "static" }}
        top="5rem"
        left="5%"
        right="5%"
        rounded={{ base: "lg", lg: "none" }}
        py={{ base: "2", lg: "0" }}
        px={{ base: "4", lg: "0" }}
        alignItems={{ lg: "center" }}
        boxShadow={{ base: "xl", lg: "none" }}
        zIndex="2"
      >
        {navbarLinks.map(({ href, label }) => (
          <chakra.li key={href} listStyleType="none" px={{ lg: "8" }} py={{ base: "3", lg: "0" }}
                     _hover={{ color: hoverColor, transition: "background-color 0.3s ease-in-out" }}>
            <NextLink href={href}>
              <a onClick={closeMenu}>{label}</a>
            </NextLink>
          </chakra.li>
        ))}
      </chakra.ul>

      <ColorModeToggle />
    </Box>
  );
};

export default Navbar;
