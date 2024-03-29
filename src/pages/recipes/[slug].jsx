// Renders individual recipe posts using MDX.
// SSG to convert from MDX to be able to render content like regular React components.
// By: Kairos

import React, { useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { Box, Flex, Heading, IconButton, Text, useColorModeValue, useToast } from "@chakra-ui/react";
import { DownloadIcon, LinkIcon } from "@chakra-ui/icons";

import { MDXProvider } from "@mdx-js/react";
import dayjs from "dayjs";
import hydrate from "next-mdx-remote/hydrate";
import { motion } from "framer-motion";

import { getFileBySlug, getFiles } from "@/lib/posts";
import { seo } from "config";
import { tagColor } from "@/components/UI/tagColor";
import MDXComponents from "@/components/MDXComponents";
import TagComponent from "@/components/UI/tag";
import { siteUrl } from "../../../next-sitemap";

const RecipePost = ({ mdxSource, frontMatter }) => {
  const { push } = useRouter();

  const color = useColorModeValue("telegram.400", "telegram.400");
  const btnColor = useColorModeValue("gray.100", "gray.100");

  // Hydrating MDX source to render components
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });

  // Extracting metadata from front matter
  const title = frontMatter.title;
  const description = frontMatter.summary;
  const url = `${seo.canonical}recipes/${frontMatter.slug}`;
  const img = frontMatter.image;

  // Constructing recipe URL and file path
  const recipeUrl = `${siteUrl}recipes/${frontMatter.slug}`;
  const filePath = `/recipes/${frontMatter.slug}.mdx`;

  // State to track scroll position for parallax effect
  const [scrollY, setScrollY] = useState(0);

  // Event handler for scroll
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  // Event handler for downloading content
  const handleDownload = async () => {
    try {
      const fileName = `${frontMatter.slug}.txt`;

      // Fetching MDX content
      const response = await fetch(filePath);
      const mdxContent = await response.text();

      // Triggering download by creating the download link
      const downloadLink = document.createElement("a");
      downloadLink.href = `data:text/plain;charset=utf-8,${encodeURIComponent(mdxContent)}`;
      downloadLink.download = fileName;

      document.body.appendChild(downloadLink);
      downloadLink.click();

      document.body.removeChild(downloadLink);

      // Success toast!
      toast({
        title: "Content Downloaded!",
        status: "success",
        duration: 2000,
        isClosable: true
      });
    } catch (err) {
      console.error("Error while initiating download:", err);
    }
  };


  const [isCopied, setIsCopied] = useState(false);
  const toast = useToast();
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(recipeUrl);
      setIsCopied(true);
      toast({
        title: "Link Copied!",
        status: "success",
        duration: 2000,
        isClosable: true
      });
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            url,
            type: "article",
            article: {
              publishedTime: frontMatter.publishedAt,
              tags: frontMatter.tags?.map((tag) => tag)
            }
          }}
        />

        <MDXProvider components={MDXComponents}>
          <Box
            as="section"
            px={{ md: "10", lg: "20", xl: "40" }}
            py="4"
            fontSize="16px"
          >
            {/*Parallax Effect for Image*/}
            <Box
              as="header"
              textAlign="center"
              style={{
                position: "relative",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.5)), url(${img})`,
                backgroundSize: `calc(100% + ${scrollY * 0.4}px)`,
                backgroundPosition: `center`,
                borderRadius: "10px",
                overflow: "hidden"
              }}
            >
              <Box
                style={{
                  transform: `translateY(-${scrollY * 0.2}px)`
                }}
              >
                <Heading as="h1" py="4" size="2xl" color={color}>
                  {frontMatter.title}
                </Heading>

                <Flex direction="column">
                  <Text size="md" color={color} py="1" fontWeight="semibold"
                  >
                    {frontMatter.author} /{" "}
                    {dayjs(frontMatter.publishedAt).format("DD MMMM, YYYY")} /{" "}
                    {frontMatter.readingTime.text}
                  </Text>

                  <Text py="2">
                    {frontMatter.tags.map((tag) => {
                      const color = tagColor[tag];

                      return (
                        <TagComponent
                          color={color}
                          onClick={() =>
                            push({
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
                  </Text>
                </Flex>
              </Box>
            </Box>
            <Box as="article" mb="8">{content}</Box>
            <Flex mt="4" align="center" justify="center" backdropFilter="blur(3px)"
                  backgroundColor="rgba(180, 180, 180, 0.15)" borderRadius="10px"
                  width="fit-content" margin="auto"
            >
              {/*Buttons for Downloading and Copying Link*/}
              <IconButton
                icon={<DownloadIcon />}
                aria-label="Download"
                onClick={handleDownload}
                colorScheme={btnColor}
                variant={"unstyled"}
                _hover={{ transform: "scale(1.1)" }}
                transition="all 0.2s ease-in-out"
              />
              <IconButton
                icon={<LinkIcon />}
                aria-label="Share"
                onClick={copyToClipboard}
                colorScheme={btnColor}
                variant={"unstyled"}
                _hover={{ transform: "scale(1.1)" }}
                transition="all 0.2s ease-in-out"
              />
            </Flex>
          </Box>
        </MDXProvider>
      </motion.main>
    </>
  );
};

export const getStaticPaths = async () => {
  const posts = await getFiles("recipes");

  return {
    // Removes file extension in the URL
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, "")
      }
    })),

    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getFileBySlug("recipes", params.slug);

  return { props: post };
};

export default RecipePost;
