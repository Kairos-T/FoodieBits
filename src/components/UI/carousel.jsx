import { Image, Skeleton } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomLeftArrow = ({ onClick, ...rest }) => {
  return <button className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left" onClick={(event) => {
    event.stopPropagation();
    onClick();
  }} />;
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  return <button className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right" onClick={(event) => {
    event.stopPropagation();
    onClick();
  }} />;
};

export default function ImageCarousel({ images, imageHeight, ...props }) {
  return (
    <Carousel
      arrows
      infinite
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
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