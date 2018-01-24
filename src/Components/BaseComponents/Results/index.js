import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from './../Button';
import ResultList from './../ResultList';

import './Results.css'

class Results extends PureComponent {
    constructor(props) {
        super(props);
        this.getResults = this.getResults.bind(this);
    }

    getResults() {
        let correctAnswerCount = 0
        let resultListArray = []
        this.props.userAnswers.forEach(element => {
            if (element.correctAnswer === element.answer) {
                correctAnswerCount = correctAnswerCount + 1;
            }
        });
        return correctAnswerCount;
    }

    getWrongAnswer() {
        return this.props.userAnswers.filter((item) => {
            return item.answer !== item.correctAnswer
        })
    }

    render() {
        return (
            <div className="Results">
                <h1>
                    Results
                </h1>
                {this.getResults()} out of {this.props.noOfques} are correct answer
                {(this.getResults() / this.props.noOfques) * 100} %
                <Button className="btn"
                    value="Get Correct Answer" />
                <div className="ResultList__Wrapper">
                    {
                        this.getWrongAnswer().map((item) => {
                            return (
                                <ResultList question={item.question}
                                    userAnswer={item.answer}
                                    correctAnswer={item.correctAnswer} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

Results.propTypes = {

};

export default Results;