import { Box } from "@chakra-ui/react";
import "font-awesome/css/font-awesome.min.css";
import RestaurantPost from "@/components/restaurantPost";

const RestaurantPosts = ({ restaurants, responses }) => {
  return (
    <Box display="flex" flexWrap="wrap" maxWidth="4xl" gap={5} mx="auto" flexDir={{ base: "column", xl: "row" }}>
      {restaurants.map((restaurant) => {
        return <RestaurantPost responses={responses} restaurant={restaurant} />;
      })
      }
    </Box>
  );
};

export default RestaurantPosts;