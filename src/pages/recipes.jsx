// Recipes page
// By: Kairos

import { useCallback, useEffect, useState } from "react";
import { Alert, AlertIcon, Box, Flex, Heading, Input, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Fuse from "fuse.js";

import { getAllFilesFrontMatter } from "@/lib/posts";
import { tagColor } from "@/components/UI/tagColor";
import { seo } from "config";
import TagComponent from "@/components/UI/tag";
import RecipePosts from "@/components/recipePosts";

import { motion } from "framer-motion";

// Fuse.js options for fuzzy searching
const options = {
  includeScore: true,
  threshold: 0.3,
  ignoreLocation: true,
  keys: ["title"]
};

const Recipe = ({ posts }) => {
  const router = useRouter();
  const color = useColorModeValue("telegram.500", "telegram.400");
  const searchColor = useColorModeValue("gray.400", "gray.500");

  // Initialising Fuse.js for searching
  const fuse = new Fuse(posts, options);

  // Setting of state variables for the search + filtered posts
  const [recipePost, setrecipePost] = useState(posts);
  const [searchValue, setSearchValue] = useState("");

  // Function to reset filters (and search)
  const resetFilters = () => {
    setSearchValue("");
    setrecipePost(posts);
    router.push("/recipes");
  };

  // Function to filter posts based on selected tag
  const filteredPosts = (tag) => {
    const recipeResults = posts.filter((post) => post.tags.includes(tag));
    setrecipePost(recipeResults);
  };

  // Function to update search results (using Fuse.js)
  const updateSearch = () => {
    const results = fuse.search(searchValue);
    const recipeResults = results.map((res) => res.item);
    setrecipePost(recipeResults);
  };

  // Debounced search function -> Prevents constant re-rendering on every keystroke
  const delayedSearch = useCallback(updateSearch, [searchValue]);

  useEffect(() => {
    if (searchValue.length === 0) {
      return setrecipePost(posts);
    }
    delayedSearch();
  }, [delayedSearch]);

  // Effect to filter posts based on tag when the route changes
  useEffect(() => {
    if (router.query?.tag !== undefined) {
      filteredPosts(router.query?.tag);
    }
  }, [router]);

  useEffect(() => {
    const recipeContainer = document.getElementById("recipeContainer");
    if (recipeContainer) {
      recipeContainer.style.transform = "translateY(20px)";
      let opacity = 0;
      let position = 20;
      const smoothFade = () => {
        opacity += 0.04;
        position -= 0.4;
        recipeContainer.style.opacity = opacity;
        recipeContainer.style.transform = `translateY(${position}px)`;
        if (opacity < 1) {
          requestAnimationFrame(smoothFade);
        }
      };
      requestAnimationFrame(smoothFade);
    }
  }, [recipePost]);

  const title = "Recipes";
  const description = seo.description;
  const url = `${seo.canonical}recipes`;

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
          Recipes{" "}
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
          {Object.keys(tagColor).map((tag, index) => {
            const color = tagColor[tag];

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
          id="recipeContainer"
          key={searchValue}
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {recipePost.length > 0 ? (
            <RecipePosts posts={recipePost} />
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
              No recipe has been found :(
            </Alert>
          )}
        </motion.div>
      </Box>
    </>
  );
};

// Fetch all recipes as static props during build time
export async function getStaticProps() {
  const data = await getAllFilesFrontMatter("recipes");
  const posts = data.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return { props: { posts } };
}

export default Recipe;
