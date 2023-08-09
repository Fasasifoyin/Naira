/* eslint-disable react/prop-types */
import {
  Flex,
  Image,
  Box,
  Icon,
  Text,
  Spacer,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ImageSlider = ({ slides }) => {
  const timerRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const goToNext = useCallback(() => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  }, [current, slides]);

  const goToPrevious = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 5000);

    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  return (
    <Box overflow={"hidden"} h={"100%"}>
      <Flex
        w={`${100 * slides.length}%`}
        h={"100%"}
        transform={`translateX(${-(current * 33.33333333333333)}%)`}
        transition={`transform ease-out 1s`}
      >
        {slides.map((each, index) => (
          <Box key={each.id} w={"100%"} position={"relative"}>
            <Image
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
              src={each?.images[0]?.image_url}
            />
            <Flex
              align={"center"}
              pos={"absolute"}
              top={"50%"}
              left={"50%"}
              transform={"translate(-50%, -50%)"}
              justify={"space-between"}
              width={"100%"}
              maxWidth={"1240px"}
              px={{ base: "20px", lg: "0px" }}
            >
              <Icon
                boxShadow={"0px 0px 5px rgb(0,0,0,0.1)"}
                onClick={goToPrevious}
                color={"white"}
                as={AiOutlineLeft}
                boxSize={{ lg: 20, base: 14 }}
                className="cursor"
                mr={{ lg: "20px" }}
              />
              <Box
                width={{ lg: "500px" }}
                opacity={current === index ? 1 : 0}
                transition={
                  current === index
                    ? "opacity ease-in-out 1.1s"
                    : "opacity ease-in-out 0.8s"
                }
              >
                <Text
                  fontSize={"20px"}
                  textShadow={"0px 0px 5px black"}
                  color={"white"}
                >
                  {each.tags}
                </Text>
                <Heading
                  textShadow={"0px 0px 5px black"}
                  color={"white"}
                  fontSize={{ base: "26px", md: "32px", lg: "48px" }}
                >
                  {each.title.length > 50
                    ? `${each.title.slice(0, 50)}...`
                    : each.title}
                </Heading>
                <Link to={`/${each.id}`}>
                  <Button mt={"10px"} color={"white"} bg={"black"}>
                    Read More
                  </Button>
                </Link>
              </Box>
              <Spacer display={{ base: "none", lg: "block" }} />
              <Icon
                boxShadow={"0px 0px 5px rgb(0,0,0,0.1)"}
                onClick={() => goToNext()}
                color={"white"}
                as={AiOutlineRight}
                boxSize={{ lg: 20, base: 14 }}
                className="cursor"
              />
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default ImageSlider;
