import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RadioButton from './../RadioButton';
import './Answer.scss';

class Answer extends Component {
    render() {
        return (
            <div className={`Answer ${this.props.checked ? 'checked' : 'unchecked'}`}>
                <span>{this.props.index + 1}.</span>
                <RadioButton
                    checked={this.props.checked}
                    id={this.props.id}
                    onChange={this.props.onChange}
                    text={this.props.data} />
            </div>
        );
    }
}

Answer.propTypes = {
    index: PropTypes.number.isRequired,
    checked: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    data: PropTypes.string.isRequired
};

export default Answer;