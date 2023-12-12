import { ChangeEvent } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import * as SC from "./NewDocFormStyled";

const NewFormDoc: React.FC = () => {
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

  // const handleSubmit = (evt) => {
  //     evt.preventDefault()
  // }

  return (
    <SC.NewDocFormStyled>
      <SC.InputStyled
        type="text"
        placeholder="Type your document name"
        name="name"
        onChange={handleChange}
      />
      <div>
        <SC.TextareaStyled name="content" onChange={handleChange} />
      </div>
    </SC.NewDocFormStyled>
  );
};

export default NewFormDoc;
