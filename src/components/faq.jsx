// FAQ component using Chakra UI's Accordion
// By: Kairos

import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from "@chakra-ui/react";
import faqData from "../data/constants";

const Faq = () => {
  return (
    <Accordion allowToggle>
      {faqData.map((item, index) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontWeight="bold">{item.question}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {item.answer}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Faq;
