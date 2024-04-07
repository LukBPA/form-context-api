import { ReactNode, useEffect } from "react";
import { StyledForm } from "./Form.styled";
import { useFormContext } from "../../providers/FormContext";
import React from "react";

interface FormProps {
  initialValues: any;
  onSubmit: (values: any) => void;
  children: ReactNode;
}

const Form: React.FC<FormProps> = ({ initialValues, onSubmit, children }) => {
  const { formState, onFormSubmit, setInitialState } = useFormContext();

  useEffect(() => {
    setInitialState(initialValues);
  }, []);

  const handleSubmit = (event: any) => {
    onFormSubmit();
    onSubmit(formState);
    event.preventDefault();
  };

  return <StyledForm onSubmit={handleSubmit}>{children}</StyledForm>;
};

export default Form;
