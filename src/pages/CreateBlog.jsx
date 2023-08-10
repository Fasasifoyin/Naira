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
  Text,
  Textarea,
} from "@chakra-ui/react";
import Tags from "../components/CreateBlog/Tags";
import { Formik, Form, Field } from "formik";
// import AddImage from "../components/CreateBlog/AddImage";
import { createValidation } from "../components/formik/FormikValidation";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { create } from "../app/actions/Blogs";
import { convertImageToBase64 } from "../utils/Convert"

const CreateBlog = () => {
  const [tags, setTags] = useState('');
  const [files, setFiles] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    title: "",
    body: "",
  };




  const onSubmit = async (values) => {
    const { title, body } = values;

    if (tags.length === 0) {
      return toast.error("Please select a tag");
    }

    const anyForm = new FormData()
    anyForm.append("tags", tags)
    anyForm.append("images", files)
    anyForm.append("story", body)
    anyForm.append("title", title)
    // if (files.length < 1) {
    //   return toast.error("Please select at least one image");
    // }

    console.log(files)

    // let images = []

    // for (let i = 0; i < files.length; i++) {
    //   const base64 = await convertImageToBase64(files[i])
    //   images.push(base64)
    // }


    // let arr = []
    // try {
    //   for (let i = 0; i < images.length; i++) {
    //     const upload = await uploadCloudinary(images[i])
    //     console.log('iuii', upload.data.secure_url)
    //     const url = upload.data.secure_url
    //     arr.push(url)
    //   }

    // const onUpload = async () => {
    //   let base64 = []
      
  
    // }



    // const newArray = Object.entries(files)
    // console.log(files)

    // const nextArray = newArray.flatMap(each => {
    //   if(Array.isArray(each)){
    //     return each.map(one => one.name)
    //   }
    // })

    // const images = nextArray.filter(each => each !== undefined)
    // console.log(images)

    // const formData = new FormData();
    // for (let i = 0; i < files.length; i++) {
    //   formData.append(`file${i + 1}`, files[i]);
    // }

    // let formdata = new FormData();
    // for (let i = 0; i < images.length; i++) {
    //   formdata.append(`image`, images[0]);
    // }

    // console.log(formData);

    // const filterImage = blogImages.filter((image) => image !== "");

    // const formData = {
    //   title,
    //   story: body,
    //   images: files,
    //   tags: tags.join(","),
    // };
    dispatch(create(anyForm))
  };

  return (
    <Box>
      <Navbar text={"black"} activeText={"#175616"} hover={"#175616"} />
      <Box className="page_alignment cc-container" mb={"100px"} mt={"40px"}>
        <Flex
          mb={"60px"}
          h={{ sm: "120px", lg: "160px" }}
          bg={"#F6F5EC"}
          boxShadow={"0px 5px 1px rgba(0,33,0, 0.1)"}
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
          >
            <Image w={"100%"} h={"100%"} borderRadius={"50%"} />
          </Box>
        </Flex>

        <Flex mb={"53px"} gap={"40px"} flexWrap={"wrap"}>
          <Text fontSize={"30px"} fontWeight={"medium"} color={"#999898"}>
            Explore
          </Text>
          <Text fontSize={"30px"} fontWeight={"medium"} color={"#999898"}>
            Community
          </Text>
          <Text fontSize={"30px"} fontWeight={"medium"} color={"#999898"}>
            Online stats
          </Text>
        </Flex>

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
                            Topic Headlines
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
                        <Textarea
                          placeholder="Enter Text"
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
                  <Input
                    type="file"
                    onChange={(e) => setFiles(e.target.files[0])}
                  />
                  {/* <AddImage
                    name="images"
                    setBlogImages={setBlogImages}
                    blogImages={blogImages}
                  /> */}
                </Box>
                <Flex justify={"flex-end"}>
                  <Button
                    fontSize={"48px"}
                    fontWeight={"medium"}
                    width={"260px"}
                    h={"100px"}
                    borderRadius={"30px"}
                    bg={"#175616"}
                    color={"white"}
                    isDisabled={formik.isSubmitting}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default CreateBlog;
