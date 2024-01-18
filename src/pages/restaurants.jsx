import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import { seo } from "config";
import { Alert, AlertIcon, Box, Flex, Heading, Input, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import TagComponent from "@/components/UI/tag";
import { restaurantData } from "../data/constants";
import Fuse from "fuse.js";
import { locationTagColor } from "@/components/UI/locationTagColor";
import RestaurantPosts from "@/components/restaurantPosts";


const options = {
  includeScore: true,
  threshold: 0.3,
  ignoreLocation: true,
  keys: ["title"]
};

const Restaurants = ({ responseObject }) => {
  const router = useRouter();
  const color = useColorModeValue("telegram.500", "telegram.400");
  const searchColor = useColorModeValue("gray.400", "gray.500");
  const fuse = new Fuse(restaurantData, options);

  const [restaurants, setRestaurants] = useState(restaurantData);
  const [searchValue, setSearchValue] = useState("");

  const resetFilters = async () => {
    setSearchValue("");
    setRestaurants(restaurantData);
    await router.push("/restaurants");
  };

  const filteredPosts = (term) => {
    const restaurantResults = restaurantData.filter((restaurant) => restaurant.location.includes(term));
    setRestaurants(restaurantResults);
  };

  const updateSearch = () => {
    const results = fuse.search(searchValue);
    const restaurantResults = results.map((res) => res.item);
    setRestaurants(restaurantResults);
  };

  const delayedSearch = useCallback(updateSearch, [searchValue]);

  useEffect(() => {
    if (searchValue.length === 0) {
      return setRestaurants(restaurantData);
    }
    delayedSearch();
  }, [delayedSearch]);

  useEffect(() => {
    if (router.query?.location !== undefined) {
      filteredPosts(router.query?.location);
    }
  }, [router]);

  useEffect(() => {
    const restaurantContainer = document.getElementById("restaurantContainer");
    if (restaurantContainer) {
      restaurantContainer.style.transform = "translateY(20px)";
      let opacity = 0;
      let position = 20;
      const smoothFade = () => {
        opacity += 0.04;
        position -= 0.4;
        restaurantContainer.style.opacity = opacity;
        restaurantContainer.style.transform = `translateY(${position}px)`;
        if (opacity < 1) {
          requestAnimationFrame(smoothFade);
        }
      };
      requestAnimationFrame(smoothFade);
    }
  }, [restaurants]);

  const title = "Restaurants";
  const description = seo.description;
  const url = `${seo.canonical}restaurants`;

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

      <Box
        as="section"
        display="flex"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        py="4"

      >
        {" "}
        <Heading as="h1" color={color} fontSize="4xl" fontWeight="700" py="2" cursor="pointer" onClick={resetFilters}
        >
          Restaurants
        </Heading>
      </Box>
      <Box
        as="section"
        fontSize="16px"
        px={{ md: "10", lg: "20", xl: "30" }}
        py="4"
      >
        <Flex justify="center">
          <Input
            isInvalid
            errorBorderColor={searchColor}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            value={searchValue}
            variant="outline"
            placeholder="Search..."
            _placeholder={{ color: searchColor }}
            maxWidth="400px"
          />
        </Flex>

        <Flex
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
          m="1.5rem 0"
        >
          {Object.keys(locationTagColor).map((tag, index) => {
            const color = locationTagColor[tag];

            return (
              <Box key={index}>
                <TagComponent color={color} onClick={() => filteredPosts(tag)}>
                  {tag}
                </TagComponent>
              </Box>
            );
          })}
        </Flex>

        <motion.div
          id={"restaurantContainer"}
          key={searchValue}
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {restaurants.length > 0 ? (
            <RestaurantPosts restaurants={restaurants} responses={responseObject} />
          ) : (
            <Alert
              status="info"
              borderRadius="md"
              display="flex"
              justifyContent="center"
              mx="auto"
              maxWidth="500px"
              fontWeight="500"
            >
              <AlertIcon />
              No restaurant has been found :(
            </Alert>
          )}
        </motion.div>
      </Box>
    </>
  );
};

export default Restaurants;

export async function getServerSideProps() {
  const responses = await Promise.all(
    restaurantData.map(async restaurant => {
      const placeId = restaurant.placeId;
      const res = await fetch("https://maps.googleapis.com/maps/api/place/details/json?" + new URLSearchParams({
        placeid: placeId,
        key: process.env.GOOGLE_MAPS_API_KEY
      }));
      const json = await res.json();
      return [placeId, json.result];
    })
  );

  const responseObject = Object.fromEntries(responses);
  return { props: { responseObject } };
}
