import { Box, Button, Flex, Icon, Input, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { FiSearch } from "react-icons/fi";
import { tagsList } from "../utils/Tags";
import { useEffect, useState } from "react";
import Categories from "../components/Detailed/Categories";
import { Formik, Form } from "formik";
import { commentValidation } from "../components/formik/FormikValidation";

import { useDispatch, useSelector } from "react-redux";
import { Blog, Status, Error } from "../app/Slice/DetailedSlice";
import { getSingle } from "../app/actions/Blogs";
import DetailedFirstSection from "../components/Detailed/DetailedFirstSection";
import FormikControl from "../components/formik/FormikControl";

const DetailedPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const blog = useSelector(Blog);
  const status = useSelector(Status);
  const error = useSelector(Error);
  console.log(blog)

  useEffect(() => {
    dispatch(getSingle(id));
  }, [dispatch, id]);

  useEffect(() => {
    setCategories(
      [...tagsList].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 8)
    );
  }, []);

  const initialValues = {
    comment: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

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
        <Box width={{ base: "100%", lg: "67%" }}>
          {status === "failed" && <Text>{error}</Text>}
          <Box>
            {status === "pending" && <Text>Loading...</Text>}
            {status === "success" &&
              (blog.title ? (
                <Box>
                  <DetailedFirstSection blog={blog} />
                  <Box hideFrom={"lg"} mb={{ base: "25px", lg: "0px" }}>
                    <Text mb={"15px"} fontWeight={"bold"} fontSize={"20px"}>
                      Categories
                    </Text>
                    <Categories categories={categories} />
                  </Box>
                  {blog?.title && (
                    <Box>
                      <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={commentValidation}
                      >
                        {() => (
                          <Form>
                            <Box mb={"40px"}>
                              <FormikControl
                                control="Textarea"
                                name="comment"
                                label="Comment"
                              />
                            </Box>
                            <Button
                              type="submit"
                              width={"229px"}
                              height={"50px"}
                              bg={"#175616"}
                              color={"#E8ECE0"}
                              fontWeight={"medium"}
                              fontSize={"20px"}
                              borderRadius={"5px"}
                            >
                              SEND COMMENT
                            </Button>
                          </Form>
                        )}
                      </Formik>
                    </Box>
                  )}
                </Box>
              ) : (
                <Text
                  fontWeight={"bold"}
                  fontStyle={"italic"}
                  fontSize={"25px"}
                  mb={"150px"}
                >
                  This page does not exist
                </Text>
              ))}
          </Box>
        </Box>
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
