import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const signUpSchema = yup.object().shape({
  username: yup.string().min(3).required("Enter UserName"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Enter Email"),
  password: yup
    .string()
    .min(5)
    .matches(/^\S*$/, "Password cannot contain space")
    .matches(passwordRules, {
      message:
        "Minimum of 5 characters, 1 uppercase, 1 lowercase, 1 numeric digit",
    })
    .required("Enter Password"),
  confirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Confirm Password"),
    agree: yup
    .array()
    .min(1, "Please agree to our terms and privacy policy")
    .required("Please agree to our terms and privacy policy"),
});

export const loginSchema = yup.object().shape({
  password: yup
    .string()
    .min(5)
    .matches(/^\S*$/, "Password cannot contain space")
    .matches(passwordRules, {
      message:
        "Minimum of 5 characters, 1 uppercase, 1 lowercase, 1 numeric digit",
    })
    .required("Enter Password"),
  username: yup.string().min(3).required("Enter UserName"),
});
