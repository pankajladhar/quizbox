import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from './../Button';
import Answer from './../Answer';
import './Question.css';

class Question extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            checkedId: undefined,
            userSelection: {},
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleClick() {
        this.setState({ 
            checkedId: undefined,
        })
        this.props.onNextClick(this.state.userSelection)
    }


    handleOnChange(val) {
        this.setState({
            checkedId : val.id,
            userSelection: {
                answer : val.data,
                question: this.props.data.question,
                correctAnswer: this.props.data.correctAnswer
            }
        });
    }

    _renderQuestions() {
        return (
            <div className="Question__Wrapper">
                <div className="Question__LeftPanel Question--Panel">
                    {this.props.data.question}
                </div>
                <div className="Question__RightPanel Question--Panel">
                    {
                        this.props.data.answers.map((item, index) => {
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

    render() {
        return (
            <div className="Question">
                { this._renderQuestions() }
            </div>
        );
    }
}

Question.propTypes = {

};

export default Question;