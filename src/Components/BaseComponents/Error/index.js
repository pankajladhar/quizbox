import React from "react";
import PropTypes from "prop-types";
import "./Error.scss";
const Error = props => {
  const { children } = props;
  return <div className="Error">{children}</div>;
};

Error.propTypes = {
  children: PropTypes.any.isRequired
};

export default Error;
