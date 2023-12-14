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

  background-color: ${(props) => props.theme.viewSwitcherBg};
  color: ${(props) => props.theme.secondaryText};

  & > h2 {
    font-family: "RobotoRegular";
    font-size: 14px;
    letter-spacing: 2px;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    padding-top: 0;
    padding-bottom: 0;

    & > div:last-child {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      padding-top: 12px;
      padding-bottom: 14px;
      padding-left: 16px;

      border-left: 1px solid #5a6069;

      & img {
        margin-top: 8px;
      }
    }

    & > div:first-of-type {
      padding-top: 12px;
      padding-bottom: 14px;
    }

    & button {
      margin-right: 0;
    }

    & h2 {
      font-family: "RobotoMed";
      font-size: 14px;
      color: ${(props) => props.theme.secondaryText};
    }
  }
`;
