import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const SideBarStyled = styled.aside`
  position: absolute;
  top: 0;
  left: 0;

  height: calc(100% - 57px);

  width: calc(65% - 24 * 2px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-top: 27px;
  padding-bottom: 30px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: #1d1f22;

  @media (min-width: 768px) {
    width: 33%;
  }

  @media (min-width: 1440px) {
    width: 17%;
  }

  & h2 {
    margin-bottom: 27px;

    text-transform: uppercase;

    font-family: "Com";
    font-size: 15px;
    letter-spacing: 5px;
    color: #fff;
  }

  & h3 {
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
`;

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

export const Name = styled(NavLink)`
  font-size: 15px;
  font-family: "RobotoRegular";
  color: #fff;
`;

export const IconWrapper = styled.div`
  margin-bottom: 24px;

  & svg:first-of-type {
    margin-right: 16px;
  }

  & span {
    margin-right: 16px;

    color: #fff;
  }
  & > button {
    padding: 0;

    background-color: transparent;
    border: none;
  }
`;
