import FormikCheckbox from "./FormikCheckbox";
import FormikInput from "./FormikInput";
import FormikTextArea from "./FormikTextArea";

const FormikControl = (props) => {
  // eslint-disable-next-line react/prop-types
  const { control, ...rest } = props;

  switch (control) {
    case "Input":
      return <FormikInput {...rest} />;
    case "Checkbox":
      return <FormikCheckbox {...rest} />;
      case "Textarea":
        return <FormikTextArea {...rest} />;
    default:
      return;
  }
};

export default FormikControl;
