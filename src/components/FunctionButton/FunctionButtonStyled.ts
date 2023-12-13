import styled from "@emotion/styled";
import { ButtonType } from "../../utils/types/types";

export const FunctionButtonStyled = styled.button<Partial<ButtonType>>`
  position: ${(props) =>
    props.typeName === "save" && props.locationPage === "draft"
      ? "absolute"
      : "static"};
  top: ${(props) =>
    props.typeName === "save" && props.locationPage === "draft" ? "-60px" : "auto"};
  right: ${(props) =>
    props.typeName === "save" && props.locationPage === "draft" ? "0" : "auto"};


  width: ${(props) =>
    props.typeName === "add" || props.typeName === "confirmDelete"
      ? "100%"
      : props.typeName === "save"
      ? "40px"
      : "auto"};

  visibility: ${(props) =>
    props.typeName === "save" && props.locationPage === "/new"
      ? "hidden"
      : "visible"};

  padding-top: ${(props) => (props.typeName === "switcher" ? "0px" : "12px")};
  padding-bottom: ${(props) =>
    props.typeName === "switcher" ? "0px" : "12px"};
  padding-left: ${(props) => (props.typeName === "switcher" ? "0px" : "12px")};
  padding-right: ${(props) => (props.typeName === "switcher" ? "0px" : "12px")};

  margin-top: ${(props) =>
    props.typeName === "save" && props.locationPage === "draft"
      ? "8px"
      : "auto"};

  margin-left: ${(props) => (props.typeName === "delete" ? "12px" : "0")};
  margin-right: ${(props) =>
    props.typeName === "save" && props.locationPage === "draft"
      ? "8px"
    : "0"};

    font-family: "RobotoRegular";
    font-size: 15px;

  background-color: ${(props) =>
    props.typeName === "save"
      ? "#E46643"
      : props.typeName === "add" || props.typeName === "confirmDelete"
      ? "#E46643"
      : "transparent"};

  color: ${(props) => (props.typeName === "add" || "confirmDelete" ? "#fff" : "none")};

  border: none;
  border-radius: 4px;

  & > img {
    height: ${(props) => (props.typeName === "switcher" ? "16px" : "auto")};
  }
`;
