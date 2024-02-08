// About section of landing page
// By: Ruby
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import NextImage from "next/image";
import { data } from "../data/constants";
//Sets colour and image parameters for about section of index.jsx page
const About = () => {
  const isOdd = (num) => num % 2;
  const textColor = useColorModeValue("gray.700", "gray.200");


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
              width="350"
              height="350"
              layout="responsive"
              objectFit={"cover"}
              overflow={"hidden"}
              alt={item.title}
              style={{ borderRadius: "10px" }}
            />
          </Box>

          <Box w={{ lg: "50%" }}>
            <Heading as="h3" fontSize="3xl">{item.title}</Heading>
            <Text py="4"
                  color={textColor}
            >{item.description}</Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default About;
