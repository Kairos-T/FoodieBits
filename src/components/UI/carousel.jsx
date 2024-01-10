import { Image, Skeleton } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ImageCarousel({ images, imageHeight, ...props }) {
  return (
    <Carousel
      arrows
      infinite
      responsive={{
        anything: {
          breakpoint: {
            max: 3000, min: 0
          },
          items: 1
        }
      }}
      {...props}
    >
      {
        images.map(image => {
          return <Image key={image} src={image} alt={image} width="full" height={imageHeight} objectFit="cover"
                        backgroundPosition="center" fallback={<Skeleton width="full" height={imageHeight} />} />;
        })
      }
    </Carousel>
  );
}