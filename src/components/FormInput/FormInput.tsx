import { useFormContext } from "../../providers/FormContext";
import { Input } from "./FormInput.styles";
import { forwardRef, useEffect, Ref } from "react";

interface FormInputProps {
  required: boolean;
  name: string;
  type: string;
  placeholder?: string;
  inputAutoComplete?: string;
  padding?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (props, ref: Ref<HTMLInputElement>) => {
    const { required, name, type, placeholder, inputAutoComplete } = props;
    const { formState, onFormInputChange } = useFormContext();

    const getItemValue = (name: string) => {
      const keys = name.split(".");
      let item = formState;
      for (const key of keys) {
        if (item && typeof item === "object" && key in item) {
          item = item[key];
        } else {
          return "";
        }
      }
      return item;
    };

    return (
      <Input
        required={required}
        id={name}
        value={type === "submit" ? "Submit" : getItemValue(name)}
        type={type}
        placeholder={placeholder}
        autoComplete={inputAutoComplete}
        onChange={(e: any) => onFormInputChange(name, e.target.value)}
        ref={ref}
      />
    );
  }
);

export default FormInput;
