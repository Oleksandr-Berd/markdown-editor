import styled from "@emotion/styled";

export const ViewSwitcherStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: 12px;
  padding-bottom: 14px;
  padding-left: 16px;
  padding-right: 16px;

  text-transform: uppercase;

background-color: ${props => props.theme.viewSwitcherBg};
  color: ${(props) => props.theme.secondaryText};

  & > h2 {
    font-family: "RobotoRegular";
    font-size: 14px;
    letter-spacing: 2px;
  }
`;
