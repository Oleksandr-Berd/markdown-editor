import { Component, ReactNode } from "react";
import ThemeContext from "./themeContext";

export interface IState {
  theme: string;
  toggle: (theme: string) => void;
}

interface IProps {
  children?: ReactNode;
}

export default class ThemeContextProvider extends Component<IProps, IState> {
  state = {
    theme: localStorage.getItem("theme") || "dark",
    toggle: (theme: string) => {
      this.setState({ theme: theme === "light" ? "dark" : "light" });
      localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    },
  };
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
