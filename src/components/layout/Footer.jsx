import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    Icon,
    Text,
  } from "@chakra-ui/react";
  import Logo from "../Logo";
  import {
    BiLogoFacebook,
    BiLogoInstagramAlt,
    BiLogoTwitter,
  } from "react-icons/bi";
  import { tagsList } from "../../utils/Tags";
  import { Link } from "react-router-dom";
  import { AiOutlineHeart } from "react-icons/ai";
  
  const Footer = () => {
    return (
      <Flex
      overflowY={"scroll"}
        align={"end"}
        h={{ lg: "40.625rem" }}
        bg={"black"}
        py={{ base: "50px", lg: "0" }}
        className="scrollbody"
      >
        <Flex
          justify={{ lg: "space-between" }}
          direction={"column"}
          className="cc-container page_alignment"
          h={{ lg: "90%" }}
          mb={{ lg: "10px" }}
        >
          <Grid
            templateColumns={"repeat(9, 1fr)"}
            gap={6}
            mb={{ base: "60px", lg: "0px" }}
          >
            <GridItem colSpan={{ base: "9", lg: "6" }}>
              <Grid templateColumns={"repeat(15, 1fr)"} gap={6}>
                <GridItem colSpan={{ base: "15", lg: "4" }}>
                  <Flex
                    direction={"column"}
                    gap={"20px"}
                    align={{ base: "center", lg: "start" }}
                  >
                    <Logo
                      gap={"5px"}
                      color={"#175616"}
                      fs={"2.69rem"}
                      width={"33.5px"}
                      height={"5px"}
                    />
                    <Text
                      textAlign={{ base: "center", lg: "start" }}
                      fontSize={"20px"}
                      color={"white"}
                    >
                      Nairaland is Africa’s largest discussion forum and Nigeria’s
                      most popular website for the latest news across Africa,
                      Created by Oluwaseun Osewa.
                    </Text>
                    <Flex gap={6}>
                      <Icon  color={"white"} as={BiLogoFacebook} boxSize={7} _hover={{color:"#175616"}} />
                      <Icon color={"white"} as={BiLogoInstagramAlt} boxSize={7} _hover={{color:"#175616"}} />
                      <Icon color={"white"} as={BiLogoTwitter} boxSize={7} _hover={{color:"#175616"}} />
                    </Flex>
                  </Flex>
                </GridItem>
  
                <GridItem colSpan={{ base: "15", lg: "5" }}>
                  <Flex
                    direction={"column"}
                    gap={"20px"}
                    align={{ base: "center", lg: "start" }}
                  >
                    <Heading
                      fontSize={"20px"}
                      fontWeight={"bold"}
                      color={"white"}
                    >
                      Latest
                    </Heading>
                  </Flex>
                </GridItem>
                <GridItem colSpan={{ base: "15", lg: "6" }}>
                  <Flex
                    direction={"column"}
                    gap={"20px"}
                    align={{ base: "center", lg: "start" }}
                  >
                    <Heading
                      fontSize={"20px"}
                      fontWeight={"bold"}
                      color={"white"}
                    >
                      Tags
                    </Heading>
                    <Flex
                      justify={{ base: "center", lg: "start" }}
                      flexWrap={"wrap"}
                      gap={"3px"}
                    >
                      {tagsList.map((each, index) => (
                        <Link to={`/blogs/tags?tag=${each}`} key={index}>
                          <Text
                            fontSize={"14px"}
                            color={"white"}
                            _hover={{ color: "#175616" }}
                          >
                            {each}
                            {index === tagsList.length - 1 ? "." : ","}{" "}
                          </Text>
                        </Link>
                      ))}
                    </Flex>
                  </Flex>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem
              border={"1px solid white"}
              colSpan={{ base: "9", lg: "3" }}
            ></GridItem>
          </Grid>
  
          <Box>
            <Flex
              mb={"20px"}
              pos={"relative"}
              h={"28.28px"}
              align={"center"}
              justify={"center"}
            >
              <Box border={"1px solid white"} w={"100%"} />
              <Box
                className="rotate"
                bg={"white"}
                width={"20px"}
                h={"20px"}
                pos={"absolute"}
                left={"50%"}
                top={"10.28px"}
                transform={"translateX(-50%)"}
              />
            </Flex>
            <Flex justify={"center"} gap={3} align={"center"}>
              <Text color={"white"} fontSize={"14px"}>
                Thanks for the visit
              </Text>
              <Flex align={"center"} gap={2}>
                <Icon color={"white"} as={AiOutlineHeart} boxSize={5} />
                <Logo
                  gap={"1.5px"}
                  color={"white"}
                  fs={"15px"}
                  width={"12px"}
                  height={"2px"}
                />
              </Flex>
            </Flex>
            <Text fontSize={"14px"} textAlign={"center"} color={"white"}>
              Copyright &copy; 2005 - 2023 Oluwaseun Osewa. All Rights Reserved
            </Text>
            <Text fontSize={"14px"} textAlign={"center"} color={"white"}>
              <Text as={"span"} fontWeight={"bold"}>
                Disclaimer
              </Text>
              : Every Nairaland member is solely responsible for anything that
              he/she posts or uploads on Nairaland.
            </Text>
          </Box>
        </Flex>
      </Flex>
    );
  };
  
  export default Footer;
  