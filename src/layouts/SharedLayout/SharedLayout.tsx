import * as SC from "./SharedLayoutStyled"

import Header from "../Header/Header";
import ViewSwitcher from "../ViewSwitcher/ViewSwitcher";
import { useState } from "react";
import { ContentType } from "../../utils/types/types";
import SideBar from "../../components/SideBar/SideBar";

type Props = {
  children: React.ReactNode;
  allContent: [];
};

const SharedLayout: React.FC<Props & ContentType> = ({ children, defaultContent, allContent }) => {
  
  const [isSideBar, setIsSideBar] = useState<boolean>(false)

const toggleSideBar = () => {
    setIsSideBar(!isSideBar)
}


    return (
      <SC.SharedLayoutStyled>
        {isSideBar ? <SideBar allContent={allContent} /> : null}
        <SC.CommonWrapper isSideBar={isSideBar}>
          <Header
            docName={defaultContent ? defaultContent.name : null}
            toggleSideBar={toggleSideBar}
            isSideBar={isSideBar}
          />
          <ViewSwitcher />
          {children}
        </SC.CommonWrapper>
      </SC.SharedLayoutStyled>
    );
};

export default SharedLayout;
