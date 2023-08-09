import { Box, Flex, Icon, Input, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { FiSearch } from "react-icons/fi";
import { tagsList } from "../utils/Tags";
import { useEffect, useState } from "react";
import Categories from "../components/Detailed/Categories";

import { useDispatch, useSelector } from "react-redux";
import { Blog, Status, Error } from "../app/Slice/DetailedSlice";
import { getSingle } from "../app/actions/Blogs";

const DetailedPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const [categories, setCategories] = useState([]);
  const blog = useSelector(Blog)
  const status = useSelector(Status)
  const error = useSelector(Error)
  console.log(blog)
  console.log(status)

  useEffect(() => {
    dispatch(getSingle(id))
  }, [dispatch, id])

  useEffect(() => {
    setCategories(
      [...tagsList].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 8)
    );
  }, []);

  return (
    <Box>
      <Box mb={"60px"} bg={"#175616"}>
        <Navbar logo text={"white"} button />
      </Box>
      <Flex
        mb={"100px"}
        className="page_alignment cc-container"
        direction={{ base: "column-reverse", lg: "row" }}
        gap={"60px"}
      >
        <Box width={{ base: "100%", lg: "67%" }}></Box>
        <Box width={{ base: "100%", lg: "25%" }}>
          <Flex h={"40px"} mb={{ lg: "150px" }}>
            <Input
              borderColor={"rgba(0,0,0, 0.5)"}
              h={"100%"}
              bg={"white"}
              focusBorderColor={"#1B481D"}
              borderRightRadius={"0px"}
              borderLeftRadius={"7px"}
              width={"85%"}
              type="text"
              placeholder="Search"
            />
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRightRadius={"7px"}
              h={"100%"}
              width={"15%"}
              bg={"#175616"}
            >
              <Icon color={"white"} boxSize={5} as={FiSearch} />
            </Box>
          </Flex>
          <Box hideBelow={"lg"} mb={{ base: "25px", lg: "0px" }}>
            <Text mb={"15px"} fontWeight={"bold"} fontSize={"20px"}>
              Categories
            </Text>
            <Categories categories={categories} />
          </Box>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default DetailedPage;
