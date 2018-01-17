import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TextBox from './../../BaseComponents/TextBox';
import Button from './../../BaseComponents/Button';
import Label from './../../BaseComponents/Label';
import FormField from './../../BaseComponents/FormField';

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
        this.setState({logoUrl : value})
    }

    handleCompanyNameChange(value) {
        this.setState({companyName : value})
    }

    handleQuesUrlChange(value) {
        this.setState({quesUrl : value})
    }

    handleAnswerUrlChange(value) {
        this.setState({answerUrl : value})
    }

    handleTotalTimeChange(value) {
        this.setState({totalTime : value})
    }

    handleNoQuesChange(value) {
        this.setState({noOfques : value})
    }

    handleSaveClick(e) {
        e.preventDefault()
        console.log(this.state)
    }


    render() {
        return (
            <div className="Settings">
                <form onSubmit={this.handleSaveClick}>
                    <h1>Settings</h1>
                    <FormField className="form-group">
                        <div className="row">
                            <div className="col-md-3 text-right">
                                <Label htmlFor="logoUrl" text="Enter Logo Url" />
                            </div>
                            <div className="col-md-9">
                                <TextBox placeholder="Logo Url"
                                    className="form-control"
                                    onChange={this.handleLogoChange}
                                    id="logoUrl" />
                            </div>
                        </div>
                    </FormField>


                    <FormField className="form-group">
                        <div className="row">
                            <div className="col-md-3 text-right">
                                <Label htmlFor="Company name" text="Enter Company name" />
                            </div>
                            <div className="col-md-9">
                                <TextBox placeholder="Company name"
                                    className="form-control"
                                    onChange={this.handleCompanyNameChange}
                                    id="Companyname" />
                            </div>
                        </div>
                    </FormField>

                    <FormField className="form-group">
                        <div className="row">
                            <div className="col-md-3 text-right">
                                <Label htmlFor="QuestionUrl" text="Enter Question Url" />
                            </div>
                            <div className="col-md-9">
                                <TextBox placeholder="Question Url"
                                    className="form-control"
                                    onChange={this.handleQuesUrlChange}
                                    id="QuestionUrl" />
                            </div>
                        </div>
                    </FormField>

                    <FormField className="form-group">
                        <div className="row">
                            <div className="col-md-3 text-right">
                                <Label htmlFor="AnswerUrl" text="Enter Answer Url" />
                            </div>
                            <div className="col-md-9">
                                <TextBox placeholder="Answer Url"
                                    className="form-control"
                                    onChange={this.handleAnswerUrlChange}
                                    id="AnswerUrl" />
                            </div>
                        </div>
                    </FormField>

                    <FormField className="form-group">
                        <div className="row">
                            <div className="col-md-3 text-right">
                                <Label htmlFor="TotalTime" text="Enter Total Time" />
                            </div>
                            <div className="col-md-9">
                                <TextBox placeholder="Total Time"
                                    className="form-control"
                                    onChange={this.handleTotalTimeChange}
                                    id="TotalTime" />
                            </div>
                        </div>
                    </FormField>

                    <FormField className="form-group">
                        <div className="row">
                            <div className="col-md-3 text-right">
                                <Label htmlFor="NoofQuestions" text="Enter No of Questions" />
                            </div>
                            <div className="col-md-9">
                                <TextBox placeholder="No of Questions"
                                    className="form-control"
                                    onChange={this.handleNoQuesChange}
                                    id="NoofQuestions" />
                            </div>
                        </div>
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
            </div>
        );
    }
}

Settings.propTypes = {

};

export default Settings;