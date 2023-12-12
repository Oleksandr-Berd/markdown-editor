
import * as SC from "./SideBarStyled";

import { transformDateFormat } from "../../services/helpers";
import FunctionButton from "../FunctionButton/FunctionButton";
import Loader from "../Loader/Loader";
import { AllContent } from "../../utils/types/types";
import docIcon from "../../assets/images/icon-document.svg";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { useNavigate } from "react-router-dom";

const SideBar: React.FC<AllContent> = ({ allContent }) => {
  const navigate = useNavigate()

const newPageNavigate = ()=>{
navigate("new")
}

  if (allContent && allContent.length > 0) {
    return (
      <SC.SideBarStyled>
        <div>
          <h2>markdown</h2>
          <h3>my documents</h3>
          <FunctionButton
            typeName="add"
            handle={newPageNavigate}
          ></FunctionButton>
          <SC.SideBarList>
            {allContent.map(({ name, createdAt, _id }) => (
              <SC.SideBarItem key={_id}>
                <img src={docIcon} alt="docIcon" />
                <div>
                  <SC.Date>{transformDateFormat(createdAt)}</SC.Date>
                  <SC.Name to={name}>{name}</SC.Name>
                </div>
              </SC.SideBarItem>
            ))}
          </SC.SideBarList>
        </div>
        <ThemeSwitcher />
      </SC.SideBarStyled>
    );
  } else {
    return <Loader />;
  }
};

export default SideBar;
