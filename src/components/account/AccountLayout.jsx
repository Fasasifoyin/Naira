import { Box, Flex } from "@chakra-ui/react";
import Logo from "../Logo";
import Slider from "./Slider";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AccountLayout = ({ children, sliders }) => {
  return (
    <Flex>
      <Flex
        h={{ lg: "100vh" }}
        overflowY={{ lg: "scroll" }}
        minH={"100vh"}
        w={{ base: "100%", lg: "50%" }}
        className="scrollbody"
      >
        <Box
          margin={"auto"}
          width={"100%"}
          maxW={"504px"}
          px={"15px"}
          py={"30px"}
        >
          <Box mb={"50px"}>
            <Link to="/">
              <Logo
                color={"#175616"}
                gap={"4px"}
                fs={"2.7em"}
                width={"34px"}
                height={"5px"}
              />{" "}
            </Link>
          </Box>
          {children}
        </Box>
      </Flex>
      <Box h={{ lg: "100vh" }} w={"50%"} hideBelow={"lg"} pos={"relative"}>
        <Slider sliders={sliders} />
      </Box>
    </Flex>
  );
};

export default AccountLayout;
