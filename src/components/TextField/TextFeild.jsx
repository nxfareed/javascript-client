import PropTypes from "prop-types";
import React from "react";
import Input, { Err } from "./style";

const TextField = (props) => {
  console.log("textfield demo", props);
  const { onChange, error, onBlur, value, disabled } = props;
  return (
    <>
      <Input
        type="text"
        value={value}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
      />

      <Err>{error}</Err>
    </>
  );
};

TextField.propTypes = {
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  onBlur: PropTypes.objectOf.isRequired,
};

TextField.defaultProps = {
  error: "",
};

export default TextField;
