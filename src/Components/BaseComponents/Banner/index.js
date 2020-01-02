import React from "react";
import PropTypes from "prop-types";
import "./Banner.scss";

const Banner = props => {
  const { type, children } = props;
  return <div className={`Banner Banner--${type}`}>{children}</div>;
};

Banner.propTypes = {
  type: PropTypes.oneOf(["Info"]),
  children: PropTypes.any.isRequired
};

Banner.defaultProps = {
  type: "Info"
};

export default Banner;
