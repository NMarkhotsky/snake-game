/* eslint-disable react/prop-types */
import { StartButton } from '../Menu/Menu.styled';
import {
  FinalScore,
  GameOverModalContainer,
  GameOverModalWrapper,
} from './GameOverModal.styled';

export const GameOverModal = ({ onRouteChange, score }) => {
  return (
    <GameOverModalContainer>
      <GameOverModalWrapper>
        <h2>Game Over</h2>
        <FinalScore>
          🏆Your Final Score: <span>{score}</span>🏆
        </FinalScore>
        <StartButton onClick={() => onRouteChange()}>Play Again</StartButton>
      </GameOverModalWrapper>
    </GameOverModalContainer>
  );
};
