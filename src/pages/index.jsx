import { Box, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import NextImage from "next/image";

import { data, seo } from "config";

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400");

  const isOdd = (num) => num % 2;

  const title = "Home";
  const description = seo.description;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={seo.canonical}
        openGraph={{
          title,
          description,
          images: [
            {
              url: `${seo.canonical}/images/logo.svg`,
              width: "350px",
              height: "350px",
              alt: "FoodieBits Logo"
            }
          ]
        }}
      />

      <Box
        as="section"
        display="flex"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        py="4"
      >
        <NextImage
          src="/images/logo.svg"
          width="350"
          height="350"
          alt="FoodieBits Logo"
          placeholder="blur"
          blurDataURL="L5I~of#i004mgjw]-4XA00?wL#xu"
          priority
        />
        <Box>
          <Heading as="h1" fontSize="4xl" fontWeight="700" py="2">
            Welcome to FoodieBits!{" "}
          </Heading>
          <Heading as="h2" fontSize="2xl" fontWeight="300">

            <Text as="span" color={color}>
              Food Choices
            </Text>{" "}
            Made Easy
          </Heading>
          <Text py="4">
            Your one-stop destination for all things food. Dive into the world
            of culinary delights, explore a myriad of food choices, and
            unravel the stories behind your favourite dishes! FoodieBits -
            Where every bite is an adventure waiting to be savoured!
          </Text>
          <Button
            colorScheme="telegram"
            variant="ghost"
            size="lg"
            fontSize="20px"
          >
            Get in touch
          </Button>
        </Box>
      </Box>

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
                placeholder="blur"
                blurDataURL="L8LE.{~60000_3V@ITx^00t:V?-P"
              />
            </Box>

            <Box w={{ lg: "50%" }}>
              <Heading as="h1">{item.title}</Heading>
              <Text py="4">{item.description}</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Home;
