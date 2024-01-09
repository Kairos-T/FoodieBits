import { useCallback, useEffect, useState } from "react";
import { Alert, AlertIcon, Box, Flex, Heading, Input, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Fuse from "fuse.js";

import { getAllFilesFrontMatter } from "@/lib/posts";
import { tagColor } from "@/components/UI/tagColor";
import { seo } from "config";
import TagComponent from "@/components/UI/tag";
import RecipePost from "@/components/recipePost";

import { AnimatePresence, motion } from "framer-motion";

const options = {
  includeScore: true,
  threshold: 0.3,
  ignoreLocation: true,
  keys: ["title"]
};

const Recipe = ({ posts }) => {
  const router = useRouter();
  const color = useColorModeValue("telegram.500", "telegram.400");

  const fuse = new Fuse(posts, options);

  const [recipePost, setrecipePost] = useState(posts);
  const [searchValue, setSearchValue] = useState("");

  const resetFilters = () => {
    setSearchValue("");
    setrecipePost(posts);
    router.push("/recipes");
  };

  const filteredPosts = (tag) => {
    const blogResults = posts.filter((post) => post.tags.includes(tag));
    setrecipePost(blogResults);
  };

  const updateSearch = () => {
    const results = fuse.search(searchValue);
    const blogResults = results.map((res) => res.item);
    setrecipePost(blogResults);
  };

  const delayedSearch = useCallback(updateSearch, [searchValue]);

  useEffect(() => {
    if (searchValue.length === 0) {
      return setrecipePost(posts);
    }
    delayedSearch();
  }, [delayedSearch]);

  useEffect(() => {
    if (router.query?.tag !== undefined) {
      filteredPosts(router.query?.tag);
    }
  }, [router]);

  useEffect(() => {
    const recipeContainer = document.getElementById("recipeContainer");
    if (recipeContainer) {
      recipeContainer.style.opacity = 0;
      let opacity = 0;
      const smoothFade = () => {
        opacity += 0.02;
        recipeContainer.style.opacity = opacity;
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
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
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
          cursor="pointer"
          onClick={resetFilters}
        >
          {" "}
          <Heading as="h1" color={color} fontSize="4xl" fontWeight="700" py="2">
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
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              value={searchValue}
              variant="outline"
              placeholder="Search..."
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

          <AnimatePresence exitBeforeEnter>
            <motion.div
              id="recipeContainer"
              key={searchValue}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {recipePost.length > 0 ? (
                <RecipePost posts={recipePost} />
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
          </AnimatePresence>
        </Box>
      </motion.main>
    </>
  );
};

export async function getStaticProps() {
  const data = await getAllFilesFrontMatter("recipes");
  const posts = data.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return { props: { posts } };
}

export default Recipe;
