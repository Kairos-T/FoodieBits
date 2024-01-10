import { Image, Skeleton } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";

export default function ImageCarousel({ images, className, imageHeight }) {
  return (
    <Carousel
      className={className}
      arrows
      infinite
      responsive={{
        anything: {
          breakpoint: {
            max: 3000, min: 0
          },
          items: 1
        }
      }}>
      {
        images.map(image => {
          return <Image key={image} src={image} alt={image} width="full" height={imageHeight} objectFit="cover"
                        backgroundPosition="center" fallback={<Skeleton width="full" height={imageHeight} />} />;
        })
      }
    </Carousel>
  );
}