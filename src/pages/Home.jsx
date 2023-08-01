import { Box, Container, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Token, User } from "../app/Slice/UserSlice";

const Home = () => {
  const user = useSelector(User);
  const token = useSelector(Token);

  return (
    <>
      <Container>
        <Box>
          <Flex>{token ? user.username : "No user"}</Flex>
        </Box>
      </Container>
    </>
  );
};

export default Home;
