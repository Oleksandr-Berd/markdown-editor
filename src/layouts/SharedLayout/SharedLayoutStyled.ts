import styled from "@emotion/styled";

type StyleProps = {
    isSideBar: boolean;
}

export const SharedLayoutStyled = styled.main`
position: relative;

height: 100%;

background-color: ${props => props.theme.backgroundColor}
`

export const CommonWrapper = styled.div<StyleProps>`
margin-left: ${props => props.isSideBar ? "65%" : "0"};
overflow: hidden;
`