import PropTypes from 'prop-types';
import { FoodWrapper } from './Food.styled';

const Food = ({ dot }) => {
  const style = {
    left: `${dot[0]}%`,
    top: `${dot[1]}%`,
  };
  return <FoodWrapper style={style} />;
};

export default Food;

Food.propTypes = {
  dot: PropTypes.array.isRequired,
};
