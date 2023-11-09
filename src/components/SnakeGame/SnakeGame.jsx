// import { useState, useEffect } from 'react';
// import Snake from './Snake';
// import Food from './Food';
// import Menu from './Menu';

// const getRandomFood = () => {
//   let min = 1;
//   let max = 98;
//   let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
//   let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
//   return [x, y];
// };

// const initialState = {
//   food: getRandomFood(),
//   direction: 'RIGHT',
//   speed: 100,
//   route: 'menu',
//   snakeDots: [
//     [0, 0],
//     [0, 2],
//   ],
// };

// const App = () => {
//   const [state, setState] = useState(initialState);

//   const onKeyDown = (e) => {
//     switch (e.keyCode) {
//       case 37:
//         setState({ ...state, direction: 'LEFT' });
//         break;
//       case 38:
//         setState({ ...state, direction: 'UP' });
//         break;
//       case 39:
//         setState({ ...state, direction: 'RIGHT' });
//         break;
//       case 40:
//         setState({ ...state, direction: 'DOWN' });
//         break;
//     }
//   };

//   const moveSnake = () => {
//     let dots = [...state.snakeDots];
//     let head = dots[dots.length - 1];
//     if (state.route === 'game') {
//       switch (state.direction) {
//         case 'RIGHT':
//           head = [head[0] + 2, head[1]];
//           break;
//         case 'LEFT':
//           head = [head[0] - 2, head[1]];
//           break;
//         case 'DOWN':
//           head = [head[0], head[1] + 2];
//           break;
//         case 'UP':
//           head = [head[0], head[1] - 2];
//           break;
//       }
//       dots.push(head);
//       dots.shift();
//       setState({ ...state, snakeDots: dots });
//     }
//   };

//   const onSnakeOutOfBounds = () => {
//     let head = state.snakeDots[state.snakeDots.length - 1];
//     if (state.route === 'game') {
//       if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
//         gameOver();
//       }
//     }
//   };

//   const onSnakeCollapsed = () => {
//     let snake = [...state.snakeDots];
//     let head = snake[snake.length - 1];
//     snake.pop();
//     snake.forEach((dot) => {
//       if (head[0] === dot[0] && head[1] === dot[1]) {
//         gameOver();
//       }
//     });
//   };

//   const onSnakeEats = () => {
//     let head = state.snakeDots[state.snakeDots.length - 1];
//     let food = state.food;
//     if (head[0] === food[0] && head[1] === food[1]) {
//       setState({
//         ...state,
//         food: getRandomFood(),
//       });
//       increaseSnake();
//       increaseSpeed();
//     }
//   };

//   const increaseSnake = () => {
//     let newSnake = [...state.snakeDots];
//     newSnake.unshift([]);
//     setState({
//       ...state,
//       snakeDots: newSnake,
//     });
//   };

//   const increaseSpeed = () => {
//     if (state.speed > 10) {
//       setState({
//         ...state,
//         speed: state.speed - 20,
//       });
//     }
//   };

//   const onRouteChange = () => {
//     setState({
//       ...state,
//       route: 'game',
//     });
//   };

//   const gameOver = () => {
//     alert(`GAME OVER, your score is ${state.snakeDots.length - 2}`);
//     setState(initialState);
//   };

//   useEffect(() => {
//     const interval = setInterval(moveSnake, state.speed);
//     document.onkeydown = onKeyDown;

//     return () => clearInterval(interval);
//   }, [state]);

//   return (
//     <div>
//       {state.route === 'menu' ? (
//         <div>
//           <Menu onRouteChange={onRouteChange} />
//         </div>
//       ) : (
//         <GameArea>
//           <Snake snakeDots={state.snakeDots} />
//           <Food dot={state.food} />
//         </GameArea>
//       )}
//     </div>
//   );
// };

// export default App;
