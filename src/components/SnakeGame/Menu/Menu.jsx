import PropTypes from 'prop-types';
import { StartButton, WrapperMenu } from './Menu.styled';

export const Menu = ({ onRouteChange }) => {
  return (
    <WrapperMenu>
      <StartButton onClick={onRouteChange} type="button" value="start game">
        Start Game
      </StartButton>
    </WrapperMenu>
  );
};

Menu.propTypes = {
  onRouteChange: PropTypes.func.isRequired,
};
