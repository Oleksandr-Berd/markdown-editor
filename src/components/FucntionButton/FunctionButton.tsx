import * as SC from "./FunctionButtonStyled"


type Props = {
  icon: string;
  typeName: "save" | "delete";
};

const FunctionButton:React.FC<Props> = ({icon, typeName}) => {
    return (
      <SC.FunctionButtonStyled typeName={typeName}>
        <img src={icon} alt={typeName} />
      </SC.FunctionButtonStyled>
    );
}
 
export default FunctionButton;