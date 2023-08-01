import FormikCheckbox from "./FormikCheckbox";
import FormikInput from "./FormikInput";

const FormikControl = (props) => {
  // eslint-disable-next-line react/prop-types
  const { control, ...rest } = props;

  switch (control) {
    case "Input":
      return <FormikInput {...rest} />;
    case "Checkbox":
      return <FormikCheckbox {...rest} />;
    default:
      return;
  }
};

export default FormikControl;
