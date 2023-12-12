import NewFormDoc from "../../components/NewDocForm/NewDocForm";
import * as SC from "./NewDocPageStyled"



const NewDocPage:React.FC = () => {
    return (
      <SC.NewDocPageStyled>
        <NewFormDoc />
      </SC.NewDocPageStyled>
    );
}
 
export default NewDocPage;