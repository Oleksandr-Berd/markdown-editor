import styled from "@emotion/styled";

export const SideBarStyled = styled.aside`
  position: absolute;
  top: 0;
  left: 0;

  height: 100vh;
  width: calc(65% - 24 * 2px);

  padding-top: 27px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: #1d1f22;

  & > h2 {
    margin-bottom: 27px;

    text-transform: uppercase;

    font-family: "Com";
    font-size: 15px;
    letter-spacing: 5px;
    color: #fff;
  }

  & > h3 {
    margin-bottom: 29px;

    text-transform: uppercase;

    font-family: "RobotoMed";
    font-size: 14px;
    letter-spacing: 2px;
    color: #7c8187;
  }
`;

export const SideBarList = styled.ul`
margin-top: 24px;
`

export const SideBarItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 26px;
  }

  & > img {
    margin-right: 16px;
  }
`;

export const Date = styled.p`
  margin-bottom: 3px;

  font-size: 13px;
  font-family: "RobotoLight";

  color: #7c8187;
`;

export const Name = styled.p`
  font-size: 15px;
  font-family: "RobotoRegular";
  color: #fff;
`;
