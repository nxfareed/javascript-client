import React from "react";
import PropTypes from "prop-types";

const Text = (props) => {
  const { first, second, operator, children } = props;
  let { result } = props;
  switch (operator) {
    case "+":
      result = first + second;
      break;
    case "-":
      result = first - second;
      break;
    case "/":
      result = first / second;
      break;
    case "*":
      result = first * second;
      break;
    default:
      break;
  }
  if (children) {
    return children(first, second, result);
  }
  return (
    <>
      <p>
        {" "}
        {first} {operator} {second} = {result}{" "}
      </p>
    </>
  );
};

Text.propTypes = {
  first: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired,
  operator: PropTypes.string.isRequired,
  result: PropTypes.any.isRequired,
  children: PropTypes.func,
};

Text.defaultProps = {
  children: undefined,
};

export default Text;
