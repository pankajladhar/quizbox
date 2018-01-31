import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter, MemoryRouter as Router, } from 'react-router-dom'
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
            <StaticRouter location="someLocation" context={{}}>
                <Header {...headerProps} />
            </StaticRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
	