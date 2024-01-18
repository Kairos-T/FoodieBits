// Loading component as between pages
// By: Kairos

import React, { useState, useEffect } from 'react';
import { Spinner, Box, Text } from '@chakra-ui/react';

const Loading = ({ messages = ['Synthesizing the best recipes...', 'Preparing ingredients...', 'Chopping up garlic...', 'Cooking up your dish...', 'Plating your dish...'] }) => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 700);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <Box
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
        <Spinner size="xl" color="blue.500" />
        <Text mt="4">{messages[messageIndex]}</Text>
      </Box>
    </Box>
  );
};

export default Loading;