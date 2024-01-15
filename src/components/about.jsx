// Hero section of landing page
// By: Kairos
import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import NextImage from "next/image";
import { data } from "../data/constants";

const About = () => {
  const isOdd = (num) => num % 2;

  return (
    <Box
      as="section"
      display="flex"
      alignItems="center"
      flexDir="column"
      textAlign={{ base: "center", lg: "left" }}
      py="4"
    >
      {data.map((item, index) => (
        <Box
          display={{ lg: "flex" }}
          justifyContent={{ lg: "center" }}
          alignItems={{ lg: "center" }}
          flexDir={{ lg: isOdd(index) == 1 && "row-reverse" }}
          key={index}
        >
          <Box
            w={{ base: "80%", lg: "35%" }}
            mx={{ base: "auto", lg: "0" }}
            pl={{ lg: isOdd(index) == 1 && "10" }}
            pr={{ lg: isOdd(index) == 0 && "10" }}
          >
            <NextImage
              src={item.image}
              width="500"
              height="500"
              alt={item.title}
            />
          </Box>

          <Box w={{ lg: "50%" }}>
            <Heading as="h1">{item.title}</Heading>
            <Text py="4">{item.description}</Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default About;
