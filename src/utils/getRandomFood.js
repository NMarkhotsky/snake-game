export const getRandomFood = () => {
  const min = 1;
  const max = 24;
  const x = Math.floor(Math.random() * (max - min + 1)) * 4;
  const y = Math.floor(Math.random() * (max - min + 1)) * 4;

  return [x, y];
};
