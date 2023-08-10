import { useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Grid from "../components/Grid";
import { TopSlider } from "../components/TopSlider";

import { useDispatch, useSelector } from "react-redux";
import { getTrending } from "../app/actions/Blogs";
import { Trend, Error, Status, TotalPages } from "../app/Slice/TrendingSlice";
import { useParams } from "react-router-dom";
import Pagination from "../components/layout/Pagination";

const Trending = () => {
  const { trendPage } = useParams();
  const dispatch = useDispatch();
  const trending = useSelector(Trend);
  const error = useSelector(Error);
  const status = useSelector(Status);
  const total = useSelector(TotalPages);
  console.log(status);

  useEffect(() => {
    dispatch(getTrending(trendPage || 1));
  }, [dispatch, trendPage]);

  return (
    <Box>
      <Navbar text={"black"} activeText={"#175616"} hover={"#175616"} />
      {status === "failed" && <p>{error}</p>}
      <Box mb={"100px"}>
        <TopSlider trending={trending} />
      {status === "pending" && <Text mt={"20px"}>Loading...</Text>}
        {status === "success" && (
          <Box className="row">
            <Grid trending={trending} />
          </Box>
        )}
        <Flex justifyContent={"center"} mt={"30px"}>
          <Box>
            <Pagination
              totalPages={total}
              newPage={trendPage}
              route={"/trending"}
            />
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default Trending;
