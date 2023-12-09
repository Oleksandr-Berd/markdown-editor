import * as SC from "./HomePageStyled";

type Props = {
  defaultContent:
    | {
        content: string;
      }
    | undefined;
};

const HomePage: React.FC<Props> = ({ defaultContent }) => {


const contentArray = defaultContent ? defaultContent.content.split("\n\n") : null

  return (
    <SC.HomePageStyled>
      {contentArray ? contentArray.map(el => <p>{el}</p>) : "............"}
    </SC.HomePageStyled>
  );
};

export default HomePage;
