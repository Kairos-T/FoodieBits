// Hu Bowen
import { Box, Flex, Link, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { MAX_WIDTH } from "../../config";

import { footerData } from "../data/constants/footer";


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
              marginTop={20}
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
            <Flex key={index} direction="column" mb="3">
              <Link
                fontWeight="500"
                href={data.href}
                color={useColorModeValue("gray.800", "gray.300")}
              >
                {data.label}
              </Link>
              <Flex direction={{ base: "row", md: "column" }}>
                {data.links.map((link, index) => (
                  <Link
                    key={index}
                    padding={1}
                    fontSize={{ base: "sm", sm: "md" }}
                    href="#"
                    mr={{ base: 1, sm: 2, md: 0 }}
                    color="gray.500"
                    _hover={{ color: "blue.600" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Flex>
            </Flex>
          ))}
        </Flex>
        <Flex alignItems="center">
          <Text color="gray.500" fontSize="0.875rem" pl="0.5rem">
            &copy; 2024 FoodieBits. All rights reserved.
          </Text>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Footer;