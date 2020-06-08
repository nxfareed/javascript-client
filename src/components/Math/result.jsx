import PropTypes from "prop-types";
const Result = (props) => {
  const { first, second, operator } = props;
  let { result } = props;
  switch (operator) {
    case "+":
      result = first + second;
      break;
    case "-":
      result = first - second;
      break;
    case "/":
      if (first === 0 && second === 0) {
        result = undefined;
      } else result = first / second;
      break;
    case "*":
      result = first * second;
      break;
    default:
      break;
  }
  return result;
};
Result.propTypes = {
  first: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired,
  operator: PropTypes.string.isRequired,
  result: PropTypes.any.isRequired,
};

export default Result;
