import React from 'react';
import renderer from 'react-test-renderer';
import Answer from './../index';

describe('Answer', () => {
    let answerProps = {}
    beforeEach(() => {
        answerProps = {
            index: 1,
            id: "Answer",
            onChange: jest.fn(),
            data: "some string"
        }
    });

    it('renders correctly when checked is true', () => {
        answerProps.checked = true;
        let tree = renderer.create(
            <Answer {...answerProps} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly when checked is false', () => {
        answerProps.checked = false;
        let tree = renderer.create(
            <Answer {...answerProps} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});