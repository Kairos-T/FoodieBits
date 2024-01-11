import { Box, Text } from "@chakra-ui/react";
import Rating from "react-rating";

export default function RestaurantRating({ rating, size=2 }) {
  return (
    <Box display="flex" alignItems="center" gap={3}>
      <Rating
        emptySymbol={`fa fa-star-o fa-${size}x`}
        placeholderSymbol={`fa fa-star fa-${size}x`}
        fullSymbol={`fa fa-star fa-${size}x`}
        fractions={2}
        placeholderRating={rating}
        readonly
      />
      <Text as="b">{rating}</Text>
    </Box>
  );
}