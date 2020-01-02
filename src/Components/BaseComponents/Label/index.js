import React from "react";
import PropTypes from "prop-types";

const Label = props => {
  const { htmlFor, className, text } = props;
  return (
    <label htmlFor={htmlFor} className={`Label ${className}`}>
      {text}
    </label>
  );
};

Label.defaultProps = {
  className: ""
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  className: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default Label;
