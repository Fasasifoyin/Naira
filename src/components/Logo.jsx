import { Box, Flex, Heading } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Logo = ({ fs, width, height, color, gap }) => {
  return (
    <Flex>
      <Box pos={"relative"} h={"min-content"}>
        <Heading as={"span"} fontSize={fs} color={color}>
          N
        </Heading>
        <Flex
          direction={"column"}
          gap={gap}
          pos={"absolute"}
          top={"53%"}
          left={"0px"}
          transform={"translateY(-50%)"}
        >
          <Box width={width} h={height} bg={color} />
          <Box width={width} h={height} bg={color} />
        </Flex>
      </Box>
      <Box>
      <Heading wordBreak={"break-all"} as={"span"} fontSize={fs} color={color}>
        airaland
      </Heading>
      </Box>
    </Flex>
  );
};

//2.7em 34px 5px

export default Logo;
