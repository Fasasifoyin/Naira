import React, { useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const Slider = ({ sliders }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const next = () => {
    // eslint-disable-next-line react/prop-types
    setSlideIndex(slideIndex === sliders.length - 1 ? 0 : slideIndex + 1);
  };

  setTimeout(next, 5000);

  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      {sliders.map((each, index) => (
        <React.Fragment key={each._id}>
          <Box
            w={"100%"}
            h={"100%"}
            className={slideIndex === index ? "slide-active" : "slide"}
          >
            <Image
              objectFit={"cover"}
              w={"100%"}
              h={"100%"}
              src={each.image}
              alt={each._id}
            />
          </Box>
          <Box
            width={"70%"}
            h={"70%"}
            display={"flex"}
            alignItems={"center"}
            className={
              slideIndex === index ? "slide-text-active" : "slide-text-box"
            }
          >
            <Text fontSize={"36px"} color={"white"}>
              {each.text}
            </Text>
          </Box>
        </React.Fragment>
      ))}
    </>
  );
};

export default Slider;
