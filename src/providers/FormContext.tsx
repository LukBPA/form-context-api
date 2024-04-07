import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface Props {
  formState: any;
  onFormInputChange: (name: string, value: any) => void;
  setInitialState: (initialValues: any) => void;
  onFormSubmit: () => void;
}

const FormContext = createContext<Props | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

export const FormProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [formState, setFormState] = useState({});

  const setInitialState = (initialValues: any) => {
    setFormState(initialValues);
  };

  const onFormInputChange = (name: string, value: any) => {
    const updatedFormData = { ...formState } as any;
    if (name.includes(".")) {
      const keys = name.split(".");
      let obj = updatedFormData as any;
      for (let i = 0; i < keys.length - 1; i++) {
        obj[keys[i]] = obj[keys[i]] || {};
        obj = obj[keys[i]];
      }
      obj[keys[keys.length - 1]] = value;
    } else {
      updatedFormData[name] = value;
    }
    setFormState(updatedFormData);
  };

  const onFormSubmit = () => {
    console.log(formState);
  };

  return (
    <FormContext.Provider
      value={{ formState, onFormInputChange, setInitialState, onFormSubmit }}
    >
      {children}
    </FormContext.Provider>
  );
};
