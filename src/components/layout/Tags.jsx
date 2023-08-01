/* eslint-disable react/prop-types */
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { MdOutlineCancel } from "react-icons/md";
import { toast } from "react-hot-toast";
import { tagsList } from "../../utils/Tags";
import { GrFormAdd } from "react-icons/gr";
import { useState } from "react";

const Tags = ({ tags, setTags }) => {
  const addToTag = (value) => {
    if (tags.length >= 4) {
      return toast.error("Maximum of 4 tags");
    } else if (tags.includes(value)) {
      return toast.error("Tag included already");
    } else {
      setTags((prevValue) => [...prevValue, value]);
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((each, i) => i !== index));
  };

  const [numberShown, setNumberShown] = useState(9);
  const length = tagsList.length;

  const increaseNumberShown = () => {
    const number = length - numberShown;
    setNumberShown(number < 9 ? numberShown + number : numberShown + 9);
  };

  const viewLess = () => {
    setNumberShown(9);
  };

  return (
    <Box>
      <Box
        mb={"50px"}
        px={"20px"}
        display={"flex"}
        alignItems={"center"}
        flexWrap={"wrap"}
        width={"100%"}
        minH={"77px"}
        border={tags.length ? "2px solid #1B481D" : "1px solid #80A17B"}
        borderRadius={"10px"}
        gap={"20px"}
        py={"10px"}
        cursor={""}
        borderColor={tags.length && "#1B481D"}
      >
        {tags.length ? (
          tags.map((each, index) => (
            <Flex
              align={"center"}
              gap={"10px"}
              key={index}
              p={"12px"}
              bg={"#80A17B"}
              borderRadius={"5px"}
            >
              <Text color={"white"}>{each}</Text>
              <Icon
                onClick={() => removeTag(index)}
                boxSize={6}
                className="cursor"
                as={MdOutlineCancel}
              />
            </Flex>
          ))
        ) : (
          <Text
            as={"p"}
            color={"rgb(0,0,0,0.5)"}
            fontWeight={"medium"}
            fontSize={"24px"}
          >
            Maximum of 4 tags
          </Text>
        )}
      </Box>
      <Box mb={"34px"} p={"20px"} bg={"#F6F5EC"} borderRadius={"5px"}>
        <Flex gap={{ lg: "60px", base: "30px" }} flexWrap={"wrap"}>
          {tagsList.slice(0, numberShown).map((each, index) => (
            <Flex
              align={"center"}
              gap={"15px"}
              bg={tags.includes(each) ? "#80A17B" : "#EDEFE4"}
              key={index}
              paddingLeft={"10px"}
              paddingRight={"40px"}
              py={"5px"}
            >
              <Text
                as={"p"}
                color={tags.includes(each) ? "white" : "#175616"}
                fontSize={{ lg: "30px", base: "20px" }}
              >
                {each}
              </Text>
              <Icon
                onClick={() => addToTag(each)}
                className="cursor"
                as={GrFormAdd}
                boxSize={8}
                color={"#175616"}
              />
            </Flex>
          ))}
        </Flex>
      </Box>
      <Box
        border="2px solid #1B481D"
        width={"max-content"}
        px={{ lg: "30px", base: "15px" }}
        py={{ lg: "17px", base: "12px" }}
        borderRadius={"10px"}
        className="cursor"
        onClick={numberShown === length ? viewLess : increaseNumberShown}
      >
        <Text fontWeight={"medium"} fontSize={{ lg: "24px", base: "18px" }}>
          {numberShown === length ? "View Less Tags" : "Show More Tags"}
        </Text>
      </Box>
    </Box>
  );
};

export default Tags;
