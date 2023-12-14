import styled from "@emotion/styled";

export const HomePageStyled = styled.ul`
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 12px;

  color: ${(props) => props.theme.secondaryText};

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    padding-top: 0;
    padding-bottom: 0;

    & > div:first-of-type {
      padding-top: 9px;
      padding-bottom: 14px;
      padding-right: 16px;
    }

    & > div:last-child {
      min-height: 100vh;

      padding-top: 22px;
      padding-bottom: 19px;
      padding-left: 24px;
      padding-right: 24px;

      border-left: 1px solid #5a6069;

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
        padding-left: 16px;

        &:before {
          content: "•";
          color: red;
          font-size: 1.5em;
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
    }
  }
`;

export const ContentItem = styled.p`
  font-family: "RobotoMono";
  font-size: 14px;
  line-height: 1.7;

  &:not(:last-child) {
    margin-bottom: 36px;
  }
`;
