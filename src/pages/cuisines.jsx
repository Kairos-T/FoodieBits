// Wayne
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import { seo } from "config";
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { cuisineContent, sceneColor } from "../data/constants";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ThreeGlobeScene from "@/components/scene.jsx";

const Cuisines = () => {
  const title = "Cuisines";
  const description = seo.description;
  const url = `${seo.canonical}cuisines`;
  const color = useColorModeValue("telegram.500", "telegram.400");
  const bgColor = useColorModeValue("gray.200", "gray.700");

  const router = useRouter();
  // Initialise
  const [windowSize, setWindowSize] = useState([0, 0]);
  const changeColor = useColorModeValue(sceneColor.light, sceneColor.dark);
  const [changeRequest, setChangeRequest] = useState(changeColor);

  useEffect(() => {
    const handleWindowResize = () => {
      const width = document.getElementById("three-container").offsetWidth;
      setWindowSize([width, width * 9 / 16]);
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
      setChangeRequest(changeColor);
    };
    handleColorChange();
  }, [changeColor, changeRequest]);

  ThreeGlobeScene(windowSize, changeRequest);

  function ImageBox(imageUrl, linkUrl, region) {
    const handleClick = () => {
      router.push(linkUrl);
    };
    return (
      <Box
        w="500px"
        h="200px"
        borderWidth="2px"
        padding="6px"
        borderRadius="lg"
        overflow="hidden"
        position="relative"
        onClick={() => handleClick()}
        _hover={{ transform: "scale(1.1)" }}
        transition="all 0.2s ease-in-out"
        cursor={"pointer"}
        mx={3}
      >
        <img
          src={imageUrl}
          alt={region.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        <Text fontSize="2xl" py="10">
          {region.name}
        </Text>
      </Box>
    );
  }

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
          <div id="labelCuisine"></div>
        </Box>
        <Box
          display="flex"
          flexDir="column"
          textAlign="center"
        >
          <Heading as="h2" color={color} fontSize="3xl" fontWeight="700" py="2"
          >
            Regions of The World
          </Heading>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          flexDir="row"
          textAlign="center"
          py="4"
        >
          {ImageBox("/images/countries/China.png", "/cuisines/china", cuisineContent[0])}
          {ImageBox("/images/countries/ASEAN.png", "/cuisines/sea", cuisineContent[1])}
          {ImageBox("/images/countries/USA.png", "/cuisines/usa", cuisineContent[2])}
          {ImageBox("/images/countries/Europe.png", "/cuisines/europe", cuisineContent[3])}
        </Box>
      </motion.main>
    </>
  );
};

export default Cuisines;
