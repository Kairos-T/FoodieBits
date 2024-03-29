// Hero section of landing page
// By: Kairos and Wayne
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import NextImage from "next/image";
import styles from "@/styles/hero.module.css";
import { FaChevronDown } from "react-icons/fa";
import { init } from "ityped";

const Hero = () => {
  const color = useColorModeValue("telegram.500", "telegram.400");
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: [
        "Food Choices Made Easy",
        "High Quality Recipes",
        "Tailored Recommendations",
        "Designed With You In Mind"
      ]
    });
  }, []);

  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const variants = {
    // Background color for scroll down button
    active: {
      backgroundColor: "#B4B4B4"
    }
  };
  const handleClickScroll = () => {
    const element = document.getElementById("About");
    element.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <Box
      as="section"
      position="relative"
      display="flex"
      alignItems="center"
      flexDir="column"
      textAlign="center"
      minHeight={{ base: "auto", md: "calc(100vh - 4rem)" }}>
      <Box paddingBottom={{ base: 3, md: 5 }}
           id={"Hero"}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          style={{ translateY: `+${scrollY * 0.15}px` }}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        >
          <NextImage
            src="/images/logo.svg"
            width="300px"
            height="300px"
            alt="FoodieBits Logo"
            priority
          />
        </motion.div>
        <Box
          className={styles.content}
          fontSize={{ base: "5xl", lg: "5xl", xl: "6xl" }}
          py={{ base: "4" }}
          mt={{ base: "4" }}
          mb={{ base: "4" }}
        >
          <h1
            style={{
              left: "50%",
              transform: "translate(-50%,-50%)"
            }}
          >FoodieBits</h1>
          <h1
            style={{
              left: "50%",
              transform: "translate(-50%,-50%)"
            }}>FoodieBits</h1>
        </Box>
      </Box>

      <Box>
        <Heading as="h2" fontSize={{ base: "2xl", sm: "xl" }} fontWeight="300"
                 minH={{ base: "8", sm: "10" }}>
           <span
             ref={textRef}
           ></span>
        </Heading>
        <Text py={{ base: "2", md: "4" }} px={{ base: "2", md: "4", lg: "6" }} maxW="4xl"
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
        >
          Your one-stop destination for all things food. Dive into the world
          of culinary delights, explore a myriad of food choices, and
          unravel the stories behind your favourite dishes! FoodieBits -
          Where every bite is an adventure waiting to be savoured!
        </Text>
      </Box>

      <Box onClick={handleClickScroll} cursor="pointer" borderRadius={"50%"} padding={2}>
        <motion.div
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -5, 0, 5, 0]
          }}
          transition={{ duration: 0.8, repeat: Infinity }}
          px="4"
          py="2"
          fontWeight="semibold"
        >
          <Box
            backgroundColor="rgba(180, 180, 180, 0.2)"
            borderRadius={"50%"}
            padding={2}
          >
            <FaChevronDown />

          </Box>
        </motion.div>
      </Box>
    </Box>


  );
};

export default Hero;
