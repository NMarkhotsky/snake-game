import PropTypes from 'prop-types';
import { SnakeWrapper } from './Snake.styled';

const Snake = ({ snakeDots }) => {
  return (
    <div>
      {snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
        };
        return <SnakeWrapper key={i} style={style} />;
      })}
    </div>
  );
};
export default Snake;

Snake.propTypes = {
  snakeDots: PropTypes.array.isRequired,
};
