import { useState, useEffect } from 'react';
import Snake from './Snake/Snake';
import Food from './Food/Food';
import Menu from './Menu/Menu';
import { GameArea } from './SnakeBoard.styled';

function getRandomFood() {
  const min = 1;
  const max = 49; // Зміни верхню границю для генерації їжі
  const x = Math.floor(Math.random() * (max - min + 1)) * 2;
  const y = Math.floor(Math.random() * (max - min + 1)) * 2;

  return [x, y];
}

const initialState = {
  food: getRandomFood(),
  direction: 'RIGHT',
  speed: 200,
  route: 'menu',
  snakeDots: [
    [0, 0],
    [0, 2],
  ],
};

const GameBoard = () => {
  const [state, setState] = useState(initialState);
  const [isPaused, setIsPaused] = useState(false);

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

    if (e.keyCode === 32) {
      // Код клавіші "пробіл"
      setIsPaused(!isPaused); // Зміна стану паузи
      return;
    }
  };

  const moveSnake = () => {
    if (state.route === 'game') {
      let dots = [...state.snakeDots];
      let head = dots[dots.length - 1];
      switch (state.direction) {
        case 'RIGHT':
          head = [head[0] + 2, head[1]];
          break;
        case 'LEFT':
          head = [head[0] - 2, head[1]];
          break;
        case 'DOWN':
          head = [head[0], head[1] + 2];
          break;
        case 'UP':
          head = [head[0], head[1] - 2];
          break;
        default:
          break;
      }
      dots.push(head);

      if (head[0] === state.food[0] && head[1] === state.food[1]) {
        onSnakeEats();
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
    increaseSpeed();
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
  };

  const gameOver = () => {
    alert(`GAME OVER, your score is ${state.snakeDots.length - 2}`);
    setState({ ...initialState, route: 'menu' });
  };

  useEffect(() => {
    const interval = setInterval(moveSnake, state.speed);
    document.addEventListener('keydown', onKeyDown);

    onSnakeOutOfBounds();
    onSnakeCollapsed();

    return () => {
      clearInterval(interval);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [state]);

  return (
    <div>
      {state.route === 'menu' ? (
        <div>
          <Menu onRouteChange={onRouteChange} />
        </div>
      ) : (
        <GameArea>
          <Snake snakeDots={state.snakeDots} />
          <Food dot={state.food} />
        </GameArea>
      )}
    </div>
  );
};

export default GameBoard;
