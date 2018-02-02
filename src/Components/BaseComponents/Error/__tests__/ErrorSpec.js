import React, { Children } from 'react';
import renderer from 'react-test-renderer';
import Error from './../index';

describe('Error', () => {
    let errorProps = {}
    beforeEach(() => {
        errorProps = {
            children: <h1>Some Children</h1>
        }
    });

    it('renders correctly with mandatory params', () => {
        let tree = renderer.create(
            <Error {...errorProps} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });


});