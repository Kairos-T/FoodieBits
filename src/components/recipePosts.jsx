// Structure for rendering recipes posts
// By: Kairos
import { AspectRatio, Box, Heading, Image, Skeleton, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import dayjs from "dayjs";

import { tagColor } from "./UI/tagColor";
import TagComponent from "./UI/tag";

import styles from "@/styles/recipePosts.module.css";
import { useEffect, useState } from "react";

const RecipePosts = ({ posts }) => {
  const router = useRouter();

  const { colorMode } = useColorMode();
  const titleColor = useColorModeValue("gray.900", "gray.100");
  const summaryColor = useColorModeValue("gray.800", "gray.200");
  const dateColor = useColorModeValue("gray.600", "gray.500");
  const yearColor = useColorModeValue("telegram.500", "telegram.400");
  const bgColor = useColorModeValue("gray.100", "gray.700");

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
            <Box bgColor={bgColor} rounded="md"
                 className={styles.postBox}
                 display={{ md: "flex" }}
                 flexDirection={{ base: "column", md: "row" }}
              // alignItems={{ md: "center" }}
                 p={{ base: 4, md: 6 }}

            >

              {/* Text Section */}
              <Box
                flex="1" pr={{ md: 8 }} pb={{ base: 4, md: 0 }}>
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
                      mt="2"
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

              {/* Image Section */}
              <Box
                flex="1"
                minW={{ base: "100%", md: "40%" }}
              >
                <NextLink href={`/recipes/${slug}`}>
                  <a>
                    <AspectRatio ratio={{ base: 16 / 9, xl: 16 / 9, lg: 10 / 9, md: 3 / 4 }} borderRadius="md">
                      <Image
                        src={image}
                        alt={title}
                        borderRadius="md"
                        objectFit="cover"
                        boxSize="100%"
                        fallback={<Skeleton borderRadius="md" boxSize="100%" />}
                        alignItems={{ md: "center" }} />
                    </AspectRatio>
                  </a>
                </NextLink>
              </Box>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default RecipePosts;
