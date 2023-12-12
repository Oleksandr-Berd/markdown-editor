import styled from "@emotion/styled";

export const NewDocFormStyled = styled.form`
  height: 100vh;

  display: flex;
  flex-direction: column;

  & > div {
    height: inherit;

    padding-top: 16px;
    padding-bottom: 54px;
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
  height: inherit;

  background-color: inherit;
  color: ${(props) => props.theme.secondaryText};

  border: none;
  &:focus {
    outline: none;
  }
`;
