import FunctionButton from "../FunctionButton/FunctionButton";
import * as SC from "./SideBarStyled"

type Props ={
    allContent: []; 
}

const SideBar: React.FC<Props> = ({ allContent }) => {

console.log(allContent);


  return (
    <SC.SideBarStyled>
      <h2>markdown</h2>
      <h3>my documents</h3>
      <FunctionButton typeName="add">+ New Document</FunctionButton>
      <ul></ul>
    </SC.SideBarStyled>
  );
};
 
export default SideBar;