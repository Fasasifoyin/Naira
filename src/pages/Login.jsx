import { useEffect, useState } from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import AccountLayout from "../components/account/AccountLayout";
import { Formik, Form } from "formik";
import FormikControl from "../components/formik/FormikControl";
import { loginSchema } from "../components/formik/FormikValidation";
import { Link, useNavigate } from "react-router-dom";
import { loginSliders } from "../utils/data";

import { useDispatch, useSelector } from "react-redux";
import { UserLoading } from "../app/Slice/UserSlice";
import { login } from "../app/actions/user";

const Login = () => {
  const [remember, setRemember] = useState(
    localStorage.getItem("remember")
      ? JSON.parse(localStorage.getItem("remember"))
      : {}
  );

  const initialValues = {
    username: remember.username || "",
    password: remember.password || "",
    remember: remember.password ? ["true"] : [],
  };

  const options = [{ key: "Remember me", value: "true" }];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector(UserLoading);

  const onSubmit = (values) => {
    const formData = { ...values, navigate };

    dispatch(login(formData));
  };

  useEffect(() => {
    setRemember(
      localStorage.getItem("remember")
        ? JSON.parse(localStorage.getItem("remember"))
        : {}
    );
  }, []);

  return (
    <AccountLayout sliders={loginSliders}>
      <Heading fontSize={"25px"} mb={"10px"}>
        Log In To Your Account
      </Heading>
      <Text mb={"30px"}>Welcome Back!</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={loginSchema}
      >
        {() => (
          <Form>
            <Box width={"100%"} mb={"10px"}>
              <FormikControl
                name="username"
                placeholder="Username"
                type="text"
                control="Input"
              />
            </Box>
            <Box w={"100%"} mb={"25px"}>
              <FormikControl
                control="Input"
                name="password"
                placeholder="Password"
                type="password"
              />
            </Box>
            <Flex mb={"40px"} justify={"space-between"}>
              <Box>
                <FormikControl
                  control="Checkbox"
                  name="remember"
                  options={options}
                />
              </Box>
              <Text color={"#175616"}>Forget Password?</Text>
            </Flex>
            <Button
              bg={"#175616"}
              _hover={{ bg: "#175616" }}
              color={"white"}
              h={"42px"}
              w={"100%"}
              isLoading={status === "pending"}
              type="submit"
            >
              Log in
            </Button>
          </Form>
        )}
      </Formik>
      <Box mt={"50px"}>
        <Text textAlign={"center"}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Don't have an account?{" "}
          <Link to="/signup">
            {" "}
            <Text
              className="link"
              fontWeight={"bold"}
              color={"#175616"}
              as={"span"}
            >
              Sign Up
            </Text>
          </Link>
        </Text>
      </Box>
    </AccountLayout>
  );
};
export default Login;
