import { useMediaQuery } from "usehooks-ts";
import { ContentType } from "../../utils/types/types";
import * as SC from "./HomePageStyled";
import Loader from "../../components/Loader/Loader";
import ReactMarkdown from 'react-markdown';

const HomePage: React.FC<ContentType> = ({ defaultContent }) => {
  const contentArray = defaultContent
    ? defaultContent.content.split("\n\n")
    : null;

const isTablet = useMediaQuery("(min-width:768px)")

  return (
    <SC.HomePageStyled>
      {isTablet ? (
        <>
          <div>
            {contentArray ? (
              contentArray.map((el) => (
                <SC.ContentItem key={el}>{el}</SC.ContentItem>
              ))
            ) : (
              <Loader />
            )}
          </div>
          <div>
            {defaultContent ? (
              <ReactMarkdown>{defaultContent.content}</ReactMarkdown>
            ) : (
              <Loader />
            )}
          </div>
        </>
      ) : (
        <>
          {contentArray ? (
            contentArray.map((el) => (
              <SC.ContentItem key={el}>{el}</SC.ContentItem>
            ))
          ) : (
            <Loader />
          )}
        </>
      )}
    </SC.HomePageStyled>
  );
};

export default HomePage;
