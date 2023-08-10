/* eslint-disable react/prop-types */
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { parseISO } from "date-fns";
import { Link } from "react-router-dom";


const BlogCard = ({ index, each }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = parseISO(each.created_at);
  const year = date.getFullYear().toString();
  let month = date.getMonth();
  month = months[month];
  const day = date.getDay().toString();
  const hour = date.getHours().toString();
  const minute = date.getMinutes().toString();

  return (
    <Box
      className={
        index === 0
          ? "zero"
          : index === 1
          ? "one"
          : index === 2
          ? "two"
          : index === 3
          ? "three"
          : index === 4
          ? "four"
          : "five"
      }
    >
      <Link to={`/${each.id}`}>
        <Box
          overflow={"hidden"}
          h={{ md: "calc(100% - 220px)", base: "280px" }}
        >
          <Image
            transition={"200ms"}
            _hover={{ transform: "scale(1.3)" }}
            borderRadius={"10px"}
            w={"100%"}
            h={"100%"}
            objectFit={"cover"}
            src={each.images[0].image_url}
          />
        </Box>
      </Link>
      <Flex
        px={"10px"}
        pt={"20px"}
        direction={"column"}
        justify={"space-between"}
        height={{ lg: "220px" }}
      >
        <Flex justify={"space-between"}>
          <Text
            fontSize={"15px"}
            fontWeight={"medium"}
            textTransform={"uppercase"}
          >
            {month} {day}, {year} / {each.tags}
          </Text>
          <Text fontSize={"15px"} fontWeight={"medium"}>
            {hour > 12 ? hour % 12 : hour}:
            {minute.length > 1 ? minute : `0${minute}`}
            {hour >= 12 ? "pm" : "am"}
          </Text>
        </Flex>
        <Text fontSize={"22.5px"} fontWeight={"bold"}>
          {each.title.length > 45
            ? `${each.story.slice(0, 45)}...`
            : each.title}
        </Text>
        <Text fontSize={"15px"}>{each.story.slice(0, 120)}...</Text>
        <Link
          style={{ fontSize: "14px", fontWeight: "bold" }}
          to={`/${each.id}`}
        >
          READ MORE
        </Link>
      </Flex>
    </Box>
  );
};

export default BlogCard;
