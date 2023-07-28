import { Box, Flex, Heading } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const Logo = () => {
  return (
    <Flex>
      <Box pos={"relative"}>
        <Heading as={"span"} fontSize={"2.7em"} color={"#175616"}>
          N
        </Heading>
        <Flex
          direction={"column"}
          gap={"4px"}
          pos={"absolute"}
          top={"54%"}
          left={"0px"}
          transform={"translateY(-50%)"}
        >
          <Box width={"36px"} h={"5px"} bg={"#175616"} />
          <Box width={"36px"} h={"5px"} bg={"#175616"} />
        </Flex>
      </Box>
      <Heading as={"span"} fontSize={"2.7em"} color={"#175616"}>
        airaland
      </Heading>
    </Flex>
  );
};

export default Logo;
