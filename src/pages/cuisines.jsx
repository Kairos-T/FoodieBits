// Wayne
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import { seo } from "config";
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { sceneColor } from "../data/constants";

import React, { useEffect, useState } from "react";
import ThreeGlobeScene from "@/components/scene.jsx";

const Cuisines = () => {
  const title = "Cuisines";
  const description = seo.description;
  const url = `${seo.canonical}cuisines`;
  const color = useColorModeValue("telegram.500", "telegram.400");

  // Initialise
  const [windowSize, setWindowSize] = useState([0, 0]);
  const changeColor = useColorModeValue(sceneColor.light, sceneColor.dark);
  const [changeRequest, setChangeRequest] = useState(changeColor);

  useEffect(() => {
    const handleWindowResize = () => {
      const width = document.getElementById("three-container").offsetWidth;
      setWindowSize([width, width * 9 / 16]);
      console.log(`Cuisines.jsx: ${windowSize}`);
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      // Dispose remove event listeners
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize[0], windowSize[1]]);

  useEffect(() => {
    const handleColorChange = () => {
      console.log(`Cuisines.jsx: ${changeRequest}`);
      setChangeRequest(changeColor);
    };
    handleColorChange();
  }, [changeColor, changeRequest]);

  ThreeGlobeScene(windowSize, changeRequest);

  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}>
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
            Cuisines{" "}
          </Heading>
        </Box>
        <Box
          id="three-container"
          style={{ width: "100%", height: "100vh" }}
          display="flex"
        >
        </Box>
        <Box
          display="flex"
          flexDir="column"
          textAlign="center"
        >
          <Text fontSize="2xl" py="10">
            Country Cuisine of the Day
          </Text>
        </Box>
      </motion.main>
    </>
  );
};

export default Cuisines;
