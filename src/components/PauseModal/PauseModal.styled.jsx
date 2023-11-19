import styled from 'styled-components';

export const PausedModalContainer = styled.div`
  position: fixed;
  inset: 0;
  background-color: hsla(0, 0%, 10%, 0.7);
`;

export const PausedModal = styled.div`
  width: 500px;
  height: 300px;
  background-color: #61a3ba;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-content: center;
  border-radius: 1rem;
  text-align: center;

  & > h2 {
    font-size: 3rem;
  }

  & > .click-dir {
    color: white;
  }
`;

export const ClickDir = styled.p`
  color: hsl(0, 0%, 30%);
  font-style: italic;
  font-size: 1.3rem;
`;
