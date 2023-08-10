/* eslint-disable react/prop-types */
import { Box, Button, Flex, Icon, Text, useDisclosure } from "@chakra-ui/react";
import Logo from "../Logo";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import Sidebar from "./Sidebar";

import { useSelector, useDispatch } from "react-redux";
import { Token } from "../../app/Slice/UserSlice";
import { LOGOUT } from "../../app/Slice/UserSlice";

const Navbar = ({ button, logo, text, activeText, hover, textShadow }) => {
  const token = useSelector(Token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const loggingOut = () => {
    dispatch(LOGOUT());
    navigate("/");
  };

  const pages = [
    {
      page: "Home",
      path: "/",
    },
    {
      page: "Trending",
      path: "/trending",
    },
    {
      page: "Recent",
      path: "/recent",
    },
    {
      page: "New",
      path: "/new",
    },
  ];

  return (
    <>
      <Flex
        pos={"relative"}
        zIndex={20}
        className="page_alignment cc-container"
        justifyContent={`space-between`}
        alignItems={`center`}
        height={`4.688rem`}
      >
        <Link to="/">
          <Logo
            color={logo ? "white" : "#175616"}
            gap={"3px"}
            fs={"1.7em"}
            width={"21.5px"}
            height={"3px"}
          />
        </Link>
        <Flex hideBelow={"lg"} gap={"80px"}>
          {pages.map((each) => (
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? activeText : text,
              })}
              key={each.path}
              to={each.path}
              className={({ isActive }) => (isActive ? "link-navbar" : "")}
            >
              <Text fontSize={"14px"} _hover={{ color: hover ? hover : text }}>
                {each.page}
              </Text>
            </NavLink>
          ))}
        </Flex>
        <Flex gap={"20px"}>
          {token && (
            <Link to="/blog/create">
              <Button
                hideBelow={"lg"}
                w={"94px"}
                h={"34px"}
                color={button ? "#175616" : "white"}
                bg={button ? "white" : "#175616"}
                rounded={0}
                _hover={{
                  bg: button ? "#175616" : "white",
                  color: button ? "white" : "#175616",
                }}
              >
                CREATE
              </Button>
            </Link>
          )}
          {token ? (
            <Button
              hideBelow={"lg"}
              w={"94px"}
              h={"34px"}
              color={button ? "#175616" : "white"}
              bg={button ? "white" : "#175616"}
              rounded={0}
              _hover={{
                bg: button ? "#175616" : "white",
                color: button ? "white" : "#175616",
              }}
              onClick={loggingOut}
            >
              LOGOUT
            </Button>
          ) : (
            <Link to="/login">
              <Button
                hideBelow={"lg"}
                w={"94px"}
                h={"34px"}
                color={button ? "#175616" : "white"}
                bg={button ? "white" : "#175616"}
                rounded={0}
                _hover={{
                  bg: button ? "#175616" : "white",
                  color: button ? "white" : "#175616",
                }}
              >
                LOGIN
              </Button>
            </Link>
          )}
        </Flex>
        <Box hideFrom={"lg"} className="cursor">
          <Icon
            onClick={onOpen}
            as={BiMenu}
            boxSize={8}
            color={logo ? "white" : "#175616"}
          />
        </Box>
      </Flex>
      <Sidebar
        loggingOut={loggingOut}
        isOpen={isOpen}
        token={token}
        onClose={onClose}
        pages={pages}
      />
    </>
  );
};

export default Navbar;
