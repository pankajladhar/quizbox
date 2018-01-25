import React from 'react';
import renderer from 'react-test-renderer';
import Header from './../index';

describe('Header', () => {
    let headerProps = {}
    beforeEach(() => {
        headerProps = {
            title : "some title",
            logoUrl : "some url"
        }
    });

    it('renders correctly', () => {
        let tree = renderer.create(
            <Header {...headerProps} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
	