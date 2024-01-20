import { chakra } from "@chakra-ui/react";
import NextLink from "next/link";

const Logo = () => {

  return (
    <NextLink href="/" passHref>
      <chakra.a fontSize="2rem" fontWeight="700"
                _hover={{ color: "telegram.600", transition: "color 0.3s ease-in-out" }}
      >
        FoodieBits
      </chakra.a>
    </NextLink>
  );
};

export default Logo;
