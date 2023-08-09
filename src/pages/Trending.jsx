import { useEffect } from "react";
import {Box} from "@chakra-ui/react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import { useDispatch, useSelector } from "react-redux";
import { getTrending } from "../app/actions/Blogs";
import { Trend, Error, Status, TotalPages } from "../app/Slice/TrendingSlice";

const Trending = () => {
  const dispatch = useDispatch()
  const trending = useSelector(Trend)
  const error = useSelector(Error)
  const status = useSelector(Status)
  const total = useSelector(TotalPages)
  console.log(status)
  console.log(trending, total)

  useEffect(() => {
    dispatch(getTrending())
  }, [dispatch])

  return (
    <Box>
      <Navbar text={"black"} activeText={"#175616"} hover={"#175616"} />
      <Box mb={"100px"}></Box>
      <Footer />
    </Box>
  );
};

export default Trending;
