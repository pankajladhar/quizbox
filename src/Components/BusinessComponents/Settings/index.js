import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { WriteInFirebase } from './../../../Firebase';
import { isRequired, isURL } from './../../../Validations';

import TextBox from './../../BaseComponents/TextBox';
import Button from './../../BaseComponents/Button';
import Label from './../../BaseComponents/Label';
import FormField from './../../BaseComponents/FormField';
import SettingsHint from './../../BaseComponents/SettingsHint'
import Error from './../../BaseComponents/Error';
import Modal from './../../BaseComponents/Modal';

import './Settings.scss';

class Settings extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            quizTitle: "QuizBox",
            authorName: "",
            showConfiguration: false,
            showBanner: false,
            isModalOpen: false,
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleClickConfigureBtn = this.handleClickConfigureBtn.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.renderModal = this.renderModal.bind(this);
    }

    renderModal() {
        return (
            <Modal handleModalClose={this.handleModalClose}>
                <div className="QuizSuccessModal">
                    <span className="QuizSuccessModal__Title">
                        Your quiz is successfully created.
                    </span>
                    <a className="QuizSuccessModal__Link"
                        target="_blacnk"
                        href="http://pankajladhar.github.io/quizbox/quiz/-LAwHoQ8IPBpEeSbdsek">
                        http://pankajladhar.github.io/quizbox/quiz/-LAwHoQ8IPBpEeSbdsek
                        </a>
                    This URL is also listed under <strong><em>Try Exisitng</em></strong> section.
                </div>
            </Modal>
        )
    }

    handleModalClose() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSaveClick(e) {
        e.preventDefault();
        let data = {
            authorName: this.state.authorName,
            noOfques: this.state.noOfques,
            point: this.state.point,
            quesUrl: this.state.quesUrl,
            quizName: this.state.quizTitle,
            views: 0
        }
        WriteInFirebase(data, "settings").then((snap) => {
            this.setState({
                isModalOpen: true,
                showBanner: true,
                authorName: "",
                noOfques: "",
                point: '',
                quesUrl: '',
                quizTitle: ''
            });
        });
    }

    handleOnBlur(e) {
        let elemName = e.target.name;
        let elemValue = e.target.value;
        let validations, isValid;

        switch (elemName) {
            case "QuestionUrl":
                validations = ["isRequired", "isValidUrl"];
                isValid = false;

                validations.forEach(validation => {
                    if (validation === "isRequired") {
                        let status = isRequired(elemValue);
                        if (status) {
                            this.setState({
                                quesUrlError: "Required",
                                quesUrlErrorClass: "TextBox--Error"
                            })
                            isValid = false
                        } else {
                            this.setState({
                                quesUrlError: undefined,
                                quesUrlErrorClass: "TextBox--NoError"
                            })
                            isValid = true
                        }
                    }
                    if (isValid && validation == "isValidUrl") {
                        let status = isURL(elemValue);
                        if (status) {
                            this.setState({
                                quesUrlError: "Enter Correct URL",
                                quesUrlErrorClass: "TextBox--Error"
                            }, () => {
                                isValid = false
                            })
                        } else {
                            this.setState({
                                quesUrlError: undefined,
                                quesUrlErrorClass: "TextBox--NoError"
                            }, () => {
                                isValid = true
                            })
                        }
                    }
                });

                this.setState({
                    quesUrl: elemValue
                })
                break;

            case "NoofQuestions":
                validations = ["isRequired"];
                isValid = false;

                validations.forEach(validation => {
                    if (validation === "isRequired") {
                        let status = isRequired(elemValue);
                        if (status) {
                            this.setState({
                                noOfQuestionsError: "Required",
                                noOfQuestionsErrorClass: "TextBox--Error"
                            })
                            isValid = false
                        } else {
                            this.setState({
                                noOfQuestionsError: undefined,
                                noOfQuestionsErrorClass: "TextBox--NoError"
                            })
                            isValid = true
                        }
                    }
                });
                this.setState({
                    noOfques: elemValue
                })
                break;

            case "Point":
                validations = ["isRequired"];
                isValid = false;

                validations.forEach(validation => {
                    if (validation === "isRequired") {
                        let status = isRequired(elemValue);
                        if (status) {
                            this.setState({
                                pointError: "Required",
                                pointErrorClass: "TextBox--Error"
                            })
                            isValid = false
                        } else {
                            this.setState({
                                pointError: undefined,
                                pointErrorClass: "TextBox--NoError"
                            })
                            isValid = true
                        }
                    }
                });
                this.setState({
                    point: elemValue
                })
                break;
        }

    }

    handleOnChange(e) {
        let elemName = e.target.name;
        let elemValue = e.target.value;
        switch (elemName) {
            case "QuizTitle":
                this.setState({ quizTitle: elemValue })
                break;

            case "QuestionUrl":
                this.setState({ quesUrl: elemValue })
                break;

            case "NoofQuestions":
                this.setState({ noOfques: elemValue })
                break;

            case "Point":
                this.setState({ point: elemValue })
                break;

            case "AuthorName":
                this.setState({ authorName: elemValue })
                break;
        }
    }

    handleClickConfigureBtn() {
        this.setState({
            showConfiguration: !this.state.showConfiguration
        });
    }

    render() {
        return (
            <div className="Settings">
                {/* <div className="ConfigureInfo__Settings">
                    <Button className="btn"
                        onClick={this.handleClickConfigureBtn}
                        value="How to configure" />
                </div> */}

                <form onSubmit={this.handleSaveClick}>
                    <FormField>
                        <Label htmlFor="QuizTitle" text="Quiz title" />
                        <TextBox placeholder="Enter quiz title"
                            className="form-control"
                            onChange={this.handleOnChange}
                            onBlur={this.handleOnBlur}
                            id="QuizTitle" />
                    </FormField>

                    <FormField>
                        <Label htmlFor="QuestionUrl" text="Question Url" />
                        <TextBox placeholder="Enter question url"
                            className={`form-control ${this.state.quesUrlErrorClass}`}
                            onChange={this.handleOnChange}
                            onBlur={this.handleOnBlur}
                            id="QuestionUrl" />
                        {this.state.quesUrlError && <Error>{this.state.quesUrlError}</Error>}
                    </FormField>

                    <FormField>
                        <Label htmlFor="NoofQuestions" text="No of questions" />
                        <TextBox placeholder="Enter no of questions"
                            className={`form-control ${this.state.noOfQuestionsErrorClass}`}
                            type="number"
                            onChange={this.handleOnChange}
                            onBlur={this.handleOnBlur}
                            id="NoofQuestions" />
                        {this.state.noOfQuestionsError && <Error>{this.state.noOfQuestionsError}</Error>}
                    </FormField>

                    <FormField>
                        <Label htmlFor="Point" text="Points for One question" />
                        <TextBox placeholder="Enter points"
                            className={`form-control ${this.state.pointErrorClass}`}
                            onChange={this.handleOnChange}
                            onBlur={this.handleOnBlur}
                            id="Point" />
                        {this.state.pointError && <Error>{this.state.pointError}</Error>}
                    </FormField>

                    <FormField>
                        <Label htmlFor="AuthorName" text="Author Name" />
                        <TextBox placeholder="Enter author name"
                            className="form-control"
                            onChange={this.handleOnChange}
                            id="AuthorName" />
                    </FormField>


                    <Button className="btn"
                        type="submit"
                        disabled={
                            !(this.state.quesUrlErrorClass === "TextBox--NoError"
                                && this.state.noOfQuestionsErrorClass === "TextBox--NoError"
                                && this.state.pointErrorClass === "TextBox--NoError")
                        }
                        onClick={this.handleSaveClick}
                        value="Save" />

                </form>

                <div className={`Settings__Hint ${this.state.showConfiguration ? "show" : "hide"}`}>
                    <SettingsHint />
                </div>
                {this.state.isModalOpen && this.renderModal()}
            </div>
        );
    }
}

Settings.propTypes = {

};

export default Settings;