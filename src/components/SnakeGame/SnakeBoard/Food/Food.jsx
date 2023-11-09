/* eslint-disable react/prop-types */
import { FoodWrapper } from './Food.styled';

const Food = (props) => {
  const style = {
    left: `${props.dot[0]}%`,
    top: `${props.dot[1]}%`,
  };
  return <FoodWrapper style={style} />;
};

export default Food;
