import React, { Component } from "react";
import PropTypes from "prop-types";
import RadioButton from "./../RadioButton";
import "./Answer.scss";

const Answer = props => {
  const { checked, index, id, onChange, data } = props;
  return (
    <div className={`Answer ${checked ? "checked" : "unchecked"}`}>
      <span>{index + 1}.</span>
      <RadioButton checked={checked} id={id} onChange={onChange} text={data} />
    </div>
  );
};

Answer.propTypes = {
  index: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired
};

export default Answer;
