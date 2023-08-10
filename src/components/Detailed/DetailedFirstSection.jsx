/* eslint-disable react/prop-types */
import { parseISO } from "date-fns";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

const DetailedFirstSection = ({ blog }) => {
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
  const date = parseISO(blog.created_at);
  const year = date.getFullYear().toString();
  let month = date.getMonth();
  month = months[month];
  const day = date.getDay().toString();

  return (
      <Box mb={"60px"}>
        <Box
          h={{ md: "600px", base: "500px" }}
          mb={"18px"}
          className="cursor"
        >
          <Image
            w={"100%"}
            h={"100%"}
            objectFit={"cover"}
            src={blog.images[0].image_url}
            borderRadius={"4px"}
          />
        </Box>
        <Text
          mb={"24px"}
          fontSize={"28px"}
          fontWeight={"medium"}
          textTransform={"uppercase"}
        >
          {month} {day}, {year} / {blog.tags}
        </Text>
        <Heading mb={"24px"}>{blog.title}</Heading>
        <Text fontSize={"15px"} mb={"30px"}>
          {blog.story}
        </Text>
      </Box>
  );
};

export default DetailedFirstSection;
