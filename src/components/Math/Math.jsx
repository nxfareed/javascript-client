import React from "react";
import PropTypes from "prop-types";
import Result from "./result";

const Math = (props) => {
  const { first, second, operator, children } = props;
  let { result } = props;
  result = Result(props);
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
Math.defaultProps = {
  children: undefined,
};
export default Math;
