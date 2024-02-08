import { seo } from "../../config";
import { useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

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