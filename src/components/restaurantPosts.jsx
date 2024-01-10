import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import TagComponent from "@/components/UI/tag";
import { locationTagColor } from "@/components/UI/locationTagColor";
import styles from "@/styles/restaurantPosts.module.css";
import Rating from "react-rating";
import "font-awesome/css/font-awesome.min.css";
import ImageCarousel from "@/components/UI/carousel";

const RestaurantPosts = ({ restaurants, responses }) => {
  const router = useRouter();
  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Box display="flex" gap={5} flexDir={{ base: "column", xl: "row" }}>
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
            width={{ base: "xs", sm: "sm", md: "md", lg: "lg", xl: 0 }}
            flexGrow={1}
            key={title}
          >
            <ImageCarousel
              className={styles.imgCarousel}
              images={images}
              imageHeight={350}
            />
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
    </Box>
  );
};

export default RestaurantPosts;