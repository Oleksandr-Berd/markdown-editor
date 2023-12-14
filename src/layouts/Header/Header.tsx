import * as SC from "./HeaderStyled";

import { ReactComponent as DocIcon } from "../../assets/images/icon-document.svg";
import deleteIcon from "../../assets/images/icon-delete.svg";
import saveIcon from "../../assets/images/icon-save.svg";

import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import FunctionButton from "../../components/FunctionButton/FunctionButton";
import { HeaderProps } from '../../utils/types/types';
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";



const Header: React.FC<HeaderProps> = ({
  docName,
  toggleSideBar,
  isSideBar,
  specificName,
  toggleModal,
}) => {
  const location = useLocation();

  const { pathname } = location;

  const isTablet = useMediaQuery("(min-width:768px)")

  return (
    <SC.HeaderStyled>
      <BurgerMenu toggleSideBar={toggleSideBar} isSideBar={isSideBar} />
      <SC.CommonWrapper>
        <SC.DocWrapper>
          <DocIcon />
          {isTablet ? (
            <div>
              <p>Document Name</p>
              <p>
                {pathname === "/new"
                  ? "new_doc"
                  : specificName
                  ? specificName
                  : docName}
              </p>
            </div>
          ) : (
            <p>
              {pathname === "/new"
                ? "new_doc"
                : specificName
                ? specificName
                : docName}
            </p>
          )}
        </SC.DocWrapper>
        <SC.ButtonsWrapper>
          <FunctionButton
            icon={deleteIcon}
            typeName="delete"
            handle={toggleModal}
          />
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
