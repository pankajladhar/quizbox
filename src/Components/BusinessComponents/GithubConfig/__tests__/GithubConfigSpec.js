import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';
import GithubConfig from './../index';

describe('GithubConfig', ()=>{
    it('renders correctly', ()=>{
        let tree = renderer.create(
            <GithubConfig/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});