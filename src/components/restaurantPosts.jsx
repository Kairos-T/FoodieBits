import {
  AspectRatio,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import TagComponent from "@/components/UI/tag";
import { locationTagColor } from "@/components/UI/locationTagColor";
import styles from "@/styles/restaurantPosts.module.css";
import "font-awesome/css/font-awesome.min.css";
import ImageCarousel from "@/components/UI/carousel";
import RestaurantRating from "@/components/UI/rating";

const RestaurantPosts = ({ restaurants, responses }) => {
  const router = useRouter();
  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Box display="flex" gap={5} flexDir={{ base: "column", xl: "row" }}>
      {restaurants.map((restaurant) => {
        const { isOpen, onOpen, onClose } = useDisclosure();
        const { title, location, description, images, placeId } = restaurant;

        return (
          <>
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
            onClick={onOpen}
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

            <Modal
              onClose={onClose}
              isOpen={isOpen}
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
                    <Text as="b">Description</Text>
                    {description}

                    <Text as="b">Location</Text>
                    <AspectRatio ratio={16 / 9}>
                      <iframe
                        src={`https://www.google.com/maps/embed/v1/place?q=place_id:${placeId}&key=AIzaSyDIzUkXUVqBbckd6UUaZ_puok0OwsdCdhM`} />
                    </AspectRatio>
                  </Box>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        );
      })
      }
    </Box>
  );
};

export default RestaurantPosts;