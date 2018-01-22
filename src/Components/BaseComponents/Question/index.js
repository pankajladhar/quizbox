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
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            index: this.state.index + 1
        })
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
                                <Answer index={index} data={item} />
                            )
                        })
                    }
                    <Button className="btn" value="Next" onClick={this.handleClick} />
                </div>
            </div>
        )
    }

    _renderResult() {
        return <Results />
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