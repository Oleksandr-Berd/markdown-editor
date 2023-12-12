import styled from "@emotion/styled";
import { ButtonType } from "../../utils/types/types";

export const FunctionButtonStyled = styled.button<Partial<ButtonType>>`
  width: ${(props) => (props.typeName === "add" ? "100%" : "auto")};

  padding-top: ${(props) => (props.typeName === "switcher" ? "0px" : "12px")};
  padding-bottom: ${(props) =>
    props.typeName === "switcher" ? "0px" : "12px"};
  padding-left: ${(props) => (props.typeName === "switcher" ? "0px" : "12px")};
  padding-right: ${(props) => (props.typeName === "switcher" ? "0px" : "12px")};

  margin-right: ${(props) =>
    props.typeName === "draft"
      ? "auto"
      : "0"};
  margin-left: ${(props) =>
    props.typeName === "delete"
      ? "12px"
      : props.typeName === "draft"
      ? "auto"
      : "0"};

  background-color: ${(props) =>
    props.typeName === "save"
      ? "#E46643"
      : props.typeName === "add" || props.typeName === "draft"
      ? "#E46643"
      : "transparent"};

  color: ${(props) =>
    props.typeName === "add" || props.typeName === "draft" ? "#fff" : "none"};

  border: none;
  border-radius: 4px;

  & > img {
    height: ${(props) => (props.typeName === "switcher" ? "16px" : "auto")};
  }
`;
