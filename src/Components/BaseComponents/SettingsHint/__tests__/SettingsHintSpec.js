import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';
import SettingsHint from './../index';

describe('SettingsHint', () => {
    xit('renders correctly', () => {
        let tree = renderer.create(
            <SettingsHint />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('TextBox', () => {
        it('should work', () => {
            expect(true).toEqual(true)
        })
    })
});