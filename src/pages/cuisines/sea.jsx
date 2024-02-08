// Wayne

import { cuisineContent } from "../../data/constants";
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
export default function Sea() {
  const color = useColorModeValue("telegram.500", "telegram.400");
  const region = cuisineContent[1]
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        flexDir="column">
        <Heading as="h1" color={color} fontSize="4xl" fontWeight="700" py="2">
          {region.name}
        </Heading>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        flexDir="column"
      >
        <Box
          w="500px"
          h="330px"
          borderWidth="2px"
          padding="6px"
          borderRadius="lg"
          overflow="hidden"
          position="relative"
        >
          <img
            src="/images/countries/ASEAN.png"
            alt={region.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Box>
    </>
  );
}