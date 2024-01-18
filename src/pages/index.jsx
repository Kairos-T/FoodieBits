import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Faq from "../components/faq";
import { motion } from "framer-motion";

import { seo } from "config";

import Hero from "../components/hero";
import About from "../components/about";

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400");


  const title = "Home";
  const description = seo.description;

  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      ><NextSeo
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
        <Hero />
        {/*About Section*/}
        {/*By: Ruby*/}
        <Box
          as="section"
          display="flex"
          alignItems="center"
          flexDir="column"
          textAlign="center"
          py="4"
        >
          {" "}
          <Heading as="h1" color={color} fontSize="4xl" fontWeight="700" py="2"
                   id="About"
          >
            Our Profile{" "}
          </Heading>

        </Box>
        <About />

        {/*FAQ Section*/}
        {/*By: Kairos*/}
        <Box
          as="section"
          display="flex"
          alignItems="center"
          flexDir="column"
          textAlign="center"
          py="4"
        >
          {" "}
          <Heading as="h1" color={color} fontSize="4xl" fontWeight="700" py="2"
                   id="FAQ"
          >
            Frequently Asked Questions{" "}
          </Heading>

        </Box>
        <Faq />

      </motion.main>
    </>
  );
};

export default Home;
