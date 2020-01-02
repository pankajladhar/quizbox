import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = props => {
  const { className, disabled, type, value, onClick } = props;
  const handleClick = e => {
    onClick(e);
  };
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`Button ${className}`}
    >
      {value}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  className: ""
};

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
