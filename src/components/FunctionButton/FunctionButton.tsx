import { ButtonType } from "../../utils/types/types";
import * as SC from "./FunctionButtonStyled"


const FunctionButton:React.FC<Partial <ButtonType>> = ({icon, typeName}) => {
    return (
      <SC.FunctionButtonStyled typeName={typeName}>
        {typeName !== "add" ? <img src={icon} alt={typeName} /> : null}
        {typeName === "add" ?"+ New Document" : null}
      </SC.FunctionButtonStyled>
    );
}
 
export default FunctionButton;