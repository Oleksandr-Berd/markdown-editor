import styled from "@emotion/styled";

type StyleProps = {
  typeName: "save" | "delete" | "switcher";
};

export const FunctionButtonStyled = styled.button<StyleProps>`
padding-top: 12px;
padding-bottom: 12px;
padding-left: 12px;
padding-right: 12px;

margin-right: ${props => props.typeName === "delete" ? "12px" : "0"};

background-color: ${props => props.typeName === "save" ? "#E46643" : "transparent"};

border: none;
border-radius: 4px;
`