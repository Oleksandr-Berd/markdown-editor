import { useContext, useEffect, useState } from "react";
import Switch from "react-switch";

import * as SC from "./ThemeSwitcherStyled"

import ThemeContext from "../../utils/context/themeContext";

import {ReactComponent as Moon} from "../../assets/images/icon-dark-mode.svg"
import { ReactComponent as Sun } from "../../assets/images/icon-light-mode.svg";

type Props = {
  toggleChecked?: (theme:string)=> void
};

const ThemeSwitcher: React.FC<Props> = () => {
  const [themeChecked, setThemeChecked] = useState(false);

  const { theme, toggle } = useContext(ThemeContext);


useEffect(()=>{
theme === "dark" ? setThemeChecked(false) : setThemeChecked(true)
}, [theme])

  const toggleTheme = () => {
    toggle(theme);
  };

  return (
    <SC.CommonWrapper themeIcon={theme}>
      <Moon />
      <Switch
        onChange={toggleTheme}
        checked={themeChecked}
        onColor="#5A6069"
        offColor="#5A6069"
        uncheckedIcon={false}
        checkedIcon={false}
        width={48}
        height={24}
      />
      <Sun />
    </SC.CommonWrapper>
  );
};

export default ThemeSwitcher;
