import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgb(124, 129, 135, 0.5);
`;

export const ModalStyled = styled.div`
  position: absolute;

  width: calc(343px - 24px * 2);

  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: left;

  background-color: ${(props) => props.theme.modalBg};

  border-radius: 4px;

  & > h3 {
    margin-bottom: 16px;

    font-family: "RobotoSlabBold";
    font-size: 20px;

    color: ${(props) => props.theme.text};
  }

  & > p {
    margin-bottom: 16px;

    font-family: "RobotoSlabRegular";
    font-size: 14px;
    line-height: 1.7;

    color: ${(props) => props.theme.secondaryText};
  }
`;

export const ConfirmDeleteButton = styled.button`
  width: 100%;

  padding-top: 10px;
  padding-bottom: 12px;

  font-size: 15px;
  font-family: "RobotoRegular";

  background-color: #e46643;
  color: #fff;
`;
