import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Results from './../Results';
import Button from './../Button';
import Answer from './../Answer';
import './Question.css';

class Question extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.questions,
            index: 0,
            checkedId: undefined,
            userSelection: {},
            userAnswers: []
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.getResults = this.getResults.bind(this);
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


    handleClick() {
        this.setState({
            index: this.state.index + 1,
            checkedId: undefined,
            userAnswers: [...this.state.userAnswers, this.state.userSelection]
        })
    }


    handleOnChange(val) {
        this.setState({
            checkedId : val.id,
            userSelection: {
                id : val.id,
                answer : val.data,
                question: this.state.data[this.state.index].question
            }
        });
    }

    _renderQuestions() {
        return (
            <div className="Question__Wrapper">
                <div className="Question__LeftPanel Question--Panel">
                    {this.state.data[this.state.index].question}
                </div>
                <div className="Question__RightPanel Question--Panel">
                    {
                        this.state.data[this.state.index].answers.map((item, index) => {
                            return (
                                <Answer index={index}
                                    checked={`answer-${index}` === this.state.checkedId ? true: false}
                                    id={`answer-${index}`}
                                    key={`answer-${index}`}
                                    onChange={this.handleOnChange}
                                    data={item} />
                            )
                        })
                    }
                    <Button className="btn" value="Next" onClick={this.handleClick} />
                </div>
            </div>
        )
    }

    _renderResult() {
        return <Results data={this.getResults()}/>
    }

    render() {
        return (
            <div className="Question">
                {
                    this.state.data.length === this.state.index ? this._renderResult() : this._renderQuestions()
                }
            </div>
        );
    }
}

Question.propTypes = {

};

export default Question;