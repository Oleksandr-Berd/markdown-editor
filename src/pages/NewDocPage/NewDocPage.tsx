import NewFormDoc from "../../components/NewDocForm/NewDocForm";
import { NewDocType } from "../../utils/types/types";
import * as SC from "./NewDocPageStyled"



const NewDocPage:React.FC<NewDocType> = ({ isSideBar}) => {
    return (
      <SC.NewDocPageStyled>
        <NewFormDoc  isSideBar={isSideBar} />
      </SC.NewDocPageStyled>
    );
}
 
export default NewDocPage;