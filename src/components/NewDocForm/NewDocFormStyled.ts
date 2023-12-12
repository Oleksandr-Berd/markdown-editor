import styled from "@emotion/styled";

export const NewDocFormStyled = styled.form`
  height: 100vh;

  display: flex;
  flex-direction: column;

  & > div {
    min-height: 70%;
;

    padding-top: 16px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const InputStyled = styled.input`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 20px;

  font-size: 14px;
  font-family: "";

  background-color: #c1c4cb;
  color: #1d1f22;

  border: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #1d1f22;
  }
`;

export const TextareaStyled = styled.textarea`
height: 100%;
width: 100%;

  background-color: inherit;
  color: ${(props) => props.theme.secondaryText};

  border: none;
  &:focus {
    outline: none;
  }
`;
