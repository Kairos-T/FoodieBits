import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { seo } from "config";
import Faq from "../components/faq";


const Contact = ({}) => {
  const title = "Contact";
  const description = seo.description;
  const url = `${seo.canonical}contact`;
  const color = useColorModeValue("telegram.500", "telegram.400");

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url
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
        {" "}
        <Heading as="h1" color={color} fontSize="4xl" fontWeight="700" py="2">
          Frequently Asked Questions{" "}
        </Heading>
      </Box>
      <Faq />

    </>
  );
};


export default Contact;
