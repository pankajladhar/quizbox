import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from './../Button';
import ResultList from './../ResultList';

import './Results.css'

class Results extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showAnswers: false
        }
        this.getResults = this.getResults.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    getResults() {
        let correctAnswerCount = 0
        let resultListArray = [];
        this.props.userAnswers.forEach(element => {
            if (element.correctAnswer === element.answer) {
                correctAnswerCount = correctAnswerCount + 1;
            }
        });
        return correctAnswerCount;
    }

    getWrongAnswer(items) {
        return items.filter((item) => {
            return item.answer !== item.correctAnswer
        })
    }

    handleClick() {
        this.setState({
            showAnswers: !this.state.showAnswers
        })
    }

    render() {
        return (
            <div className="Results">
                <div className="Results__TopPanel">
                    <span className="Results__TopPanel__CorrectCount">
                        {this.getResults()} out of {this.props.noOfques} are correct answer
                    </span>
                    <span className="Results__TopPanel__Percentage">
                        {(this.getResults() / this.props.noOfques) * 100} %
                    </span>
                    <Button className="btn"
                        onClick={this.handleClick}
                        value="Get Correct Answer" />
                </div>
                {
                    this.state.showAnswers && <div className="ResultList__Wrapper">
                        {
                            this.getWrongAnswer(this.props.userAnswers).map((item) => {
                                return (
                                    <ResultList question={item.question}
                                        userAnswer={item.answer}
                                        correctAnswer={item.correctAnswer} />
                                )
                            })
                        }
                    </div>
                }
            </div>
        );
    }
}

Results.propTypes = {

};

export default Results;