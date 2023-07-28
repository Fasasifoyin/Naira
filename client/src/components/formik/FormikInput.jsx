import { Field } from "formik";
import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react";

const FormikInput = (props) => {
  // eslint-disable-next-line react/prop-types
  const { type, name, placeholder } = props;

  return (
    <Field name={name}>
      {({ meta, field }) => (
        <FormControl isInvalid={meta.error && meta.touched}>
          <Input
            focusBorderColor="green.500"
            borderRadius={"5px"}
            fontSize={"20px"}
            bg={"white"}
            h={"56px"}
            color={"black"}
            border={"1px solid #175616"}
            type={type}
            placeholder={placeholder}
            paddingLeft={"17px"}
            {...field}
            _placeholder={{ color: "rgb(0, 0, 0, 0.6)", fontSize: "20px" }}
          />
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default FormikInput;
