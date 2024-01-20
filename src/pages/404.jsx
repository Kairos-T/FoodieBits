// 404 Page
// By: Kairos and Bowen

import { Box, Button, Heading, Image, Skeleton, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { seo } from "config";
import { useEffect, useState } from "react";
import NextLink from "next/link";
import { motion } from "framer-motion";

const NotFoundData = () => [
  // Texts and images from https://www.kapwing.com/404-illustrations
  {
    heading: "This Page is Melted in the Sun",
    message:
      "People questioned your desire to get strawberry. “That’s the worst flavor,” they said. But you are strong and independent so you got it anyway. And honestly, it wasn’t great. Luckily, two licks in a bike whizzed past you and knocked the cone out of your hand. 'Oh no!' you yelled as the creamy pink became a mess in the dirt. But really you were happy.",
    image: "/images/404/icecream.png"
  },
  {
    heading: "This Page Contains Nothing but Scraps",
    message:
      "A perfectly enticing pizza box sitting on a table. You open it filled with anticipation. And find… nothing but scraps. Perhaps a half-eaten crust. And a lot of grease. The anticipation turns to deep disappointment and despair. There’s nothing left!",
    image: "/images/404/pizza.png"
  },
  {
    heading: "This Page is Burnt to a Crisp",
    message: "Toast takes so long to make. You stare at the toaster tapping your feet. Your laundry is in the dryer and it just dinged. Maybe you’ll take it out. After all, you have time. You take out your laundry. You fold your underwear. You think about folding your socks. You remember your toast! It is too late. It’s burnt to a crisp. The process repeats itself. You should probably figure out your toasting settings.",
    image: "/images/404/toast.png"
  },
  {
    heading: "Don’t Cry Over Spilled Page",
    message: "Gulp. You hold back tears as the white liquid spreads across the floor from your sad looking carton. You should have bought the chocolate milk, it was clearly the better choice. And then maybe you wouldn’t have so carelessly smacked it across the room when you emphatically pointed at a bird outside. Too late now. You wipe the single tear from your eye and go fetch the mop.",
    image: "/images/404/milk.png"
  },
  {
    heading: "This Page is in the Garbage",
    message: "When the king of racoons approached you during the fall of 2005, you were taken aback by the generosity of the offer he made and also his ability to talk. You’ve been living in harmony ever since. They pay 50% of your rent and you “forget” to take out the garbage every other week.",
    image: "/images/404/garbage.png"
  },
  {
    heading: "A Dog Ate This Page",
    message: "Your dog is cute but honestly a menace. Where are my shoes? Where is my graduation certificate? Where is the chocolate cake I baked for my Aunt’s birthday? And why did you take your dog to the vet on that same Thursday?!",
    image: "/images/404/dog.png"
  },
];

const NotFound = ({}) => {
  const title = "404";
  const description = seo.description;
  const url = `${seo.canonical}404`;
  const [notFoundData, setNotFoundData] = useState(null);

  useEffect(() => {
    const data = NotFoundData();
    const randomIndex = Math.floor(Math.random() * data.length);
    setNotFoundData(data[randomIndex]);
  }, []);

  if (!notFoundData) {
    return (
      <Skeleton height="20rem" width="100%" />
    );
  }

  const { heading, message, image } = notFoundData;

  return (
    <>
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
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Box
          as="section"
          display="flex"
          alignItems="center"
          flexDir="column"
          textAlign="center"
          py="4"
        >
          <Heading fontSize="5xl" mb="4">
            404
          </Heading>
          <Heading fontSize="3xl" mb="4">
            {heading}
          </Heading>
          <Image
            src={image} _hover={{ transform: "scale(1.1)" }} transition="all 0.2s ease-in-out"  alt="404 Img" maxH="300px" mb="4" fallback={<Skeleton borderRadius="md" boxSize="100%" />}
          />
          <Text>{message}</Text>
          <Button mt="4">
            <NextLink href="/" passHref>
              <a>Go back to home</a>
            </NextLink>
          </Button>
        </Box>
      </motion.main>
    </>
  );
};

export default NotFound;