import { useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import { sliders } from "../../utils/data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const next = () => {
    setSlideIndex(slideIndex === sliders.length - 1 ? 0 : slideIndex + 1);
  };

  setTimeout(next, 5000);

  return (
    <>
      {sliders.map((each, index) => (
        <Box
          key={each._id}
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
      ))}
    </>
  );
};

export default Slider;
