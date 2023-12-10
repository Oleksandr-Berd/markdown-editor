import styled from "@emotion/styled";
import { ButtonType } from "../../utils/types/types";



export const FunctionButtonStyled = styled.button<Partial <ButtonType>>`
padding-top: 12px;
padding-bottom: 12px;
padding-left: 12px;
padding-right: 12px;

margin-right: ${props => props.typeName === "delete" ? "12px" : "0"};

background-color: ${props => props.typeName === "save" ? "#E46643" : "transparent"};

border: none;
border-radius: 4px;
`