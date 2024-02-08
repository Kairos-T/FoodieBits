import { seo } from "../../config";
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { sceneColor } from "../data/constants";
import ThreeGlobeScene from "@/components/scene";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

const Country = (country) => {
  const title = country.name;
  const description = seo.description;
  const url = `${seo.canonical}cuisines`;
  const color = useColorModeValue("telegram.500", "telegram.400");

  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}>

      </motion.main>
    </>
  );
};

export default Country;