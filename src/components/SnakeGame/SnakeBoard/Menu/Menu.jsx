import { StartButton, WrapperMenu } from './Menu.styled';

// eslint-disable-next-line react/prop-types
const Menu = ({ onRouteChange }) => {
  return (
    <WrapperMenu>
      <StartButton onClick={onRouteChange} type="button" value="start game">
        Start Game
      </StartButton>
    </WrapperMenu>
  );
};

export default Menu;
