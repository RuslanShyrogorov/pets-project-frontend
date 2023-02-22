import styled from 'styled-components';
import { style } from 'styled-system';
// import theme from 'services/theme'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1200;
`;

export const ModalContainer = styled.div`
  /* max-width: calc(100vw - 48px); */
  /* max-height: calc(100vh - 24px); */
  /* max-width: 90vw; */
  /* max-height: 90vh; */
  width: 280px;
  height: fit-content;
  margin-top: 160px;
  padding: 20px;
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CloseBtn = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #fdf7f2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;
