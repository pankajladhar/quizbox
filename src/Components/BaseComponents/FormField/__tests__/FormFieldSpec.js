import React, { Children } from 'react';
import renderer from 'react-test-renderer';
import FormField from './../index';

describe('FormField', () => {
    let formFieldProps = {}
    beforeEach(() => {
        formFieldProps = {
            children: <h1>Some Children</h1>
        }
    });

    it('renders correctly with mandatory params', () => {
        let tree = renderer.create(
            <FormField {...formFieldProps} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with mandatory and optional params', () => {
        formFieldProps.className = "SomeClass";
        let tree = renderer.create(
            <FormField {...formFieldProps} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

});