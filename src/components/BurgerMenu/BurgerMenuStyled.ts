import styled from "@emotion/styled";

export const BurgerMenuStyled = styled.button`
  min-width: 62px;
  max-height: 63px;

  padding-top: 21px;
  padding-bottom: 21px;
  padding-left: 16px;
  padding-right: 16px;

  background-color: #35393f;

  border: none;

  @media (min-width: 768px) {
    max-height: 72px;

    padding-top: 27px;
    padding-bottom: 27px;
    padding-left: 21px;
    padding-right: 21px;
  }
`;
