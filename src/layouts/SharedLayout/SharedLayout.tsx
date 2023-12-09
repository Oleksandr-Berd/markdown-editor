import * as SC from "./SharedLayoutStyled"

import Header from "../Header/Header";
import ViewSwitcher from "../ViewSwitcher/ViewSwitcher";

type Props = {
  children: React.ReactNode;
  defaultContent: {
    name:string
  } | undefined;
};

const SharedLayout: React.FC<Props> = ({ children, defaultContent }) => {
  
  

    return (
      <SC.SharedLayoutStyled>
        <Header docName={defaultContent ? defaultContent.name : null} />
        <ViewSwitcher />
        {children}
      </SC.SharedLayoutStyled>
    );
};

export default SharedLayout;
