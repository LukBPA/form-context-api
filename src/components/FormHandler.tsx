import { PropsWithChildren } from "react";
import { FormProvider } from "../providers/FormContext";



const FormHandler: React.FC<PropsWithChildren> = ({ children }) => {
  return <FormProvider>{children}</FormProvider>;
};

export default FormHandler;
