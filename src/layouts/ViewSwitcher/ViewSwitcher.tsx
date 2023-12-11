import {  useState } from "react";

import * as SC from "./ViewSwitcherStyled";

import previewIcon from "../../assets/images/icon-hide-preview.svg";
import markIcon from "../../assets/images/icon-show-preview.svg";

import FunctionButton from "../../components/FunctionButton/FunctionButton";

type Props = {
     specificName: string | null;
}

const ViewSwitcher: React.FC<Props> = ({specificName}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <SC.ViewSwitcherStyled>
      <h2>{isEdit ? "preview" :"markdown"}</h2>
      <FunctionButton
        icon={isEdit ? previewIcon : markIcon}
        typeName="switcher"
        handle={toggleEdit}
        isEdit={isEdit}
        specificName={specificName || null}
      />
    </SC.ViewSwitcherStyled>
  );
};

export default ViewSwitcher;
