import styled from "@emotion/styled";

export const EditedList = styled.div`
  min-height: 100vh;

  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 54px;

  color: ${(props) => props.theme.secondaryText};

  & h1 {
    margin-bottom: 22px;

    font-family: "RobotoSlabBold";
    font-size: 32px;
    color: ${(props) => props.theme.text};
  }

  & p {
    margin-bottom: 20px;

    font-family: "RobotoSlabRegular";
    font-size: 14px;
    line-height: 1.7;
  }

  & h2 {
    margin-bottom: 20px;

    font-family: "RobotoSlabLight";
    font-size: 28px;
    color: ${(props) => props.theme.text};
  }

  & h3 {
    margin-bottom: 20px;

    font-family: "RobotoSlabBold";
    font-size: 24px;
    color: ${(props) => props.theme.text};
  }

  & h4 {
    margin-bottom: 20px;

    font-family: "RobotoSlabBold";
    font-size: 20px;
    color: ${(props) => props.theme.text};
  }

  & h5 {
    margin-bottom: 20px;

    font-family: "RobotoSlabBold";
    font-size: 16px;
    color: ${(props) => props.theme.text};
  }

  & h6 {
    margin-bottom: 20px;

    font-family: "RobotoSlabBold";
    font-size: 14px;
    color: #e46643;
  }

  & code {
    font-family: "RobotoMono";

    color: ${(props) => props.theme.text};
  }

  & li {
    margin-bottom: 4px;

    font-family: "RobotoSlabRegular";
    font-size: 14px;
    line-height: 1.7;
  }

  & ol,
  & ul {
    margin-bottom: 20px;
  }

  & ul {
    list-style: none;
    padding-left: 20px;
  }

  & ul li {
    position: relative;
    padding-left: 16px; /* Adjust the left padding based on your preference */

    /* Add red dot */
    &:before {
      content: "•"; /* Unicode character for a bullet point */
      color: red;
      font-size: 1.5em; /* Adjust the size based on your preference */
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  & blockquote {
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    padding-right: 24px;

    margin: 0;
    margin-bottom: 20px;

    background-color: ${(props) => props.theme.blockquote};

    border-radius: 4px;
    border-left: 4px solid #e46643;
  }

  & blockquote a,
  & blockquote > p {
    margin: 0;

    color: ${(props) => props.theme.text};
  }

  & pre {
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    padding-right: 24px;

    background-color: ${(props) => props.theme.blockquote};

    border-radius: 4px;

    & > code {
      display: block; 
      white-space: pre-wrap;
      width: 100%;
    }
  }
`;
