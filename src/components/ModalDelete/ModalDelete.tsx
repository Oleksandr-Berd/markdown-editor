import { useEffect } from "react";

import * as SC from "./ModalDeleteStyled";
import { deleteDoc } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type Props = {
  onClose: () => void;
  name: string;
};

const ModalDelete: React.FC<Props> = ({ onClose, name }) => {
  const navigate = useNavigate();

  const handleBackdropClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (evt: KeyboardEvent) => {
      if (evt.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const confirmDelete = async () => {
    const result = await deleteDoc(name);

    toast.success(`${result.message}`, {
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
  };

  return (
    <SC.Overlay onClick={handleBackdropClick}>
      <ToastContainer />
      <SC.ModalStyled>
        <h3>Delete this document?</h3>
        <p>
          Are you sure you want to delete the {name} document and its contents?
          This action cannot be reversed.
        </p>
        <SC.ConfirmDeleteButton onClick={confirmDelete}>
          Confirm & Delete
        </SC.ConfirmDeleteButton>
      </SC.ModalStyled>
    </SC.Overlay>
  );
};

export default ModalDelete;
