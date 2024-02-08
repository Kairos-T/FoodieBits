// By: Wayne
import { Heading, Box, Text } from "@chakra-ui/react";

const CuisineComponent = ({array}) => {
  return (
    <Box>
      {array.map((location, index) => (
        <div key={index}>
          <Heading as="h3" fontSize="3xl" fontWeight="700" mt={5}                 _hover={{ color: "telegram.600", transition: "color 0.3s ease-in-out" }}
          >
            {location.name}
          </Heading>
          <Text>{location.content}</Text>
          <Text>
            {location.funFact.map((fact, i) => (
              <Text key={i}>{fact}</Text>
            ))}
          </Text>
        </div>
      ))}
    </Box>
  );
};

export default CuisineComponent;