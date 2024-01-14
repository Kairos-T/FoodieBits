// Hu Bowen
import { Box, Flex, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { MAX_WIDTH } from "../../config";
import NextLink from "next/link";

import { footerData } from "../data/constants";


const Footer = () => {
  const footerColor = useColorModeValue("gray.100", "gray.900");

  return (
    <Box
      width="100%"
      backgroundColor={footerColor}
    >
      <VStack spacing={5} alignItems="initial"
              maxW={MAX_WIDTH}
              px={[4, 6, 10, 14, 20]}
              marginTop={10}
              padding={10}
              mx="auto"
      >
        <Flex
          flexWrap="wrap"
          direction={{ base: "column", md: "row" }}
          alignItems="start"
          justifyContent="space-between"
        >
          {footerData.map((data, index) => (
            <Flex key={index} direction="column" mb="3" gap={1}>
              <NextLink
                href={data.href}
              >
                <Text as="b"
                      fontWeight="500"
                      color={useColorModeValue("gray.800", "gray.300")}
                      _hover={{ textDecoration: "underline" }}
                      cursor={"pointer"}
                >
                  {data.label}
                </Text>
              </NextLink>
              <Flex direction={{ base: "row", md: "column" }}>
                {data.links.map((link, index) => (
                  <NextLink
                    key={index}
                    href={link.href}
                  >
                    <Text
                      py={1}
                      color="gray.500"
                      _hover={{ color: "blue.600" }}
                      cursor={"pointer"}
                      mr={{ base: 1, sm: 2, md: 0 }}
                      fontSize={{ base: "sm", sm: "md" }}
                    >
                      {link.label}
                    </Text>
                  </NextLink>
                ))}
              </Flex>
            </Flex>
          ))}
        </Flex>
        <Flex alignItems="center">
          <Text color="gray.500" fontSize="0.875rem" pl="0.5rem" mx="auto">
            &copy; 2024 FoodieBits. All rights reserved.
          </Text>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Footer;