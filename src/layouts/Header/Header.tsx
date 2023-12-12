import * as SC from "./HeaderStyled";

import { ReactComponent as DocIcon } from "../../assets/images/icon-document.svg";
import deleteIcon from "../../assets/images/icon-delete.svg";
import saveIcon from "../../assets/images/icon-save.svg";

import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import FunctionButton from "../../components/FunctionButton/FunctionButton";
import { HeaderProps } from '../../utils/types/types';
import { useLocation } from "react-router-dom";



const Header: React.FC<HeaderProps> = ({
  docName,
  toggleSideBar,
  isSideBar,
  specificName,
}) => {

const location = useLocation()

const {pathname} = location


  return (
    <SC.HeaderStyled>
      <BurgerMenu toggleSideBar={toggleSideBar} isSideBar={isSideBar} />
      <SC.DocWrapper>
        <DocIcon />
        <p>
          {pathname === "/new"
            ? "new_doc"
            : specificName
            ? specificName
            : docName}
        </p>
      </SC.DocWrapper>
      <SC.CommonWrapper>
        <SC.ButtonsWrapper>
          <FunctionButton icon={deleteIcon} typeName="delete" />
          <FunctionButton
            icon={saveIcon}
            typeName="save"
            locationPage={pathname}
          />
        </SC.ButtonsWrapper>
      </SC.CommonWrapper>
    </SC.HeaderStyled>
  );
};

export default Header;
