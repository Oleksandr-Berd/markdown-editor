import styled from "@emotion/styled";

export const HomePageStyled = styled.div`
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 12px;

  color: ${(props) => props.theme.secondaryText};

  & > p:not(:last-child) {
    margin-bottom: 36px;
  }

  & > p {
    font-family: "RobotoMono";
    font-size: 14px;
    line-height: 1.7;
  }
`;