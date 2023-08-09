import { Box } from "@chakra-ui/react";
import Navbar from "../components/layout/Navbar";
import HomeFirstSection from "../components/Home/HomeFirstSection";

const Home = () => {

  
  return (
    <>
      <Navbar text={"black"} activeText={"#175616"} hover={"#175616"} />
      <Box pos={"absolute"} top={"0"} left={"0"} w={"100%"}>
        <HomeFirstSection/>
      </Box>
    </>
  );
};

export default Home;
