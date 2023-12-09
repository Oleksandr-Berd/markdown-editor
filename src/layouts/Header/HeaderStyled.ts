import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

background-color: ${props => props.theme.headerBg};
`

export const CommonWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  padding-top: 8px;
  padding-bottom: 8px;
  /* padding-left: 24px; */
  padding-right: 8px;
`;

export const DocWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;

margin-right: 77px;

color: #fff;

& > svg{
    margin-right: 16px;
}
`

export const ButtonsWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`