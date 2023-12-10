import { ContentType } from "../../utils/types/types";
import * as SC from "./HomePageStyled";


const HomePage: React.FC<ContentType> = ({ defaultContent }) => {
  const contentArray = defaultContent
    ? defaultContent.content.split("\n\n")
    : null;



  return (
    <SC.HomePageStyled>
      {contentArray
        ? contentArray.map((el) => (
            <SC.ContentItem key={el}>
              {el}
            </SC.ContentItem>
          ))
        : "............"}
    </SC.HomePageStyled>
  );
};

export default HomePage;
