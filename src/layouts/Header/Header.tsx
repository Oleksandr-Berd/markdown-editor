import * as SC from "./HeaderStyled"

import { ReactComponent as DocIcon } from "../../assets/images/icon-document.svg";
import deleteIcon from "../../assets/images/icon-delete.svg"
import saveIcon from "../../assets/images/icon-save.svg"

import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import FunctionButton from "../../components/FucntionButton/FunctionButton";

const Header: React.FC = () => {
  return (
    <SC.HeaderStyled>
      <BurgerMenu />
      <SC.CommonWrapper>
        <SC.DocWrapper>
          <DocIcon />
          <p>welcome.md</p>
        </SC.DocWrapper>
        <SC.ButtonsWrapper>
          <FunctionButton icon={deleteIcon} typeName="delete" />
          <FunctionButton icon={saveIcon} typeName="save" />
        </SC.ButtonsWrapper>
      </SC.CommonWrapper>
    </SC.HeaderStyled>
  );
};

export default Header;
