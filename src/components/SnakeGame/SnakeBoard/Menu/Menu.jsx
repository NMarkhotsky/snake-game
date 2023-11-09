import { StartButton, WrapperMenu } from './Menu.styled';

// eslint-disable-next-line react/prop-types
const Menu = ({ onRouteChange }) => {
  return (
    <WrapperMenu>
      <div>
        <StartButton onClick={onRouteChange} type="button" value="start game" />
      </div>
    </WrapperMenu>
  );
};

export default Menu;
