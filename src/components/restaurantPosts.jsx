import { Box, Image, Skeleton, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TagComponent from "@/components/UI/tag";
import { locationTagColor } from "@/components/UI/locationTagColor";
import styles from "../styles/restaurantPosts.module.css";
import Rating from "react-rating";
import "font-awesome/css/font-awesome.min.css";

const RestaurantPosts = ({ restaurants, responses }) => {
  const router = useRouter();
  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <>
      {restaurants.map((restaurant) => {
        const { title, location, description, images, placeId } = restaurant;

        return (
          <Box
            position="relative"
            overflow="hidden"
            zIndex={1}
            my="3"
            mx="auto"
            rounded="md"
            maxWidth="xl"
            bgColor={bgColor}
            key={title}
          >
            <Carousel
              className={styles.imgCarousel}
              arrows
              infinite
              responsive={{
                anything: {
                  breakpoint: {
                    max: 3000, min: 0
                  },
                  items: 1
                }
              }}>
              {
                images.map(image => {
                  return <Image key={image} src={image} alt={image} width="full" height={350} objectFit="cover"
                                backgroundPosition="center" fallback={<Skeleton width="full" height={350} />} />;
                })
              }
            </Carousel>
            <Box
              display="flex"
              flexDir="column"
              gap={2}
              py="2"
              px="4"
            >
              <Text as="b" fontSize="2xl">{title}</Text>
              <Box display="flex" alignItems="center" gap={3}>
                <Rating
                  emptySymbol="fa fa-star-o fa-2x"
                  placeholderSymbol="fa fa-star fa-2x"
                  fullSymbol="fa fa-star fa-2x"
                  fractions={2}
                  placeholderRating={responses[placeId].rating}
                  readonly
                />
                <Text as="b">{responses[placeId].rating}</Text>
              </Box>
              <TagComponent
                marginTop={1}
                width="max-content"
                color={locationTagColor[location]}
                onClick={() => {
                  router.push({
                    pathname: "/restaurants/",
                    query: { location }
                  });
                }}
                key={location}
              >
                {location}
              </TagComponent>
            </Box>
          </Box>
        );
      })
      }
    </>
  );
};

export default RestaurantPosts;