import { Box } from "@chakra-ui/react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Recent = () => {
  return (
    <Box>
      <Navbar text={"black"} activeText={"#175616"} hover={"#175616"} />
      <Box mb={"100px"}></Box>
      <Footer />
    </Box>
  );
};

export default Recent;
