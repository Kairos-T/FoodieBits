// Hero section of landing page
// By: Kairos
import { Box, Heading, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion"
import NextImage from "next/image";
import styles from "@/styles/hero.module.css";
import { FaChevronDown } from "react-icons/fa";


const Hero = () => {
  const color = useColorModeValue("telegram.500", "telegram.400");

  return (
    <Box
      as="section"
      display="flex"
      alignItems="center"
      flexDir="column"
      textAlign="center"
      py="4"
      height={{ base: "calc(100vh - 4rem)" }}
    >
      <Box paddingBottom={5}>
        <NextImage
          src="/images/logo.svg"
          width="350"
          height="350"
          alt="FoodieBits Logo"
          priority
        />
        <Box
          className={styles.content}
          fontSize={{ base: "6xl" }}
          py={{ base: "4" }}
          paddingBottom="100"
        >
          <h1>FoodieBits</h1>
          <h1>FoodieBits</h1>
        </Box>
      </Box>

      <Box>
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
      </Box>
      <Link href="/#FAQ" passHref mt={7}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -5, 0, 5, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }} // Adjust duration and repeat as needed
          borderRadius="full"
          px="4"
          py="2"
          color="white"
          fontWeight="semibold"
          cursor="pointer"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <FaChevronDown />
        </motion.div>
      </Link>
    </Box>


  );
};

export default Hero;
