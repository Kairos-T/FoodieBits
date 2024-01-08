// Structure for rendering recipes posts
// By: Kairos
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import dayjs from "dayjs";

import { tagColor } from "./UI/tagColor";
import TagComponent from "./UI/tag";

import styles from "../styles/recipePost.module.css";
import { useEffect, useState } from "react";

const RecipePost = ({ posts }) => {
  const router = useRouter();

  const titleColor = useColorModeValue("gray.100", "gray.100");
  const summaryColor = useColorModeValue("gray.200", "gray.200");
  const dateColor = useColorModeValue("gray.300", "gray.300");
  const yearColor = useColorModeValue("telegram.500", "telegram.400");

  let year = 0;
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {posts.map((post) => {
        const { slug, title, summary, tags, publishedAt, image } = post;

        const thisYear = publishedAt.substring(0, 4);

        const YearComponent = thisYear !== year && (
          <Heading color={yearColor} mt="2">
            {thisYear}
          </Heading>
        );

        year = thisYear;

        return (
          <Box my="3" py="2" px="4" rounded="md" key={slug}>
            {/*{YearComponent}*/}
            <Box className={styles.postBox} style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${image})`
            }}>
              <NextLink href={`/recipes/${slug}`}>
                <a>
                  <Heading as="h3" fontSize="2xl" fontWeight="700">
                    <Text color={titleColor}>{title}</Text>
                  </Heading>
                  <Text fontSize="17px" fontWeight="400" color={summaryColor} py="1">
                    {summary}
                  </Text>
                </a>

              </NextLink>

              {tags.map((tag) => {
                const color = tagColor[tag];
                return (
                  <TagComponent
                    color={color}
                    onClick={() =>
                      router.push({
                        pathname: "/recipes/",
                        query: { tag }
                      })
                    }
                    key={tag}
                  >
                    {tag}
                  </TagComponent>
                );
              })}

              <Text fontSize="16px" fontWeight="500" color={dateColor} py="1">
                {dayjs(publishedAt).format("DD MMMM, YYYY")}
              </Text>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default RecipePost;
