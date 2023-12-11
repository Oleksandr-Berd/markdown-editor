import styled from "@emotion/styled";

export const ContentList = styled.ul`
  min-height: 100vh;

  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 12px;

  color: ${(props) => props.theme.secondaryText};
`;

export const ContentListItem = styled.li`
  font-family: "RobotoMono";
  font-size: 14px;
  line-height: 1.7;

  &:not(:last-child) {
    margin-bottom: 36px;
  }
`;