import { ChangeEvent, FormEvent } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import * as SC from "./NewDocFormStyled";
import { NewDocType } from "../../utils/types/types";
import FunctionButton from "../FunctionButton/FunctionButton";

const NewFormDoc: React.FC<NewDocType> = ({ handleDraft }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .matches(/\.md$/, 'Name must end with ".md"'),
    content: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      content: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    formik.handleChange(evt);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const { name, content } = formik.values;

    handleDraft({ name, content });
  };

  return (
    <SC.NewDocFormStyled onSubmit={handleSubmit}>
      <SC.InputStyled
        type="text"
        placeholder="Type your document name"
        name="name"
        onChange={handleChange}
      />
      <div>
        <SC.TextareaStyled name="content" onChange={handleChange} />
      </div>
      <FunctionButton typeName="draft"/>
    </SC.NewDocFormStyled>
  );
};

export default NewFormDoc;
