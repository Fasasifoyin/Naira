import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Image,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Seearch from "../components/layout/Seearch";
import Tags from "../components/layout/Tags";
import { Formik, Form, Field } from "formik";
import AddImage from "../components/AddImage";
import { createValidation } from "../components/formik/FormikValidation";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const CreateBlog = () => {
  // const user = useSelector(User);
  const [tags, setTags] = useState([]);
  const [blogImages, setBlogImages] = useState(["", "", "", ""]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user.token) {
  //     navigate(-1);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user]);

  const initialValues = {
    title: "",
    body: "",
    images: [""],
  };

  const onSubmit = async (values, onSubmitProps) => {
    const { title, body } = values;
    const { setSubmitting } = onSubmitProps;
    setSubmitting(true);

    if (tags.length === 0) {
      return toast.error("Please select a tag");
    }

    const filterImage = blogImages.filter((image) => image !== "");

    let images = [];

    // for (let i = 0; i < filterImage.length; i++) {
    //   const upload = await handleImageUpload(filterImage[i]);
    //   const url = upload.data.secure_url;
    //   images.push(url);
    // }

    const formData = {
      title,
      body,
      images,
      tags,
      setSubmitting,
    };
  };

  return (
    <Box pb={"20px"} mt={{ base: "20px", lg: "40px" }}>
      <Box className="page_alignment cc-container">
        <Flex
          mb={"60px"}
          h={{ sm: "120px", lg: "160px" }}
          bg={"#F6F5EC"}
          boxShadow={"0px 16px 15px rgba(0,33,0, 0.6)"}
          justify={"center"}
          align={"center"}
          position={"relative"}
        >
          <Box px={"15px"} py={{ base: "15px", sm: "0px" }}>
            <Heading
              textAlign={"center"}
              fontSize={{ base: "26px", md: "32px", lg: "48px" }}
              fontWeight={"medium"}
              as={"h1"}
            >
              Welcome to Nairaland forum
            </Heading>
          </Box>

          <Box
            display={{ base: "none", lg: "block" }}
            position={"absolute"}
            w={"100px"}
            h={"100px"}
            borderRadius={"50%"}
            top={"50%"}
            transform={"translateY(-50%)"}
            right={"30px"}
         
            //     : "0px 15px rgb(0,0,0,0.2)"
          
          >
            <Image
              w={"100%"}
              h={"100%"}
              borderRadius={"50%"}
            />
          </Box>
        </Flex>
        <Seearch />
        <Box mb={"22px"}>
          <Heading
            fontSize={{ lg: "40px", md: "30px", base: "22px" }}
            fontWeight={"medium"}
            as={"h2"}
            mb={"40px"}
          >
            Topics Tags
          </Heading>
          <Tags tags={tags} setTags={setTags} />
        </Box>
        <Box>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={createValidation}
          >
            {(formik) => (
              <Form>
                <Box mb={"50px"}>
                  <Field name="title">
                    {({ field, meta }) => (
                      <FormControl isInvalid={meta.error && meta.touched}>
                        <FormLabel mb={"40px"} width={"max-content"}>
                          <Heading
                            fontSize={{ lg: "40px", md: "30px", base: "22px" }}
                            fontWeight={"medium"}
                            as={"h2"}
                          >
                            Headline
                          </Heading>
                        </FormLabel>
                        <Input
                          placeholder="Enter Headline"
                          border={"1px solid #80A17B"}
                          borderRadius={"10px"}
                          focusBorderColor="#1B481D"
                          height={"77px"}
                          fontSize={"24px"}
                          {...field}
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Box>
                <Box mb={"50px"}>
                  <Field name="body">
                    {({ field, meta }) => (
                      <FormControl isInvalid={meta.error && meta.touched}>
                       <FormLabel mb={"40px"} width={"max-content"}>
                          <Heading
                            fontSize={{ lg: "40px", md: "30px", base: "22px" }}
                            fontWeight={"medium"}
                            as={"h2"}
                          >
                            Post
                          </Heading>
                        </FormLabel>
                        <Textarea
                          placeholder="Enter Post"
                          border={"1px solid #80A17B"}
                          borderRadius={"10px"}
                          focusBorderColor="#1B481D"
                          height={"400px"}
                          fontSize={"24px"}
                          {...field}
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Box>
                <Box mb={"50px"}>
                  <AddImage
                    name="images"
                    setBlogImages={setBlogImages}
                    blogImages={blogImages}
                  />
                </Box>
                <Button isDisabled={formik.isSubmitting} type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateBlog;
