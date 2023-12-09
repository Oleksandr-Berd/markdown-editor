import styled from "@emotion/styled";

export const ErrorWrapper = styled.div`
  height: 100vh;

  padding-top: 200px;

  text-align: center;

  background-color: ${(props) => props.theme.backgroundColor};

  & > h1 {
    font-family: "RobotoSlabBold";
    font-style: italic;

    color: #e46643;
  }
`;
