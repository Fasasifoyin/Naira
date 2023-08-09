/* eslint-disable react/prop-types */
import { Box, Flex, Icon, Input } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

const Seearch = ({ bgColor, border }) => {
  return (
    <Box px={"15px"}>
      <Flex
        align={"center"}
        w={"100%"}
        h={{ md: "4.8rem", base: "3.7rem" }}
        bg={bgColor}
        px={{ md: "25px", base: "15px" }}
        mb={"30px"}
        border={border ? { md: "2px solid black" } : ""}
        boxShadow={border ? { md: "0px 4px rgba(0,0,0,0.2)" } : ""}
      >
        <Box
          position={"relative"}
          height={{ md: "2.9rem", base: "2.5rem" }}
          width={{ base: "100%", lg: "80%" }}
        >
          <Input
            paddingTop={"7px"}
            placeholder="Search"
            paddingLeft={"60px"}
            bg={"white"}
            focusBorderColor={"#1B481D"}
            borderRightRadius={{ md: "0px", base: "10px" }}
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
    </Box>
  );
};

export default Seearch;
