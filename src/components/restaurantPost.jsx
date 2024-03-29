// Structure for rendering individual restaurant posts
// By: Bowen

import {
  AspectRatio,
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import ImageCarousel from "@/components/UI/carousel";
import RestaurantRating from "@/components/UI/rating";
import TagComponent from "@/components/UI/tag";
import { locationTagColor } from "@/components/UI/locationTagColor";
import styles from "@/styles/restaurantPosts.module.css";
import { useRouter } from "next/router";
import RestaurantReview from "@/components/restaurantReview";

export default function RestaurantPost({ responses, restaurant }) {
  const router = useRouter();
  const bgColor = useColorModeValue("gray.200", "gray.700");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { title, location, descriptions, images, placeId } = restaurant;

  return (
    <>
      <Box
        position="relative"
        overflow="hidden"
        zIndex={1}
        mx="auto"
        rounded="md"
        maxWidth="xl"
        bgColor={bgColor}
        width={{ base: "xs", sm: "sm", md: "md", lg: "lg", xl: "35%" }}
        flexGrow={1}
        key={title}
        onClick={onOpen}
        cursor="pointer"
        _hover={{ transform: "scale(1.05)" }}
        transition="transform 0.3s ease-in-out"
      >
        <ImageCarousel
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
          <RestaurantRating rating={responses[placeId].rating} />
          <TagComponent
            marginTop={1}
            width="max-content"
            color={locationTagColor[location]}
            onClick={(event) => {
              event.stopPropagation();
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

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Box my={9} display="flex" flexDir="column" gap={3}>
              <ImageCarousel
                className={styles.modalImgCarousel}
                images={images}
                imageHeight={400}
              />

              <Text as="b" fontSize="2xl">{title}</Text>
              <RestaurantRating rating={responses[placeId].rating} />

              <Box
              >
                <TagComponent
                  marginTop={1}
                  width="max-content"
                  onClick={(event) => {
                    event.stopPropagation();
                    router.push({
                      pathname: "/restaurants/",
                      query: { location }
                    });
                  }}
                  color={locationTagColor[location]}
                  key={location}
                >
                  {location}
                </TagComponent>
              </Box>

              <Text as="b">Description</Text>
              {descriptions.map(description => {
                return <Text fontSize="sm" marginBottom={1}>{description}</Text>;
              })}

              <Text as="b">Reviews</Text>
              {responses[placeId].reviews.slice(3).map(review => {
                return <RestaurantReview review={review} />;
              })}

              <Text as="b">Location</Text>
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?q=place_id:${placeId}&key=AIzaSyDIzUkXUVqBbckd6UUaZ_puok0OwsdCdhM`} />
              </AspectRatio>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
