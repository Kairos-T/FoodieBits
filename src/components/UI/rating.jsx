import { Box, Text } from "@chakra-ui/react";
import Rating from "react-rating";

export default function RestaurantRating({ rating }) {
  return (
    <Box display="flex" alignItems="center" gap={3}>
      <Rating
        emptySymbol="fa fa-star-o fa-2x"
        placeholderSymbol="fa fa-star fa-2x"
        fullSymbol="fa fa-star fa-2x"
        fractions={2}
        placeholderRating={rating}
        readonly
      />
      <Text as="b">{rating}</Text>
    </Box>
  );
}