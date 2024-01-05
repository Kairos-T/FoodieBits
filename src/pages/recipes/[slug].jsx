import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import dayjs from "dayjs";
import hydrate from "next-mdx-remote/hydrate";
import { motion } from "framer-motion";

import { getFileBySlug, getFiles } from "@/lib/posts";
import { seo } from "config";
import { tagColor } from "@/components/UI/tagColor";
import MDXComponents from "@/components/MDXComponents";
import TagComponent from "@/components/UI/tag";

const BlogPost = ({ mdxSource, frontMatter }) => {
  const { push } = useRouter();

  const color = useColorModeValue("telegram.500", "telegram.400");

  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  const title = frontMatter.title;
  const description = frontMatter.summary;
  const url = `${seo.canonical}recipes/${frontMatter.slug}`;
  const img = frontMatter.image;

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
              tags: frontMatter.tags?.map((tag) => tag),
            },
          }}
        />

        <MDXProvider components={MDXComponents}>
          <Box
            as="section"
            px={{ md: "10", lg: "20", xl: "40" }}
            py="4"
            fontSize="16px"
          >
            <Box as="header" textAlign="center"  style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
            }}>
              <Heading as="h1" py="4" size="2xl" color={color}>
                {frontMatter.title}
              </Heading>

              <Flex direction="column">
                <Text fontSize="16px" color={color} py="1">
                  {frontMatter.author} /{" "}
                  {dayjs(frontMatter.publishedAt).format("DD MMMM, YYYY")} /{" "}
                  {frontMatter.readingTime.text}
                </Text>
                <Text py="1">
                  {frontMatter.tags.map((tag) => {
                    const color = tagColor[tag];

                    return (
                      <TagComponent
                        color={color}
                        onClick={() =>
                          push({
                            pathname: "/recipes/",
                            query: { tag },
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
            <Box as="article">{content}</Box>
          </Box>
        </MDXProvider>
      </motion.main>
    </>
  );
};

export const getStaticPaths = async () => {
  const posts = await getFiles("recipes");

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ""),
      },
    })),

    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getFileBySlug("recipes", params.slug);

  return { props: post };
};

export default BlogPost;
