import styled from "@emotion/styled";

type PropsStyled = {
  themeIcon: string
};

export const CommonWrapper = styled.div<PropsStyled>`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > svg:first-of-type {
    margin-right: 12px;
    fill: ${(props) => (props.themeIcon === "dark" ? "#fff" : "#5A6069")};
  }

  & > svg:last-of-type {
    margin-left: 12px;
    fill: ${(props) => (props.themeIcon === "light" ? "#fff" : "#5A6069")};
  }
`;