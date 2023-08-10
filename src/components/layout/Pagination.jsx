import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Pagination = ({ totalPages, newPage, route, initial }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  const page = Number(newPage);
  // const [active, setActive] = useState(page);
  const [hover, setHover] = useState(null);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);

  const slide = (index) => {
    if (index === 4) {
      setStart((prevValue) =>
        prevValue + 4 > pages.length - 6 ? pages.length - 5 : prevValue + 3
      );
      setEnd((prevValue) =>
        prevValue + 4 > pages.length ? pages.length : prevValue + 3
      );
    } else if (index === 0) {
      setStart((prevValue) => (prevValue - 4 < 0 ? 0 : prevValue - 3));
      setEnd((prevValue) => (prevValue - 4 < 5 ? 5 : prevValue - 3));
    }
  };

  const next = () => {
    // setActive((prevValue) =>
    //   prevValue === pages.length ? prevValue : prevValue + 1
    // );
    setStart((prevValue) =>
      prevValue + 1 > pages.length - 6 ? pages.length - 5 : prevValue + 1
    );
    setEnd((prevValue) =>
      prevValue + 1 > pages.length ? pages.length : prevValue + 1
    );
  };

  const prev = () => {
    // setActive((prevValue) => (prevValue === 1 ? prevValue : prevValue - 1));
    setStart((prevValue) => (prevValue - 1 < 0 ? 0 : prevValue - 1));
    setEnd((prevValue) => (prevValue - 1 < 5 ? 5 : prevValue - 1));
  };

  return (
    <Flex gap={"8px"} align={"center"}>
      {pages.length > 5 &&
        (!page ? (
          <Box
            border={"1px solid black"}
            px={"15px"}
            py={"10px"}
            className={"notAllowed"}
            bg={"rgb(0,0,0,0.3)"}
          >
            <Text fontWeight={"medium"} fontSize={"24px"}>
              Prev
            </Text>
          </Box>
        ) : (
          <Link to={page - 1 > 1 ? `${route}/${page - 1}` : initial || route}>
            <Box
              border={"1px solid black"}
              px={"15px"}
              py={"10px"}
              onClick={() => {
                prev();
              }}
            >
              <Text fontWeight={"medium"} fontSize={"24px"}>
                Prev
              </Text>
            </Box>
          </Link>
        ))}
      <Flex gap={"8px"}>
        {pages.slice(start, end).map((each, index) => (
          <Link
            key={each}
            to={each > 1 ? `${route}/${each}` : initial || route}
          >
            <Flex
              onMouseEnter={() => setHover(each)}
              onMouseLeave={() => setHover(null)}
              justify={"center"}
              align={"center"}
              className="cursor"
              bg={each === (page || 1) || each === hover ? "#175616" : ""}
              border={"1px solid black"}
              w={"40px"}
              h={"50px"}
              onClick={() => {
                slide(index);
              }}
            >
              <Text
                color={
                  each === (page || 1) || each === hover ? "white" : "black"
                }
                fontWeight={"medium"}
                fontSize={"24px"}
              >
                {each}
              </Text>
            </Flex>
          </Link>
        ))}
      </Flex>
      {pages.length > 5 &&
        (page === pages.length ? (
          <Box
            border={"1px solid black"}
            px={"15px"}
            py={"10px"}
            className={"notAllowed"}
            bg={"rgb(0,0,0,0.3)"}
          >
            <Text fontWeight={"medium"} fontSize={"24px"}>
              Next
            </Text>
          </Box>
        ) : (
          <Link to={`${route}/${page ? page + 1 : 2}`}>
            <Box
              border={"1px solid black"}
              px={"15px"}
              py={"10px"}
              onClick={() => {
                next();
              }}
            >
              <Text fontWeight={"medium"} fontSize={"24px"}>
                Next
              </Text>
            </Box>
          </Link>
        ))}
    </Flex>
  );
};

export default Pagination;
