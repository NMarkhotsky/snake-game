import styled from 'styled-components';

export const GameContainer = styled.div`
  background-color: #ffffdd;
  height: 100vh;
  overflow: hidden;
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;

  & > span {
    margin-right: 10px;
  }

  & > svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;

    cursor: pointer;
  }
`;

export const Button = styled.button`
  margin-right: 10px;
  padding: 1px 5px;
  border-radius: 6px;
  border: none;
  background-color: #d2de32;

  cursor: pointer;
`;

export const GameHighScore = styled.div`
  background-color: #d2de32;
  color: #000;
  font-variant: small-caps;
  text-align: center;
  font-size: 24px;
  font-weight: 900;
  width: fit-content;
  margin-inline: auto;
  margin: 10px auto;
  padding: 10px 15px;
  border-radius: 16px;
`;

export const GameScore = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;

  & > span:first-child {
    display: block;
    padding: 10px 15px;

    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    background-color: #61a3ba;
    color: #fff;
  }

  & > span:last-child {
    display: block;
    padding: 10px 15px;

    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    background-color: #d2de32;
    color: #222;
  }
`;

export const GameArea = styled.div`
  position: relative;
  width: 400px;
  height: 400px;

  display: flex;

  margin: 20px auto 0 auto;

  outline: 10px solid #61a3ba;
  background-color: #fff;
`;
