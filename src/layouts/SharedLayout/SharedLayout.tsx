import * as SC from "./SharedLayoutStyled";

import Header from "../Header/Header";
import ViewSwitcher from "../ViewSwitcher/ViewSwitcher";
import { useState } from "react";
import { ContentType } from "../../utils/types/types";
import SideBar from "../../components/SideBar/SideBar";
import { useLocation } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  allContent: [];
  specificName: string | null;
};

const SharedLayout: React.FC<Props & ContentType> = ({
  children,
  defaultContent,
  allContent,
  specificName,
}) => {
  const [isSideBar, setIsSideBar] = useState<boolean>(false);

  const location = useLocation()

const {pathname} = location;

  const toggleSideBar = () => {
    setIsSideBar(!isSideBar);
  };

  return (
    <SC.SharedLayoutStyled isSideBar={isSideBar}>
      {isSideBar ? <SideBar allContent={allContent} /> : null}
      <SC.CommonWrapper isSideBar={isSideBar}>
        <Header
          docName={defaultContent ? defaultContent.name : null}
          toggleSideBar={toggleSideBar}
          isSideBar={isSideBar}
          specificName={specificName}
        />
        {pathname !== "/new" ? (
          <ViewSwitcher specificName={specificName ? specificName : null} />
        ) : null}

        {children}
      </SC.CommonWrapper>
    </SC.SharedLayoutStyled>
  );
};

export default SharedLayout;
