import * as SC from "./ViewSwitcherStyled"

import previewIcon  from "../../assets/images/icon-hide-preview.svg"
import markIcon from "../../assets/images/icon-show-preview.svg";

import FunctionButton from "../../components/FunctionButton/FunctionButton";

const ViewSwitcher: React.FC = () => {

  return (
    <SC.ViewSwitcherStyled>
      <h2>markdown</h2>
      <FunctionButton icon={markIcon} typeName="switcher" />
    </SC.ViewSwitcherStyled>
  );
};

export default ViewSwitcher;
