// Loading component as between pages
// By: Kairos

import React, { useEffect, useState } from "react";
import { Box, Spinner, Text } from "@chakra-ui/react";

const Loading = ({ messages = ["Synthesizing the best recipes...", "Preparing ingredients...", "Chopping up garlic...", "Cooking up your dish...", "Plating your dish..."] }) => {
  const [messageIndex, setMessageIndex] = useState(() => Math.floor(Math.random() * messages.length));

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 700);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <Box
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      background="rgba(255, 255, 255, 0.9)"
      zIndex="1000"
    >
      <Box textAlign="center">
        <Spinner size="xl" color="blue.500" thickness="4px" role="status" aria-hidden="true" />
        <Text mt="4" tabIndex={0}>{messages[messageIndex]}</Text>
      </Box>
    </Box>
  );
};

export default Loading;
