import NewFormDoc from "../../components/NewDocForm/NewDocForm";
import { NewDocType } from "../../utils/types/types";
import * as SC from "./NewDocPageStyled"



const NewDocPage:React.FC<NewDocType> = ({handleDraft}) => {
    return (
      <SC.NewDocPageStyled>
        <NewFormDoc handleDraft={handleDraft} />
      </SC.NewDocPageStyled>
    );
}
 
export default NewDocPage;