import * as SC from "./SharedLayoutStyled";

import Header from "../Header/Header";
import ViewSwitcher from "../ViewSwitcher/ViewSwitcher";
import { ContentType } from "../../utils/types/types";
import SideBar from "../../components/SideBar/SideBar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ModalDelete from "../../components/ModalDelete/ModalDelete";

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

  const [isModal, setIsModal] = useState<boolean>(false)

  const location = useLocation();

  const { pathname } = location;

  const toggleModal = () =>{
    setIsModal(!isModal)
  }

  useEffect(() => {
    if (location.pathname === "/" && isModal === true) setIsModal(false);
  }, [isModal, location.pathname]);

  return (
    <SC.SharedLayoutStyled isSideBar={isSideBar}>
      {isModal ? (
        <ModalDelete onClose={toggleModal} name={specificName ? specificName : ""} />
      ) : null}
      {isSideBar ? (
        <SideBar allContent={allContent} toggleSideBar={toggleSideBar} />
      ) : null}
      <SC.CommonWrapper isSideBar={isSideBar}>
        <Header
          docName={defaultContent ? defaultContent.name : null}
          toggleSideBar={toggleSideBar}
          isSideBar={isSideBar}
          specificName={specificName}
          toggleModal={toggleModal}
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
