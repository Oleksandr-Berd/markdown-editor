import styled from "@emotion/styled";

type StyleProps = {
    isSideBar: boolean;
}

export const SharedLayoutStyled = styled.main<StyleProps>`
  position: relative;

  overflow: hidden;

  height: ${(props) => (props.isSideBar ? "100vh" : "100%")};

  background-color: ${(props) => props.theme.backgroundColor};
`;

export const CommonWrapper = styled.div<StyleProps>`
width: 100%;


margin-left: ${props => props.isSideBar ? "65%" : "0"};
overflow: hidden;
`