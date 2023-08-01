import { Box, Button, Heading, Text } from "@chakra-ui/react";
import AccountLayout from "../components/account/AccountLayout";
import { Formik, Form } from "formik";
import FormikControl from "../components/formik/FormikControl";
import { signUpSchema } from "../components/formik/FormikValidation";
import { signupSliders } from "../utils/data";

import { useDispatch, useSelector } from "react-redux";
import { signup } from "../app/actions/user";
import { Link, useNavigate } from "react-router-dom";
import { UserLoading } from "../app/Slice/UserSlice";

const Signup = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm: "",
    agree: ""
  };

  const options = [
    {
      key: (
        <Text>
          I agree to all{" "}
          <Link>
            <Text color={"#175616"} className="link" as={"span"}>
              Terms
            </Text>
          </Link>{" "}
          &{" "}
          <Link>
            <Text color={"#175616"} className="link" as={"span"}>
              Privacy Policy
            </Text>
          </Link>
        </Text>
      ),
      value: "true",
    },
  ];

  const status = useSelector(UserLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values) => {
    const formData = { ...values, navigate };
    dispatch(signup(formData));
  };

  return (
    <AccountLayout sliders={signupSliders}>
      <Heading fontSize={"25px"} mb={"10px"}>
        Create Your Account
      </Heading>
      <Text mb={"30px"}>
        <i>Hi! Come Join Us</i>
      </Text>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={signUpSchema}
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
            <Box width={"100%"} mb={"10px"}>
              <FormikControl
                name="email"
                placeholder="E-mail Address"
                type="text"
                control="Input"
              />
            </Box>
            <Box width={"100%"} mb={"10px"}>
              <FormikControl
                name="password"
                placeholder="Password"
                type="text"
                control="Input"
              />
            </Box>
            <Box width={"100%"} mb={"25px"}>
              <FormikControl
                name="confirm"
                placeholder="Confirm Password"
                type="password"
                control="Input"
              />
            </Box>
            <Box mb={"40px"}>
              <FormikControl
                control="Checkbox"
                name="agree"
                options={options}
              />
            </Box>
            <Button
              bg={"#175616"}
              _hover={{ bg: "#175616" }}
              color={"white"}
              h={"42px"}
              w={"100%"}
              isLoading={status === "pending"}
              type="submit"
            >
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
      <Box mt={"50px"}>
        <Text textAlign={"center"}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Have an account?{" "}
          <Link to="/login">
            {" "}
            <Text
              className="link"
              fontWeight={"bold"}
              color={"#175616"}
              as={"span"}
            >
              Log In
            </Text>
          </Link>
        </Text>
      </Box>
    </AccountLayout>
  );
};

export default Signup;
