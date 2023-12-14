import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, MouseEventHandler } from "react";

import { ButtonType } from "../../utils/types/types";
import * as SC from "./FunctionButtonStyled";
import { useMediaQuery } from "usehooks-ts";

interface FunctionButtonProps extends Partial<ButtonType> {
  handleDelete?: (name: string) => void;
  handle?: MouseEventHandler<HTMLButtonElement>;
}

const FunctionButton: React.FC<FunctionButtonProps> = ({
  icon,
  typeName,
  handle,
  isEdit,
  specificName,
  locationPage,
  handleDelete,
}) => {
  const navigate = useNavigate();

  const location = useLocation();

  const { pathname } = location;

  const isTablet = useMediaQuery("(min-width:768px)")

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
    <SC.FunctionButtonStyled
      type={locationPage === "draft" ? "submit" : "button"}
      typeName={typeName}
      onClick={handle}
      locationPage={locationPage}
    >
      {typeName !== "add" ? <img src={icon} alt={typeName} /> : null}
      {typeName === "add" ? "+ New Document" : isTablet && typeName === "save" ? "Save Changes" : null}
    </SC.FunctionButtonStyled>
  );
};

export default FunctionButton;
