// Structure for rendering the various restaurant posts
// By: Bowen
import { Box } from "@chakra-ui/react";
import "font-awesome/css/font-awesome.min.css";
import RestaurantPost from "@/components/restaurantPost";

const RestaurantPosts = ({ restaurants, responses }) => {
  return (
    <Box display="flex" flexWrap="wrap" maxWidth="4xl" gap={7} mx="auto" flexDir={{ base: "column", xl: "row" }}>
      {restaurants.map((restaurant) => {
        return <RestaurantPost responses={responses} restaurant={restaurant} />;
      })
      }
    </Box>
  );
};

export default RestaurantPosts;