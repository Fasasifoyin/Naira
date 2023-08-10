/* eslint-disable react/prop-types */
import { Field } from "formik";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";

const FormikTextArea = (props) => {
  const { name, label } = props;

  return (
    <Field name={name}>
      {({ meta, field }) => (
        <FormControl isInvalid={meta.error && meta.touched}>
          <FormLabel color={"#AAAAAA"} fontWeight={"bold"} fontSize={"18px"}>
            {label}
          </FormLabel>
          <Textarea
            {...field}
            borderRadius={"10px"}
            h={"450px"}
            borderColor={"#175616"}
          />
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default FormikTextArea;
