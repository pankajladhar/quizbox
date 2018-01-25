import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, render } from 'enzyme';
import Results from './../index';

describe('Results', () => {
    let resultsProps = {}
    beforeEach(() => {
        resultsProps = {
            noOfques: 2,
            userAnswers: [
                {
                    question: "Question 1",
                    answer: "Answer 1",
                    correctAnswer: "Answer 1",
                },
                {
                    question: "Question 2",
                    answer: "Answer 2",
                    correctAnswer: "Correct Answer 2",
                }
            ]
        }
    });

    it('renders correctly', () => {
        let tree = renderer.create(
            <Results {...resultsProps} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with result list', () => {
        let component = renderer.create(
            <Results {...resultsProps} />
        );
        const instance = component.getInstance()
        instance.handleClick(); 
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('handleClick method should toggle showAnswers state', () =>{
        let resultsInstance = shallow(<Results {...resultsProps} />).instance();
        resultsInstance.handleClick();
        expect(resultsInstance.state.showAnswers).toBeTruthy();

        resultsInstance.handleClick();
        expect(resultsInstance.state.showAnswers).toBeFalsy();
    });

    it('getCorrectAnswerCount method should give correct answers count', () =>{
        let resultsInstance = shallow(<Results {...resultsProps} />).instance();
        expect(resultsInstance.getCorrectAnswerCount(resultsProps.userAnswers)).toBe(1);
    });

    it('getWrongAnswer should reurn worng answers array', () => {
        let resultsInstance = shallow(<Results {...resultsProps} />).instance();
        let worngAnswers = resultsInstance.getWrongAnswer(resultsProps.userAnswers);
        expect(worngAnswers.length).toBe(1);
        expect(worngAnswers[0].answer === worngAnswers[0].correctAnswer).toBeFalsy();
        expect(JSON.stringify(worngAnswers[0])).toBe(JSON.stringify(worngAnswers[0]));
    })

});
