/* eslint-disable react/prop-types */
import { useState } from "react";
import { Box, Image} from "@chakra-ui/react";
import Slider from "react-slick";


export function TopSlider ({trending}) {
  const [slider, setSlider] = useState(null);


  const settings = {
    // dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Box
        position={"relative"}
        height={"25em"}
        width={"100%"}
        border={"2px solid green"}
        // overflow={'hidden'}
        
      >
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {trending.slice(0,3).map((url, index) => (
        <Box key={url.id} w={"100%"} h={"25em"}>
            <Image w={"100%"} h={"100%"} objectFit={"cover"} src={url.images[0].image_url}/>
        </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}