import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ReadFromFirebase } from './../../../Firebase';
import _map from 'lodash/map';
import './ExistingQuiz.css';

class ExistingQuiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            existingQuiz: {}
        }
    }

    componentDidMount() {
        let dbRef = `settings`
        ReadFromFirebase(dbRef).then((snapshot) => {
            let data = snapshot.val();
            _map(data, (val, key) => {
                // console.log(val, key)
            });

            this.setState({
                existingQuiz: snapshot.val()
            })
        })
    }

    render() {
        console.log("hloo", this.state.existingQuiz)
        return (
            <div className="ExistingQuiz">
                <ul className="ExistingQuiz__List">
                    {
                        Object.keys(this.state.existingQuiz).length > 0 && _map(this.state.existingQuiz, (item, key) => {
                            return (
                                <li className="ExistingQuiz__List__Item">
                                    <span className="ExistingQuiz__List__QuizName">
                                        {item.quizName}
                                    <a href= {`http://pankajladhar.github.io/quizbox/quiz/${key}`}
                                                    target="_blank"
                                                    className="ExistingQuiz__List__QuizURL">
                                                    {`http://pankajladhar.github.io/quizbox/quiz/${key}`}
                                    </a>
                                    </span>
                                    <span className="ExistingQuiz__List__Autor">
                                        {item.authorName}
                                    </span>

                                    <span className="ExistingQuiz__List__Views">
                                        Total Views: {item.views}
                                </span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

ExistingQuiz.propTypes = {

};

export default ExistingQuiz;