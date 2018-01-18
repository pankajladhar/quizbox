import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RadioButton from './../RadioButton';
import Results from './../Results';
import Button from './../Button';

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
            <div>
                <h2>{this.state.data[this.state.index].question}</h2>
                {
                    this.state.data[this.state.index].answers.map((item, index) => {
                        return <RadioButton key={`answer-${index}`} data={item} />
                    })
                }
                <Button className="btn btn-dark" value="Next" onClick={this.handleClick} />
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