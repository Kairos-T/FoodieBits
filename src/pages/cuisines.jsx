import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import { seo } from "config";
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import * as Three from "three";

const Cuisines = ({}) => {
  const title = "Cuisines";
  const description = seo.description;
  const url = `${seo.canonical}cuisines`;
  const color = useColorModeValue("telegram.500", "telegram.400");

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
          <Text py="4">

          </Text>
        </Box>
      </motion.main>
      <div>
        {GlobeScene}
      </div>
    </>
  );
};

const GlobeScene = () => {
  useEffect(() =>
    {
      // Create a scene
      const scene = new Three.Scene();
      // Create a camera
      const camera = new Three.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 100)
      // Create a renderer
      const renderer = new Three.WebGL1Renderer();
      renderer.setSize(window.innerWidth, window.innerHeight)
      document.body.appendChild(renderer.domElement);

      // Create a globe (sphere)
      const globe = new Three.Sphere()
      const material = new Three.ParticleBasicMaterial({color: 0x00ff00})
    }
  )
}

export default Cuisines;
