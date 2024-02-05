// Restaurant review part of each restaurant post
// By: Bowen

import { Box, Button, Image, Text, useColorModeValue } from "@chakra-ui/react";
import RestaurantRating from "@/components/UI/rating";
import { forwardRef, useEffect, useRef, useState } from "react";

export const ExpandableText = forwardRef(
  ({ children, noOfLines, ...rest }, ref) => {
    const [expandedCount, setExpandedCount] = useState(noOfLines);
    const [isClicked, setIsClicked] = useState(false);
    const [isTextClamped, setIsTextClamped] = useState(false);

    const inputRef = useRef(null);

    useEffect(() => {
      if (inputRef.current) {
        const { scrollHeight, clientHeight } = inputRef.current;
        setIsTextClamped(scrollHeight > clientHeight || isClicked);
      }
    }, [inputRef.current]);

    const handleToggle = () => {
      setIsClicked(true);
      setExpandedCount(expandedCount ? undefined : noOfLines);
    };

    return (
      <Box ref={ref}>
        <Text ref={inputRef} noOfLines={expandedCount} {...rest}>
          {children}
        </Text>
        <Button
          display={isTextClamped ? "block" : "none"}
          size="sm"
          variant="link"
          onClick={handleToggle}
        >
          <Text>{!expandedCount ? "Show less" : "Read more"}</Text>
        </Button>
      </Box>
    );
  }
);

export default function RestaurantReview({ review }) {
  const bgColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box display="flex" flexDir="column" bgColor={bgColor} rounded={5} p={5} gap={3} marginBottom={3}>
      <Box display="flex" height="min-content" gap={5}>
        <Image src={review.profile_photo_url} alt="Profile picture" height="64px"
               fallbackSrc="/images/restaurants/default_pfp.png" />
        <Box display="flex" flexDir="column" justifyContent="center">
          <Text as="b">{review.author_name}</Text>
          <RestaurantRating rating={review.rating} size={1} />
        </Box>
      </Box>

      <ExpandableText noOfLines={3} fontSize="sm">
        {review.text}
      </ExpandableText>
    </Box>
  );
}