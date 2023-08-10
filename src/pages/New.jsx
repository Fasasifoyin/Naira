import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import { useDispatch, useSelector } from "react-redux";
import { getNew } from "../app/actions/Blogs";
import {
  New as NewBlogs,
  Error,
  Status,
  TotalPages,
} from "../app/Slice/NewSlice";
import { useEffect, useState } from "react";
import ImageSlider from "../components/New/ImageSlider";
import BlogCard from "../components/New/BlogCard";
import { useParams } from "react-router-dom";
import Pagination from "../components/layout/Pagination";

const New = () => {
  const { newPage } = useParams()
  const dispatch = useDispatch();
  const [sliderImages, setSliderImages] = useState([]);
  const newBlogs = useSelector(NewBlogs);
  const error = useSelector(Error);
  const status = useSelector(Status);
  const total = useSelector(TotalPages);
  console.log(status);
  console.log(newBlogs, total);
  console.log(error);

  console.log(sliderImages, "213344");

  useEffect(() => {
    dispatch(getNew(newPage || 1));
  }, [dispatch, newPage]);

  useEffect(() => {
    if (newBlogs.length > 0) {
      setSliderImages(
        [...newBlogs].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 3)
      );
    }
  }, [newBlogs]);

  return (
    <>
      <Navbar button logo text={"white"} activeText={"white"} textShadow />
      <Box pos={"absolute"} top={"0"} left={"0"} w={"100%"}>
        <Box
          bg={"papayawhip"}
          mb={"100px"}
          w={"100%"}
          h={{ md: "590px", base: "400px" }}
        >
          <ImageSlider slides={sliderImages} />
        </Box>
        <Box mb={"100px"} className="cc-container page_alignment">
        <Box  className="grid" mb={"30px"}>
          {status === "success" &&
            newBlogs.map((each, index) => (
              <BlogCard key={each.id} index={index} each={each} />
            ))}
        </Box>
        <Flex justifyContent={"center"}>
            <Box>
              <Pagination totalPages={total} newPage={newPage} route={"/new"} />
            </Box>
          </Flex>
        </Box>
   
        <Footer />
      </Box>
    </>
  );
};

export default New;
