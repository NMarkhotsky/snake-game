/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { getScores } from '../../../services/authApi';
import { GameOverModalContainer } from '../GameOverModal/GameOverModal.styled';
import { StartButton } from '../Menu/Menu.styled';
import { BestScoresContainer, List, ListItem } from './ListScores.styled';

export const ListScores = ({ isOpen }) => {
  const [userScores, setUserScores] = useState([]);

  const getUserScores = async () => {
    const scores = await getScores();
    setUserScores(scores);
  };

  useEffect(() => {
    getUserScores();
  }, []);

  return (
    <GameOverModalContainer>
      <BestScoresContainer>
        <h2>🏆Best Scores🏆</h2>
        <List>
          {userScores.map(({ name, score }) => (
            <ListItem key={name}>
              <p>{name}</p>
              <p>{score}</p>
            </ListItem>
          ))}
        </List>
        <StartButton onClick={() => isOpen()}>Close</StartButton>
      </BestScoresContainer>
    </GameOverModalContainer>
  );
};
