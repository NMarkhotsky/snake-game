import { useState, useEffect } from 'react';
import Snake from './Snake/Snake';
import Food from './Food/Food';
import Menu from './Menu/Menu';
import {
  GameArea,
  GameContainer,
  GameHighScore,
  GameScore,
  GameTitle,
} from './SnakeGame.styled';
import { getRandomFood } from '../../utils';
import { initialState } from '../../constants';
import { GrLogout } from 'react-icons/gr';
import { logout } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';

const SnakeGame = () => {
  const [state, setState] = useState(initialState);
  const [score, setScore] = useState(0);
  const [eatFood, setEatFood] = useState(0);

  console.log('score: ', score);
  const dispatch = useDispatch();
  const { user } = useAuth();

  useEffect(() => {
    const interval = setInterval(moveSnake, state.speed);
    document.addEventListener('keydown', onKeyDown);

    onSnakeOutOfBounds();
    onSnakeCollapsed();

    if (score >= 50 && score / 50 > state.speedLevel) {
      setState((prevState) => ({
        ...prevState,
        speedLevel: prevState.speedLevel + 1,
      }));
      increaseSpeed();
      console.log('state.speed: ', state.speed);
    }

    return () => {
      clearInterval(interval);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [state, score]);

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
    const currentDirection = state.direction;
    let newDirection = currentDirection;

    switch (e.keyCode) {
      case 37:
        newDirection = 'LEFT';
        break;
      case 38:
        newDirection = 'UP';
        break;
      case 39:
        newDirection = 'RIGHT';
        break;
      case 40:
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
    if (state.route === 'game') {
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
    if (state.route === 'game') {
      const head = state.snakeDots[state.snakeDots.length - 1];
      if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
        gameOver();
      }
    }
  };

  const onSnakeCollapsed = () => {
    if (state.route === 'game') {
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
    if (state.route === 'game') {
      const newSnake = [...state.snakeDots];
      newSnake.unshift([]);

      setState((prevState) => ({
        ...prevState,
        snakeDots: newSnake,
      }));
    }
  };

  const increaseSpeed = () => {
    if (state.route === 'game' && state.speed > 10) {
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
  };

  const gameOver = () => {
    // alert(`GAME OVER, your score is ${score}`);
    setState({ ...initialState, route: 'menu' });
  };

  return (
    <GameContainer>
      <div>
        <GameTitle>Snake Game</GameTitle>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <span style={{ marginRight: '10px' }}>
            {user.name || user.user.name}
          </span>
          <GrLogout
            style={{ width: '24px', height: '24px', cursor: 'pointer' }}
            onClick={() => dispatch(logout())}
          />
        </div>
      </div>
      <GameHighScore>High Score: {score}</GameHighScore>
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
          <GameArea>
            <Snake snakeDots={state.snakeDots} />
            <Food dot={state.food} />
          </GameArea>
        </>
      )}
    </GameContainer>
  );
};

export default SnakeGame;
