import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
        {userScores.length > 0 ? (
          <List>
            {userScores.map(({ name, score }) => (
              <ListItem key={name}>
                <p>{name}</p>
                <p>{score}</p>
              </ListItem>
            ))}
          </List>
        ) : (
          <div>Loading...</div>
        )}
        <StartButton onClick={() => isOpen()}>Close</StartButton>
      </BestScoresContainer>
    </GameOverModalContainer>
  );
};

ListScores.propTypes = {
  isOpen: PropTypes.func.isRequired,
};
