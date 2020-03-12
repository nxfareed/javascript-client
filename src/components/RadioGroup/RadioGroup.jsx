import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { P } from './style';

const RadioGroup = (props) => {
  const {
    options, onChange, error, onBlur,
  } = props;
  return (
    <>

      {
        options && options.length && options.map(({ value, label }) => (
          <Fragment key={label}>
            <input type="radio" name="cricketGroup" value={value} error={error} onChange={onChange} onBlur={onBlur} />
            {label}
            <br />
          </Fragment>
        ))
      }
      <P>
        {error}
      </P>
    </>
  );
};
RadioGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  onBlur: PropTypes.objectOf.isRequired,
};
RadioGroup.defaultProps = {
  error: '',
};
export default RadioGroup;
