import * as SC from "./BurgerMenuStyled"

import {ReactComponent as MenuIcon} from "../../assets/images/icon-menu.svg"
import {ReactComponent as CloseMenuIcon} from "../../assets/images/icon-close.svg"
import { HeaderProps } from '../../utils/types/types';



const BurgerMenu: React.FC<Partial <HeaderProps>> = ({ toggleSideBar, isSideBar }) => {
  return (
    <SC.BurgerMenuStyled onClick={toggleSideBar}>
      {!isSideBar ? <MenuIcon /> : <CloseMenuIcon/>}
    </SC.BurgerMenuStyled>
  );
};
 
export default BurgerMenu;