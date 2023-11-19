import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  from {
    transform: rotate(-15deg);
  }
  to {
    transform: rotate(15deg);
  }
`;

export const WrapperMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
`;

export const StartButton = styled.button`
  padding: 10px;
  border-radius: 7px;
  border: 0px;

  font-size: 18px;

  background-color: #d2de32;

  cursor: pointer;

  animation: ${rotateAnimation} 1000ms linear infinite alternate;
`;
