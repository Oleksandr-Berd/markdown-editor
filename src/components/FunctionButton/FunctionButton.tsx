import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { ButtonType } from "../../utils/types/types";
import * as SC from "./FunctionButtonStyled"


const FunctionButton: React.FC<Partial<ButtonType>> = ({
  icon,
  typeName,
  handle,
  isEdit,
  specificName
}) => {
  const navigate = useNavigate();

const location = useLocation()

const {pathname} = location

  useEffect(() => {
    if (isEdit) {
      navigate("edit");
    } else if (pathname === "/edit" && !isEdit && specificName) {
      navigate(`/${specificName}`);
    } else if (pathname === "/edit" && !isEdit) {
      navigate(`/`);
    }
  }, [isEdit, navigate, pathname, specificName]);

  return (
    <SC.FunctionButtonStyled typeName={typeName} onClick={handle}>
      {typeName !== "add" ? <img src={icon} alt={typeName} /> : null}
      {typeName === "add" ? "+ New Document" : null}
    </SC.FunctionButtonStyled>
  );
};
 
export default FunctionButton;