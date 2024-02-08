// App footer component
// By: Hu Bowen and Ruby

import { Box, Flex, Text, useColorModeValue, VStack, Button, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody } from "@chakra-ui/react";
import { MAX_WIDTH } from "../../config";
import NextLink from "next/link";
import { footerData } from "../data/constants";

const SharePopover = () => (
  <Popover>
    <PopoverTrigger>
      <Button variant="outline">Share</Button>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverHeader>Share FoodieBits with Others</PopoverHeader>
      <PopoverBody>
        <div><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//foodie-bits.vercel.app/">Share on Facebook</a></div>
        <div><a href="https://twitter.com/intent/tweet?text=All%20the%20best%20recipes%20and%20restaurants%20at%20FoodieBits%20-%20https%3A//foodie-bits.vercel.app/">Share on X</a></div>
        <div><a href="https://t.me/share/url?url=https%3A//foodie-bits.vercel.app/&text=For%20all%20the%20best%20recipes%20and%20restaurants%20in%20Singapore,%20its%20all%20on%20FoodieBits!">Send via Telegram</a></div>
        <div><a href="whatsapp://send?text=https://foodie-bits.vercel.app/" target="_blank" rel="nofollow noopener">Share on WhatsApp</a></div>
        <div><a href="https://www.tumblr.com/widgets/share/tool?canonicalUrl=https://foodie-bits.vercel.app/&title=FoodieBits&caption=For%20all%20the%20best%20places%20to%20dine%20and%20the%20tastiest%20recipes%20in%20Singapore!" target="_blank" rel="nofollow noopener">Share on Tumblr</a></div>
        <div></div>
      </PopoverBody>
    </PopoverContent>
  </Popover>
);

const Footer = () => {
  const footerColor = useColorModeValue("gray.200", "gray.900");

  return (
    <>
      <Box
        position="fixed"
        top="5rem" // adjust this value as needed
        right="5"
        zIndex="popover" // adjust this value to ensure it's above other content
      >
        <SharePopover />
      </Box>
      <Box
        width="100%"
        backgroundColor={footerColor}
        marginTop="5rem" // adjust this value to leave space for the popover
      >
        <VStack spacing={5} alignItems="initial" maxW={MAX_WIDTH} px={[4, 6, 10, 14, 20]} padding={10} mx="auto">
        <Flex
          flexWrap="wrap"
          direction={{ base: "column", md: "row" }}
          alignItems="start"
          justifyContent="space-between"
        >
          {footerData.map((data, index) => (
            <Flex key={index} direction="column" mb="3" gap={1}>
              <NextLink
                href={data.href}
              >
                <Text as="b"
                      fontWeight="500"
                      color={useColorModeValue("gray.800", "gray.300")}
                      _hover={{ textDecoration: "underline" }}
                      cursor={"pointer"}
                >
                  {data.label}
                </Text>
              </NextLink>
              <Flex direction={{ base: "row", md: "column" }}>
                {data.links.map((link, linkIndex) => (
                  <NextLink
                    key={linkIndex}
                    href={link.href}
                  >
                    <Text
                      py={1}
                      color="gray.500"
                      _hover={{ color: "blue.600" }}
                      cursor={"pointer"}
                      mr={{ base: 1, sm: 2, md: 0 }}
                      fontSize={{ base: "sm", sm: "md" }}
                    >
                      {link.label}
                    </Text>
                  </NextLink>
                ))}
                {data.label === "Social" && (
                  <>
                    <SharePopover />
                  </>
                )}
              </Flex>
            </Flex>
          ))}
        </Flex>
        <Flex alignItems="center">
          <Text color="gray.500" fontSize="0.875rem" pl="0.5rem" mx="auto">
            &copy; 2024 FoodieBits. All rights reserved.
          </Text>
        </Flex>
        </VStack>
      </Box>
    </>
  );
};

export default Footer;
