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
        this.handleLogoChange = this.handleLogoChange.bind(this);
        this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
        this.handleQuesUrlChange = this.handleQuesUrlChange.bind(this);
        this.handleAnswerUrlChange = this.handleAnswerUrlChange.bind(this);
        this.handleTotalTimeChange = this.handleTotalTimeChange.bind(this);
        this.handleNoQuesChange = this.handleNoQuesChange.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
    }

    handleLogoChange(value) {
        this.setState({ logoUrl: value })
    }

    handleCompanyNameChange(value) {
        this.setState({ companyName: value })
    }

    handleQuesUrlChange(value) {
        this.setState({ quesUrl: value })
    }

    handleAnswerUrlChange(value) {
        this.setState({ answerUrl: value })
    }

    handleTotalTimeChange(value) {
        this.setState({ totalTime: value })
    }

    handleNoQuesChange(value) {
        this.setState({ noOfques: value })
    }

    handleSaveClick(e) {
        e.preventDefault()
        WriteInFirebase(this.state, "settings").then((snap) => {
            console.log(snap.key)
        });
    }


    render() {
        return (
            <div className="Settings">
                <form onSubmit={this.handleSaveClick}>
                    <FormField>
                        <Label htmlFor="Company name" text="Quiz title" />
                        <TextBox placeholder="Enter quiz title"
                            className="form-control"
                            onChange={this.handleCompanyNameChange}
                            id="Companyname" />
                    </FormField>

                    <FormField>
                        <Label htmlFor="QuestionUrl" text="Question Url" />
                        <TextBox placeholder="Enter question url"
                            className="form-control"
                            onChange={this.handleQuesUrlChange}
                            id="QuestionUrl" />
                        <Error>Required</Error>
                    </FormField>

                    <FormField>
                        <Label htmlFor="NoofQuestions" text="No of questions" />
                        <TextBox placeholder="Enter no of questions"
                            className="form-control"
                            onChange={this.handleNoQuesChange}
                            id="NoofQuestions" />
                    </FormField>


                    <FormField>
                        <Label htmlFor="TotalTime" text="Points for One question" />
                        <TextBox placeholder="Enter points"
                            className="form-control"
                            onChange={this.handleTotalTimeChange}
                            id="TotalTime" />
                    </FormField>

                    <FormField>
                        <Label htmlFor="TotalTime" text="Author Name" />
                        <TextBox placeholder="Enter author name"
                            className="form-control"
                            onChange={this.handleTotalTimeChange}
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