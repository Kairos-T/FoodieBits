// components/Faq.js
// By: Kairos

import { Accordion, AccordionIcon, AccordionItem, AccordionButton, AccordionPanel, Box } from "@chakra-ui/react";
import faqData from "../data/constants";

const Faq = () => {
  return (
    <Accordion allowToggle>
      {faqData.map((item, index) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
              {item.question}
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
