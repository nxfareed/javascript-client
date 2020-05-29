import PropTypes from "prop-types";
import React from "react";
import Input, { Paragraph } from "./style";

const TextField = (props) => {
  console.log("textfield demo", props);
  const { onChange, error, onBlur } = props;
  return (
    <>
      <Input type="text" onChange={onChange} onBlur={onBlur} />

      <Paragraph>{error}</Paragraph>
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
