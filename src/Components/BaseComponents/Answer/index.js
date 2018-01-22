import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RadioButton from './../RadioButton';
import './Answer.css';

class Answer extends Component {
    constructor(props) {
        super(props);  
    }
    
    render() {
        return (
            <div className={`Answer ${this.props.checked ? 'checked' : 'unchecked'}`}>
                <span>{this.props.index + 1}.</span>
                <RadioButton
                    checked={this.props.checked}
                    id={this.props.id}
                    onChange={this.props.onChange}
                    data={this.props.data} />
            </div>
        );
    }
}

Answer.propTypes = {

};

export default Answer;