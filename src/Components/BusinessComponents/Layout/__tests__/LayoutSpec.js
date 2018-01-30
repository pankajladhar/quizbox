import React from 'react';
import renderer from 'react-test-renderer';
import Layout from './../index';

describe('Layout', ()=>{
    xit('renders correctly', ()=>{
        let tree = renderer.create(
            <Layout>
                <h1>some Child</h1>
            </Layout>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});