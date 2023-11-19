import PropTypes from 'prop-types';
import { StartButton, WrapperMenu } from './Menu.styled';

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

Menu.propTypes = {
  onRouteChange: PropTypes.func.isRequired,
};
