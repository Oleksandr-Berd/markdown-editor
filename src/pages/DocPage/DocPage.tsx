import { useEffect } from "react";
import { useParams } from "react-router-dom";

import * as SC from "./DocPageStyled"

import { Content } from "../../utils/types/types";
import Loader from "../../components/Loader/Loader";
import { useMediaQuery } from "usehooks-ts";
import ReactMarkdown from 'react-markdown';

type Props = {
  doc: Content | null;
  fetchDoc: (name: string) => void;
};

const DocPage: React.FC<Props> = ({ fetchDoc, doc }) => {
  const { name } = useParams();

const isTablet = useMediaQuery("(min-width:768px)")

  useEffect(() => {
    if (name) {
      fetchDoc(name);
    }
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  const contentArray = doc ? doc.content.split("\n\n") : null;

  return (
    <SC.ContentList>
      {isTablet ? (
        <>
          <div>
            {contentArray ? (
              contentArray.map((el) => (
                <SC.ContentListItem key={el}>{el}</SC.ContentListItem>
              ))
            ) : (
              <Loader />
            )}
          </div>
          <div>
            {doc ? <ReactMarkdown>{doc.content}</ReactMarkdown> : <Loader />}
          </div>
        </>
      ) : (
        <>
          {contentArray ? (
            contentArray.map((el) => (
              <SC.ContentListItem key={el}>{el}</SC.ContentListItem>
            ))
          ) : (
            <Loader />
          )}
        </>
      )}
    </SC.ContentList>
  );
};

export default DocPage;
