import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Link,
    Heading,
    Text,
  } from "@chakra-ui/react";
  import Logo from "../Logo";
  
  import { NavLink, Link as RouterLink } from "react-router-dom";
  
  // eslint-disable-next-line react/prop-types
  const Sidebar = ({ isOpen, onClose, pages, token, loggingOut }) => {
    return (
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size={{ base: "sm" }}
      >
        <DrawerOverlay />
        <DrawerContent m={"0px"}>
          <DrawerHeader>
            <Flex
              h={"52px"}
              align={"center"}
              justify={{ base: "space-between", sm: "flex-end" }}
            >
              <Link
                textDecoration={"none"}
                as={RouterLink}
                to="/"
                display={{ sm: "none" }}
              >
                <Logo fs={"1.5em"} width={"23px"} height={"3.5px"} />
              </Link>
              <Box
                className="cursor"
                onClick={onClose}
                borderRadius={"3px"}
                bg={"#80A17B"}
                px={"7px"}
                py={{ base: "3px", sm: "7px" }}
              >
                <Heading color={"white"} fontWeight={"bold"} fontSize={"16px"}>
                  Close
                </Heading>
              </Box>
            </Flex>
          </DrawerHeader>
          <DrawerBody mt={"20px"}>
            <Flex direction={"column"} hideFrom={"lg"} gap={"30px"}>
              {/* eslint-disable-next-line react/prop-types */}
              {pages.map((each) => (
                <NavLink
                  onClick={onClose}
                  style={{ width: "max-content" }}
                  key={each.path}
                  to={each.path}
                  className={({ isActive }) =>
                    isActive ? "link-navbar" : "link-navbar_hover"
                  }
                >
                  <Text _hover={{ color: "#175616" }} fontSize={"20px"}>
                    {each.page}
                  </Text>
                </NavLink>
              ))}
            </Flex>
            {/* eslint-disable-next-line react/prop-types */}
            {token && (
              <Link as={RouterLink} to="/profile">
                <Button
                  mt={"30px"}
                  hideFrom={"lg"}
                  w={"40%"}
                  color={"white"}
                  rounded={0}
                  bg={"#175616"}
                  _hover={{ bg: "#175616" }}
                >
                  PROFILE
                </Button>
              </Link>
            )}
          </DrawerBody>
          <DrawerFooter>
            {/* eslint-disable-next-line react/prop-types */}
            {token ? (
              <Button
                hideFrom={"lg"}
                w={"100%"}
                color={"white"}
                rounded={0}
                bg={"#175616"}
                _hover={{ bg: "#175616" }}
                onClick={loggingOut}
              >
                LOGOUT
              </Button>
            ) : (
              <Link as={RouterLink} to="/login" w={"100%"}>
                <Button
                  onClick={onClose}
                  hideFrom={"lg"}
                  w={"100%"}
                  color={"white"}
                  rounded={0}
                  bg={"#175616"}
                  _hover={{ bg: "#175616" }}
                >
                  LOGIN
                </Button>
              </Link>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  };
  
  export default Sidebar;
  