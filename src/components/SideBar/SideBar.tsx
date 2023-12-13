import { IconContext } from "react-icons";

import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";

import * as SC from "./SideBarStyled";

import { transformDateFormat } from "../../services/helpers";
import FunctionButton from "../FunctionButton/FunctionButton";
import { AllContent, Content } from "../../utils/types/types";
import docIcon from "../../assets/images/icon-document.svg";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { useNavigate } from "react-router-dom";

type Props = {
  toggleSideBar: () => void;
  prevDocs:()=>void;
  nextDocs:()=>void;
  page: number;
};

const SideBar: React.FC<AllContent & Props> = ({
  allContent,
  toggleSideBar,
  nextDocs,
  prevDocs,
  page,
}) => {
  const navigate = useNavigate();

  const newPageNavigate = () => {
    navigate("new");
    toggleSideBar();
  };

  const limit = 6;

const paginatedArray = allContent.filter((el:Content, idx) => idx >= page * limit - limit && idx < page * limit
);

console.log(paginatedArray.length);



  if (paginatedArray && paginatedArray.length > 0) {
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
            {paginatedArray.map(({ name, createdAt, _id }) => (
              <SC.SideBarItem key={_id}>
                <img src={docIcon} alt="docIcon" />
                <div>
                  <SC.Date>{transformDateFormat(createdAt)}</SC.Date>
                  <SC.Name to={name} onClick={toggleSideBar}>
                    {name}
                  </SC.Name>
                </div>
              </SC.SideBarItem>
            ))}
          </SC.SideBarList>
        </div>
        <div>
          <IconContext.Provider value={{ color: "#fff", size: "17px" }}>
            <SC.IconWrapper>
              {page === 1 ? (
                <IconContext.Provider
                  value={{ color: "#979797", size: "17px" }}
                >
                  <button onClick={prevDocs} disabled>
                    <RxTrackPrevious />
                  </button>
                </IconContext.Provider>
              ) : (
                <IconContext.Provider value={{ color: "#fff", size: "17px" }}>
                  <button onClick={prevDocs}>
                    <RxTrackPrevious />
                  </button>
                </IconContext.Provider>
              )}

              <span>.........</span>
              {page * limit >= allContent.length ? (
                <IconContext.Provider
                  value={{ color: "#979797", size: "17px" }}
                >
                  <button onClick={nextDocs} disabled>
                    <RxTrackNext />
                  </button>
                </IconContext.Provider>
              ) : (
                <IconContext.Provider value={{ color: "#fff", size: "17px" }}>
                  <button onClick={nextDocs}>
                    <RxTrackNext />
                  </button>
                </IconContext.Provider>
              )}
            </SC.IconWrapper>
          </IconContext.Provider>
          <ThemeSwitcher />
        </div>
      </SC.SideBarStyled>
    );
  } else {
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
                  <SC.Name to={name} onClick={toggleSideBar}>
                    {name}
                  </SC.Name>
                </div>
              </SC.SideBarItem>
            ))}
          </SC.SideBarList>
        </div>
        <div>
          <IconContext.Provider value={{ color: "#fff", size: "17px" }}>
            <SC.IconWrapper>
              {page === 1 ? (
                <IconContext.Provider
                  value={{ color: "#979797", size: "17px" }}
                >
                  <button onClick={prevDocs} disabled>
                    <RxTrackPrevious />
                  </button>
                </IconContext.Provider>
              ) : (
                <IconContext.Provider value={{ color: "#fff", size: "17px" }}>
                  <button onClick={prevDocs}>
                    <RxTrackPrevious />
                  </button>
                </IconContext.Provider>
              )}

              <span>.........</span>
              {page * limit >= allContent.length ? (
                <IconContext.Provider
                  value={{ color: "#979797", size: "17px" }}
                >
                  <button onClick={nextDocs} disabled>
                    <RxTrackNext />
                  </button>
                </IconContext.Provider>
              ) : (
                <IconContext.Provider value={{ color: "#fff", size: "17px" }}>
                  <button onClick={nextDocs}>
                    <RxTrackNext />
                  </button>
                </IconContext.Provider>
              )}
            </SC.IconWrapper>
          </IconContext.Provider>
          <ThemeSwitcher />
        </div>
      </SC.SideBarStyled>)
  } 
};

export default SideBar;
