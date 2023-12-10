import * as SC from "./HeaderStyled";

import { ReactComponent as DocIcon } from "../../assets/images/icon-document.svg";
import deleteIcon from "../../assets/images/icon-delete.svg";
import saveIcon from "../../assets/images/icon-save.svg";

import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import FunctionButton from "../../components/FunctionButton/FunctionButton";
import { HeaderProps } from '../../utils/types/types';



const Header: React.FC<HeaderProps> = ({ docName, toggleSideBar, isSideBar }) => {
  return (
    <SC.HeaderStyled>
      <BurgerMenu toggleSideBar={toggleSideBar} isSideBar={isSideBar} />
      <SC.CommonWrapper>
        <SC.DocWrapper>
          <DocIcon />
          <p>{docName ? docName : "......"}</p>
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
