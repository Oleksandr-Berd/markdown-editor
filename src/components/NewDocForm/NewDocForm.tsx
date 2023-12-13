import { ChangeEvent, FormEvent } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";

import * as SC from "./NewDocFormStyled";
import { NewDocType } from "../../utils/types/types";
import FunctionButton from "../FunctionButton/FunctionButton";

import saveIcon from "../../assets/images/icon-save.svg";
import { addDoc } from "../../services/api";
import { useNavigate } from "react-router-dom";

interface ApiResponse {
  message?: string;
}

const NewFormDoc: React.FC<NewDocType> = ({ isSideBar }) => {
  const navigate = useNavigate();

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

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const { name, content } = formik.values;
    if (formik.errors.name) {
      toast.error(`${formik.errors.name}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return
    }

    const response = (await addDoc({ name, content })) as ApiResponse;
console.log(response);

    if (response.message) {
      toast.error(`${response.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (response) {
      formik.resetForm();
      toast.success(`Your document was successfully saved! `, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <>
      <ToastContainer />
      <SC.NewDocFormStyled onSubmit={handleSubmit}>
        <SC.InputWrapper>
          <SC.InputStyled
            type="text"
            placeholder="Type your document name"
            name="name"
            onChange={handleChange}
          />
          {formik.errors.name ? (
            <SC.ErrorStyled>{formik.errors.name}</SC.ErrorStyled>
          ) : null}
        </SC.InputWrapper>
        <div>
          <SC.TextareaStyled name="content" onChange={handleChange} />
        </div>
        {!isSideBar ? (
          <FunctionButton
            typeName="save"
            icon={saveIcon}
            locationPage="draft"
          />
        ) : null}
      </SC.NewDocFormStyled>
    </>
  );
};

export default NewFormDoc;
