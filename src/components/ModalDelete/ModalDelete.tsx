import { useEffect } from "react";

import * as SC from "./ModalDeleteStyled"

type Props = {
    onClose:()=>void;
    name: string;
}

const ModalDelete:React.FC<Props> = ({onClose, name}) => {
  
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

const deleteDoc = () => {
console.log(name);

}

  return (
    <SC.Overlay onClick={handleBackdropClick}>
      <SC.ModalStyled>
        <h3>Delete this document?</h3>
        <p>
          Are you sure you want to delete the {name} document and its contents?
          This action cannot be reversed.
        </p>
        <SC.ConfirmDeleteButton onClick={deleteDoc}>Confirm & Delete</SC.ConfirmDeleteButton>
      </SC.ModalStyled>
    </SC.Overlay>
  );
};


export default ModalDelete