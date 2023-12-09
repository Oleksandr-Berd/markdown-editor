import * as SC from "./SharedLayoutStyled"

import Header from "../Header/Header";
import ViewSwitcher from "../ViewSwitcher/ViewSwitcher";

type Props = {
  children: React.ReactNode;
};

const SharedLayout: React.FC<Props> = ({ children }) => {
  return (
    <SC.SharedLayoutStyled>
      <Header />
      <ViewSwitcher/>
      {children}
    </SC.SharedLayoutStyled>
  );
};

export default SharedLayout;
