import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { uniqNumber } from './../../../Helpers';

import { ReadFromFirebase } from './../../../Firebase';
import Loader from './../../BaseComponents/Loader';
import Question from './../../BaseComponents/Question';
import Header from './../../BaseComponents/Header';
import Timer from './../../BaseComponents/Timer';
import Results from './../../BaseComponents/Results';
import './Quiz.scss';

class Quiz extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            settings: {
                quesUrl: "",
                noOfques: "",
                quizName: "",
                point: "",
            },
            questions: [],
            currentQues: 0,
            userAnswers: [],
            timeTaken: 0
        }
        this.setTimeTaken = this.setTimeTaken.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.isLastQuestion = this.isLastQuestion.bind(this);
    }

    isLastQuestion() {
        return this.state.currentQues === this.state.settings.noOfques ? true : false
    }

    __getSettings(res) {
        return {
            quesUrl: res.quesUrl,
            noOfques: Number(res.noOfques),
            quizName: res.quizName,
            point: res.point * Number(res.noOfques)
        }
    }

    _getRandomQuestions(questions) {
        let uniqueArray = uniqNumber(
            {
                min: 0,
                max: Number(questions.length) - 1,
                count: this.state.settings.noOfques,
                sort: 'asc'
            }
        )
        let questionsArray = [];
        for (let index = 0; index < uniqueArray.length; index++) {
            questionsArray.push(questions[uniqueArray[index]]);
        }
        return questionsArray;
    }

    __setQuestions() {
        fetch(this.state.settings.quesUrl)
            .then((res) => res.json())
            .then((questions) => {
                this.setState({
                    questions: this._getRandomQuestions(questions)
                })
            })
    }

    componentDidMount() {
        let quizId = this.props.match.params.quizID
        let dbRef = `settings/${quizId}`
        ReadFromFirebase(dbRef).then((snapshot) => {
            this.setState({
                settings: this.__getSettings(snapshot.val())
            }, () => this.__setQuestions())
        })
    }

    renderComponents = {
        renderTimer: () => {
            return (
                <Timer ref={(timer) => { this.timer = timer }} />
            )
        },
        renderLoader: () => {
            return <Loader />
        },
        renderQuestions: () => {
            return (
                <Question data={this.state.questions[this.state.currentQues]}
                    currentQues={this.state.currentQues}
                    onNextClick={this.handleNextClick} />
            )
        },
        renderQuizHeader: () => {
            return (
                <header>
                    {
                        !this.isLastQuestion() &&
                        <div className="Header__Panel">
                            Question <span className="Current"> {this.state.currentQues + 1} </span> of {this.state.settings.noOfques}
                        </div>
                    }
                    <h1>
                        {this.state.settings.quizName}
                    </h1>
                    {
                        !this.isLastQuestion() &&
                        <div className="Header__Panel">
                            Score<span className="Current">{this.state.settings.point} </span>Points
                        </div>
                    }
                </header>
            )
        },
        renderResults: () => {
            this.setTimeTaken()
            return (
                <Results
                    timeTaken={this.state.timeTaken}
                    noOfques={this.state.settings.noOfques}
                    userAnswers={this.state.userAnswers}
                />
            )
        }

    }

    handleNextClick(obj) {
        this.setState({
            currentQues: this.state.currentQues + 1,
            userAnswers: [...this.state.userAnswers, obj]
        });
    }

    setTimeTaken() {
        if (this.timer) {
            let time = this.timer.timeTaken()
            this.setState({
                timeTaken: time
            })
        }
    }

    render() {
        const { renderTimer, renderQuizHeader, renderQuestions, renderLoader, renderResults } = this.renderComponents
        return (
            <div className="Quiz">
                {this.state.questions.length > 0 ?
                    <div>
                        <main className="container">
                            {renderQuizHeader()}
                            {!this.isLastQuestion() ?
                                <div>
                                    {renderTimer()}
                                    {renderQuestions()}
                                </div>
                                : renderResults()
                            }
                        </main>
                    </div>
                    : renderLoader()}
            </div>
        );
    }
}

Quiz.propTypes = {

};

export default Quiz;