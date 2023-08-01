import { Box, Flex, Icon, Input, Text } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

const Seearch = () => {
  return (
  
      <Box px={"15px"}>
        <Flex
          align={"center"}
          w={"100%"}
          h={"4.8em"}
          bg={"#80A17B"}
          px={"25px"}
          mb={"30px"}
        >
          <Box
            position={"relative"}
            height={"2.9em"}
            width={{ base: "100%", lg: "80%" }}
          >
            <Input
              paddingTop={"7px"}
              placeholder="Search"
              paddingLeft={"60px"}
              bg={"white"}
              focusBorderColor={"#1B481D"}
              borderRightRadius={{ lg: "0px" }}
              borderLeftRadius={"10px"}
              height={"100%"}
            />
            <Icon
              boxSize={"5"}
              zIndex={"10"}
              top={"35%"}
              left={"25px"}
              pos={"absolute"}
              as={FiSearch}
              color={"#80A17B"}
            />
          </Box>
          <Box
            borderRightRadius={"10px"}
            width={"20%"}
            height={"2.9em"}
            bg={"#1B481D"}
            hideBelow={"md"}
          ></Box>
        </Flex>
        <Text mb={"53px"}>ddyd</Text>
      </Box>
  );
};

export default Seearch;
