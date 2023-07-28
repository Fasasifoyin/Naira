import { Box, Flex } from "@chakra-ui/react";
import Logo from "../Logo";
import Slider from "./Slider";

// eslint-disable-next-line react/prop-types
const AccountLayout = ({ children }) => {
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
            <Logo />
          </Box>
          {children}
        </Box>
      </Flex>
      <Box h={{ lg: "100vh" }} w={"50%"} hideBelow={"lg"} pos={"relative"}>
        <Slider />
      </Box>
    </Flex>
  );
};

export default AccountLayout;
