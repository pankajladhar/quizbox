import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { WriteInFirebase } from './../../../Firebase';

import TextBox from './../../BaseComponents/TextBox';
import Button from './../../BaseComponents/Button';
import Label from './../../BaseComponents/Label';
import FormField from './../../BaseComponents/FormField';
import SettingsHint from './../../BaseComponents/SettingsHint'
import Error from './../../BaseComponents/Error';

import './Settings.css';

class Settings extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
    }


    handleSaveClick(e) {
        e.preventDefault()
        WriteInFirebase(this.state, "settings").then((snap) => {
            console.log(snap.key)
        });
    }

    handleOnChange(e){
        let elemName = e.target.name;
        let elemValue = e.target.value;
        switch(elemName) {
            case "QuizTitle" : this.setState({
                quizTitle : elemValue
            })
            break;

            case "QuestionUrl" : this.setState({
                quesUrl : elemValue
            })
            break;

            case "NoofQuestions" : this.setState({
                noOfques : elemValue
            })
            break;

            case "Point" : this.setState({
                point : elemValue
            })
            break;

            case "AuthorName" : this.setState({
                authorName : elemValue
            })
            break;
        }
    }


    render() {
        return (
            <div className="Settings">
                <form onSubmit={this.handleSaveClick}>
                    <FormField>
                        <Label htmlFor="QuizTitle" text="Quiz title" />
                        <TextBox placeholder="Enter quiz title"
                            className="form-control"
                            onChange={this.handleOnChange}
                            id="QuizTitle" />
                    </FormField>

                    <FormField>
                        <Label htmlFor="QuestionUrl" text="Question Url" />
                        <TextBox placeholder="Enter question url"
                            className="form-control"
                            onChange={this.handleOnChange}
                            id="QuestionUrl" />
                        <Error>Required</Error>
                    </FormField>

                    <FormField>
                        <Label htmlFor="NoofQuestions" text="No of questions" />
                        <TextBox placeholder="Enter no of questions"
                            className="form-control"
                            onChange={this.handleOnChange}
                            id="NoofQuestions" />
                    </FormField>

                    <FormField>
                        <Label htmlFor="Point" text="Points for One question" />
                        <TextBox placeholder="Enter points"
                            className="form-control"
                            onChange={this.handleOnChange}
                            id="Point" />
                    </FormField>

                    <FormField>
                        <Label htmlFor="AuthorName" text="Author Name" />
                        <TextBox placeholder="Enter author name"
                            className="form-control"
                            onChange={this.handleOnChange}
                            id="AuthorName" />
                    </FormField>

                    <div className="float-right">
                        <Button className="btn btn-outline-success"
                            type="submit"
                            onClick={this.handleSaveClick}
                            value="Save" />
                        {/* <Button className="btn btn-outline-danger"
                            type="reset"
                            value="Reset" /> */}
                    </div>

                </form>
                <div className="Settings__Hint">
                    <SettingsHint />
                </div>
            </div>
        );
    }
}

Settings.propTypes = {

};

export default Settings;