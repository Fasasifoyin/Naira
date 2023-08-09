/* eslint-disable react/prop-types */
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <Flex flexWrap={"wrap"} gap={"20px"}>
      {categories.map((each) => (
        <Link key={each} to={`/blogs/tags?tag=${each}`}>
          <Box
            className="cursor"
            borderRadius={"5px"}
            py={"10px"}
            px={"15px"}
            border={"1px solid #175616"}
          >
            <Text>{each}</Text>
          </Box>
        </Link>
      ))}
    </Flex>
  );
};

export default Categories;
