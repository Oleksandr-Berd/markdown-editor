import ReactMarkdown from "react-markdown";

import * as SC from "./EditedContentPageStyled";

import { Content } from "../../utils/types/types";

type Props = {
  doc: Content | undefined;
};

const EditedContentPage: React.FC<Props> = ({ doc }) => {
  const { content } = doc!;

  return (
    <SC.EditedList>
      <ReactMarkdown>{content}</ReactMarkdown>
    </SC.EditedList>
  );
};

export default EditedContentPage;
