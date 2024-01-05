// By: Kairos and Bowen

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
          Contact Us{" "}
        </Heading>
        <Text py="4">
           Do you have questions unanswered, want collaborate with us or have suggestions? Drop us an email below and our team will get back to you within 3 days! While waiting, why not check out some of our FAQs?
        </Text>
      </Box>

    </>
  );
};
export default Contact;
