import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { uniqNumber } from './../../../Helpers';

import { ReadFromFirebase } from './../../../Firebase';
import Loader from './../../BaseComponents/Loader';
import Question from './../../BaseComponents/Question';
import Header from './../../BaseComponents/Header';
import Timer from './../../BaseComponents/Timer';
import Results from './../../BaseComponents/Results';
import './Quiz.css';

class Quiz extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            settings: {
                quesUrl: "",
                noOfques: "",
                totalTime: "",
                quizName: "",
                point: "",
            },
            questions: [],
            currentQues: 0,
            userAnswers: []
        }
        this.handleTimeOut = this.handleTimeOut.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.getResults = this.getResults.bind(this);
    }

    __getSettings(res) {
        return {
            quesUrl: res.quesUrl,
            noOfques: Number(res.noOfques),
            totalTime: Number(res.totalTime),
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

    getResults() {
        let correctAnswerCount = 0
        this.state.userAnswers.forEach(element => {
            this.state.data.forEach((item)=>{
                if(item.question == element.question && item.correctAnswer === element.answer ) {
                    correctAnswerCount = correctAnswerCount + 1;
                }
            }) 
        });
        return correctAnswerCount;
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
                <Timer mins={this.state.settings.totalTime}
                    onTimeOut={this.handleTimeOut} />
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
                    <div className="Header__Panel">
                        Question <span className="Current"> {this.state.currentQues + 1} </span> of {this.state.settings.noOfques}
                    </div>
                    <h1>
                        {this.state.settings.quizName}
                    </h1>
                    <div className="Header__Panel">
                        Score<span className="Current">{this.state.settings.point} </span>Points
                    </div>
                </header>
            )
        },
        renderResults: () =>{
            return (
                <Results />
            )
        }

    }

    handleNextClick(obj) {
        this.setState({
            currentQues: this.state.currentQues + 1,
            userAnswers : [...this.state.userAnswers, obj]
        });
    }

    handleTimeOut() {
        console.log("timed out")
    }

    render() {
        const { renderTimer, renderQuizHeader, renderQuestions, renderLoader, renderResults } = this.renderComponents
        return (
            <div className="Quiz">
                {this.state.questions.length > 0 ?
                    <div>
                        <main className="container">
                            {this.state.currentQues !== this.state.settings.noOfques ? 
                                <div>
                                    {renderTimer()}
                                    {renderQuizHeader()}
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