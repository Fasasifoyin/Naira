/* eslint-disable react/prop-types */
import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import { parseISO } from "date-fns";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";

const Grid = ({ trending }) => {
  return (
    <>
      <SimpleGrid
        pt={10}
        columns={[2, null, 3]}
        spacing="43px"
        className="hover"
      >
        {trending.map((url, index) => {
          const date = parseISO(url.created_at);
          const time1 = date.getHours();
          const time2 = date.getMinutes();
          const time3 = date.getSeconds();
          const day = date.getDay();
          const year = date.getFullYear();
          const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];
          const month = date.getMonth();

          console.log(trending);

          return (
            <>
              <Box key={url.id}>
                <Box
                  h={"212px"}
                  w={"100%"}
                  pos={"relative"}
                  className="image-container"
                >
                  <Image
                    src={url.images[0].image_url}
                    objectFit={"cover"}
                    h={"100%"}
                    w={"100%"}
                  />
                  <div className="hover-text">
                    <div>
                      {months[month]} {day}, {year} / <a href="#">{url.tags}</a>
                    </div>
                    <div>
                      {url.story.length > 30
                        ? `${url.story.slice(0, 20)}...`
                        : url.story}
                    </div>
                    <Link to={`/${url.id}`}>
                      <button>READ MORE</button>
                    </Link>
                  </div>
                </Box>
                <Box mt={"10px"}>
                  <div>
                    <Flex style={{ gap: "10px" }}>
                      <Flex>{Math.floor(Math.random() * 50)}</Flex>
                      <Flex style={{ gap: "5px", alignItems: "center" }}>
                        {" "}
                        {Math.floor(Math.random() * 3000)} <BsEye />
                      </Flex>
                      <Flex>
                        {time1}:{time2}
                      </Flex>
                    </Flex>
                  </div>
                  <Flex style={{ justifyContent: "space-between" }}>
                    <Box>({url.tags}) </Box>
                    <i>{url.creator.username}</i>
                  </Flex>
                </Box>
                {/* <Box>
                <img style={{height:"150px"}}  />
                <h1>ytsyrs</h1>
                </Box> */}
              </Box>
            </>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default Grid;
