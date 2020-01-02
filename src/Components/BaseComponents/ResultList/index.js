import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ResultList.scss'

class ResultList extends Component {
    render() {
        return (
            <div className="ResultList">
                <h2>Q. {this.props.question}</h2>
                <div className="ResultList__Item">
                    <span>You Answered</span>
                    <span className="ResultList__Item--Wrong">{this.props.userAnswer}</span>
                </div>
                <div className="ResultList__Item">
                    <span>Correct Answer</span>
                    <span className="ResultList__Item--Correct">{this.props.correctAnswer}</span>
                </div>
            </div>
        );
    }
}

ResultList.propTypes = {

};

export default ResultList;