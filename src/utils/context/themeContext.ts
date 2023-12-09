import { createContext, Context } from "react";
import { IState } from "./themeContextProvider";

const ThemeContext: Context<IState> = createContext<IState>({
  theme: "dark",
  toggle: (theme) => {},
});

export default ThemeContext;
