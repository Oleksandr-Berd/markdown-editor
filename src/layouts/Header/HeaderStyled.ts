import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme.headerBg};

  @media (min-width: 768px) {
    justify-content: flex-start;

  }
`;

export const CommonWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 8px;

  margin-left: 24px;

  @media (min-width: 768px) {
    align-items: flex-start;

    padding-top: 16px;
    padding-right: 16px;

    margin-left: 0;
  }
`;

export const DocWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  text-align: center;

  color: #fff;

  & > svg {
    margin-right: 12px;
    margin-left: 12px;
  }

  @media (min-width: 768px) {

    padding-top: 17px;
    padding-bottom: 19px;

    margin-left: 24px;
    margin-right: 310px;

    text-align: left;

    & > svg {
      margin-right: 16px;
      margin-left: 0px;
    }

    & p:first-of-type {
      margin-bottom: 3px;

      font-family: "RobotoLight";
      font-size: 13px;

      color: #7c8187;
    }

    & p:last-child{
      font-family: "RobotoRegular";
      font-size: 15px;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  
`;
