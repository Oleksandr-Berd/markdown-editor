import * as SC from "./BurgerMenuStyled"

import {ReactComponent as MenuIcon} from "../../assets/images/icon-menu.svg"

const BurgerMenu = () => {
    return (
      <SC.BurgerMenuStyled>
        <MenuIcon />
      </SC.BurgerMenuStyled>
    );
}
 
export default BurgerMenu;