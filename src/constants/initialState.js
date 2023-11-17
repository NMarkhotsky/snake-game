import { getRandomFood } from '../utils';

export const initialState = {
  food: getRandomFood(),
  direction: 'RIGHT',
  speed: 200,
  speedLevel: 0,
  route: 'menu',
  snakeDots: [
    [0, 0],
    [0, 4],
    [0, 8],
  ],
};
