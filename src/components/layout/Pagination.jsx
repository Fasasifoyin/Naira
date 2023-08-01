import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Pagination = ({ totalPages, setPage }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  const [active, setActive] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);

  const slide = (index) => {
    if (index === 4) {
      setStart((prevValue) =>
        prevValue + 4 > pages.length - 6 ? pages.length - 5 : prevValue + 4
      );
      setEnd((prevValue) =>
        prevValue + 4 > pages.length ? pages.length : prevValue + 4
      );
    } else if (index === 0) {
      setStart((prevValue) => (prevValue - 4 < 0 ? 0 : prevValue - 4));
      setEnd((prevValue) => (prevValue - 4 < 5 ? 5 : prevValue - 4));
    }
  };

  const next = () => {
    setActive((prevValue) =>
      prevValue === pages.length ? prevValue : prevValue + 1
    );
    setStart((prevValue) =>
      prevValue + 1 > pages.length - 6 ? pages.length - 5 : prevValue + 1
    );
    setEnd((prevValue) =>
      prevValue + 1 > pages.length ? pages.length : prevValue + 1
    );
  };

  const prev = () => {
    setActive((prevValue) => (prevValue === 1 ? prevValue : prevValue - 1));
    setStart((prevValue) => (prevValue - 1 < 0 ? 0 : prevValue - 1));
    setEnd((prevValue) => (prevValue - 1 < 5 ? 5 : prevValue - 1));
  };

  return (
    <Flex gap={"8px"}>
      {pages.length > 5 && (
        <Box
          border={"1px solid black"}
          px={"15px"}
          py={"10px"}
          className={active === 1 ? "notAllowed" : "cursor"}
          onClick={() => {
            prev();
          }}
          bg={active === 1 ? "rgb(0,0,0,0.3)" : ""}
        >
          <Text fontWeight={"medium"} fontSize={"24px"}>
            Prev
          </Text>
        </Box>
      )}
      <Flex gap={"8px"}>
        {pages.slice(start, end).map((each, index) => (
          <Box
            className="cursor"
            bg={each === active ? "#175616" : ""}
            key={index}
            border={"1px solid black"}
            px={"15px"}
            py={"10px"}
            onClick={() => {
              setActive(each);
              slide(index);
              //setPage(each);
            }}
          >
            <Text
              color={each === active ? "white" : "black"}
              fontWeight={"medium"}
              fontSize={"24px"}
            >
              {each}
            </Text>
          </Box>
        ))}
      </Flex>
      {pages.length > 5 && (
        <Box
          border={"1px solid black"}
          px={"15px"}
          py={"10px"}
          className={active === pages.length ? "notAllowed" : "cursor"}
          onClick={() => {
            next();
          }}
          bg={active === pages.length ? "rgb(0,0,0,0.3)" : ""}
        >
          <Text fontWeight={"medium"} fontSize={"24px"}>
            Next
          </Text>
        </Box>
      )}
    </Flex>
  );
};

export default Pagination;
