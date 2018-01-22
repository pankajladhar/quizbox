import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RadioButton from './../RadioButton';
import './Answer.css';

class Answer extends Component {
    render() {
        return (
            <div className="Answer">
                <span>{this.props.index + 1}.</span>
                <RadioButton key={`answer-${this.props.index}`} data={this.props.data} />
            </div>
        );
    }
}

Answer.propTypes = {

};

export default Answer;