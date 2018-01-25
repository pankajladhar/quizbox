import React from 'react';
import renderer from 'react-test-renderer';
import Label from './../index';

describe('Label', ()=>{
    let labelProps = {};

    beforeEach(()=>{
        labelProps = {
            htmlFor: "htmlFor",
            text: "some text"
        };
    })

    it('renders correctly with mandatory params', ()=>{
        let tree = renderer.create(
            <Label {...labelProps}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with optional params', ()=>{
        labelProps.className = "someClass"
        let tree = renderer.create(
            <Label {...labelProps}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});