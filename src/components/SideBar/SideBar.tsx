import * as SC from "./SideBarStyled";

import { transformDateFormat } from "../../services/date";
import FunctionButton from "../FunctionButton/FunctionButton";
import Loader from "../Loader/Loader";
import { AllContent } from "../../utils/types/types";
import docIcon from "../../assets/images/icon-document.svg"

const SideBar: React.FC<AllContent> = ({ allContent }) => {
  if (allContent && allContent.length > 0) {

    return (
      <SC.SideBarStyled>
        <h2>markdown</h2>
        <h3>my documents</h3>
        <FunctionButton typeName="add"></FunctionButton>
        <SC.SideBarList>
          {allContent.map(({ name, createdAt, _id }) => (
            <SC.SideBarItem key={_id}>
              <img src={docIcon} alt="docIcon" />
              <div>
                <SC.Date>{transformDateFormat(createdAt)}</SC.Date>
                <SC.Name>{name}</SC.Name>
              </div>
            </SC.SideBarItem>
          ))}
        </SC.SideBarList>
      </SC.SideBarStyled>
    );
  } else {
    return <Loader />;
  }
};

export default SideBar;
