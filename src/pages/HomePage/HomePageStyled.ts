import styled from "@emotion/styled";

export const HomePageStyled = styled.div`

color: ${props => props.theme.secondaryText};

& > p:not(:last-child){
margin-bottom: 24px;
}
`