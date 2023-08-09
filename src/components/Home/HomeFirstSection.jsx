import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import Seearch from "../layout/Seearch";

const HomeFirstSection = () => {
  return (
    <Box
      mb={"60px"}
      h={{ lg: "47.875rem", base: "26rem", md: "34rem" }}
      pos={"relative"}
    >
      <Image
        w={"100%"}
        h={"100%"}
        objectFit={"cover"}
        src={
          "https://res.cloudinary.com/dbxvk3apv/image/upload/v1690883989/Nairaland/Group_9260_fdgmby.png"
        }
      />
      <Flex
        bg={"rgb(246,246,236, 0.5)"}
        pos={"absolute"}
        top={"0"}
        left={"0"}
        w={"100%"}
        h={{ lg: "47.875rem", base: "26rem", md: "34rem" }}
        justify={"center"}
        align={"center"}
      >
        <Box>
          <Heading
            textAlign={"center"}
            as={"h1"}
            fontSize={{ base: "26px", md: "32px", lg: "48px" }}
            fontWeight={"regular"}
          >
            Welcome To Nairaland Forum
          </Heading>
          <Heading
            textAlign={"center"}
            as={"h2"}
            fontSize={{ base: "16px", md: "20px", lg: "24px" }}
            fontWeight={"regular"}
          >
            We give the verified breaking news and current news
          </Heading>
        </Box>
      </Flex>
      <Box pos={"absolute"} width={"100%"} bottom={{ base: "2%", lg: "14%" }}>
        <Box className="page_alignment cc-container">
          <Seearch border bgColor={"rgb(255,255,255,0.2)"} />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeFirstSection;
