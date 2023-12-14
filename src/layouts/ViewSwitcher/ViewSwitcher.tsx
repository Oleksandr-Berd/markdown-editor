import {  useState } from "react";

import * as SC from "./ViewSwitcherStyled";

import previewIcon from "../../assets/images/icon-hide-preview.svg";
import markIcon from "../../assets/images/icon-show-preview.svg";

import FunctionButton from "../../components/FunctionButton/FunctionButton";
import { useMediaQuery } from "usehooks-ts";

type Props = {
     specificName: string | null;
}

const ViewSwitcher: React.FC<Props> = ({specificName}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const isTablet = useMediaQuery("(min-width:768px)")

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <>
      {isTablet ? (
        <SC.ViewSwitcherStyled>
          <div>
            <h2>markdown</h2>
          </div>
          <div>
            <h2>preview</h2>
            <FunctionButton
              icon={isEdit ? previewIcon : markIcon}
              typeName="switcher"
              handle={toggleEdit}
              isEdit={isEdit}
              specificName={specificName || null}
            />
          </div>
        </SC.ViewSwitcherStyled>
      ) : (
        <SC.ViewSwitcherStyled>
          <h2>{isEdit ? "preview" : "markdown"}</h2>
          <FunctionButton
            icon={isEdit ? previewIcon : markIcon}
            typeName="switcher"
            handle={toggleEdit}
            isEdit={isEdit}
            specificName={specificName || null}
          />
        </SC.ViewSwitcherStyled>
      )}
    </>
  );
};

export default ViewSwitcher;
