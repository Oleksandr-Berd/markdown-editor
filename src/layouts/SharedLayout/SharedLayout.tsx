import * as SC from "./SharedLayoutStyled";

import Header from "../Header/Header";
import ViewSwitcher from "../ViewSwitcher/ViewSwitcher";
import { ContentType } from "../../utils/types/types";
import SideBar from "../../components/SideBar/SideBar";
import { useLocation } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  allContent: [];
  specificName: string | null;
  toggleSideBar: () => void;
  isSideBar:boolean;
};

const SharedLayout: React.FC<Props & ContentType> = ({
  children,
  defaultContent,
  allContent,
  specificName,
  toggleSideBar,
  isSideBar,
}) => {
  const location = useLocation();

  const { pathname } = location;

  return (
    <SC.SharedLayoutStyled isSideBar={isSideBar}>
      {isSideBar ? (
        <SideBar allContent={allContent} toggleSideBar={toggleSideBar} />
      ) : null}
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
