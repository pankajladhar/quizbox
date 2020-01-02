import React from "react";
import PropTypes from "prop-types";
import "./FormField.scss";

const FormField = props => {
  const { className, children } = props;
  return <div className={`FormField ${className}`}>{children}</div>;
};

FormField.defaultProps = {
  className: ""
};

FormField.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired
};

export default FormField;
