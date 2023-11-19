import { useState, useEffect } from 'react';
import Snake from './Snake/Snake';
import Food from './Food/Food';
import Menu from './Menu/Menu';
import {
  Button,
  GameArea,
  GameContainer,
  GameHighScore,
  GameScore,
  InfoBox,
} from './SnakeGame.styled';
import { getRandomFood } from '../../utils';
import { initialState } from '../../constants';
import { GrLogout } from 'react-icons/gr';
import { logout, updateUserScore } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { GameOverModal } from './GameOverModal/GameOverModal';
import { PauseModal } from '../PauseModal/PauseModal';
import { ListScores } from './ListScores/ListScores';

const SnakeGame = () => {
  const [state, setState] = useState(initialState);
  const [score, setScore] = useState(0);
  const [eatFood, setEatFood] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isOpenBestScores, setIsOpenBestScores] = useState(false);

  const dispatch = useDispatch();
  const { user } = useAuth();

  const game = state.route === 'game';

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        moveSnake();
      }
    }, state.speed);

    document.addEventListener('keydown', onKeyDown);

    onSnakeOutOfBounds();
    onSnakeCollapsed();

    if (score >= 50 && score / 50 > state.speedLevel) {
      setState((prevState) => ({
        ...prevState,
        speedLevel: prevState.speedLevel + 1,
      }));
      increaseSpeed();
    }

    return () => {
      clearInterval(interval);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [state, score, isPaused]);

  useEffect(() => {
    if (eatFood === 1) {
      setScore((prev) => prev + 1);
    } else if (eatFood === 2) {
      setScore((prev) => prev + 5);
    } else if (eatFood >= 3) {
      setScore((prev) => prev + 10);
    }
  }, [eatFood]);

  const onKeyDown = (e) => {
    console.log('e: ', e.key);
    if (e.key === ' ') {
      setIsPaused(!isPaused);
    }
    const currentDirection = state.direction;
    let newDirection = currentDirection;

    switch (e.key) {
      case 'ArrowLeft':
        newDirection = 'LEFT';
        break;
      case 'ArrowUp':
        newDirection = 'UP';
        break;
      case 'ArrowRight':
        newDirection = 'RIGHT';
        break;
      case 'ArrowDown':
        newDirection = 'DOWN';
        break;
      default:
        break;
    }

    if (newDirection !== currentDirection) {
      if (
        (newDirection === 'LEFT' && currentDirection !== 'RIGHT') ||
        (newDirection === 'RIGHT' && currentDirection !== 'LEFT') ||
        (newDirection === 'UP' && currentDirection !== 'DOWN') ||
        (newDirection === 'DOWN' && currentDirection !== 'UP')
      ) {
        setState({ ...state, direction: newDirection });
      }
    }
  };

  const moveSnake = () => {
    if (game) {
      let dots = [...state.snakeDots];
      let head = dots[dots.length - 1];
      switch (state.direction) {
        case 'RIGHT':
          head = [head[0] + 4, head[1]];
          break;
        case 'LEFT':
          head = [head[0] - 4, head[1]];
          break;
        case 'DOWN':
          head = [head[0], head[1] + 4];
          break;
        case 'UP':
          head = [head[0], head[1] - 4];
          break;
        default:
          break;
      }
      dots.push(head);

      if (head[0] === state.food[0] && head[1] === state.food[1]) {
        onSnakeEats();
        setEatFood((prev) => prev + 1);
      } else {
        dots.shift();
      }

      setState((prevState) => ({
        ...prevState,
        snakeDots: dots,
      }));
    }
  };

  const onSnakeOutOfBounds = () => {
    if (game) {
      const head = state.snakeDots[state.snakeDots.length - 1];
      if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
        gameOver();
      }
    }
  };

  const onSnakeCollapsed = () => {
    if (game) {
      const snake = [...state.snakeDots];
      const head = snake[snake.length - 1];
      snake.pop();
      snake.forEach((dot) => {
        if (head[0] === dot[0] && head[1] === dot[1]) {
          gameOver();
        }
      });
    }
  };

  const onSnakeEats = () => {
    const newFood = getRandomFood();

    setState((prevState) => ({
      ...prevState,
      food: newFood,
    }));

    increaseSnake();
  };

  const increaseSnake = () => {
    if (game) {
      const newSnake = [...state.snakeDots];
      newSnake.unshift([]);

      setState((prevState) => ({
        ...prevState,
        snakeDots: newSnake,
      }));
    }
  };

  const increaseSpeed = () => {
    if (game && state.speed > 10) {
      setState((prevState) => ({
        ...prevState,
        speed: prevState.speed - 20,
      }));
    }
  };

  const onRouteChange = () => {
    setState({
      ...initialState,
      route: 'game',
    });
    setScore(0);
    setEatFood(0);
    setIsGameOver(false);
  };

  const gameOver = () => {
    if (score > user.score) {
      dispatch(updateUserScore(score));
    }

    setIsGameOver(true);
    setState({ ...initialState, route: 'menu' });
  };

  const openBestScores = () => {
    setIsOpenBestScores((prevState) => !prevState);
  };

  return (
    <>
      <GameContainer>
        <div>
          <InfoBox>
            <Button onClick={openBestScores}>Best Scores</Button>
            <span>{user.name}</span>
            <GrLogout onClick={() => dispatch(logout())} />
          </InfoBox>
        </div>
        <GameHighScore>High Score: {user.score}</GameHighScore>

        {state.route === 'menu' ? (
          <Menu onRouteChange={onRouteChange} />
        ) : (
          <>
            {
              <GameScore>
                <span>Score</span>
                <span>{score}</span>
              </GameScore>
            }
            {
              <div
                style={{
                  textAlign: 'center',
                  marginBottom: '10px',
                  fontSize: '20px',
                }}
              >
                <span>
                  Press <strong style={{ color: '#a2c579' }}>space</strong> to
                  pause
                </span>
              </div>
            }
            <GameArea>
              <Snake snakeDots={state.snakeDots} />
              <Food dot={state.food} />
            </GameArea>
          </>
        )}
      </GameContainer>
      {isGameOver && (
        <GameOverModal onRouteChange={onRouteChange} score={score} />
      )}
      {isPaused && <PauseModal />}
      {isOpenBestScores && <ListScores isOpen={openBestScores} />}
    </>
  );
};

export default SnakeGame;
