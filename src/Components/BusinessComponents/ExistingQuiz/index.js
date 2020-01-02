import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ReadFromFirebase } from './../../../Firebase';
import _map from 'lodash/map';

import Loader from '../../BaseComponents/Loader';
import './ExistingQuiz.scss';

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

    renderLoader() {
        return <Loader />
    };

    render() {
        return (
            <div className="ExistingQuiz">
                {Object.keys(this.state.existingQuiz).length > 0 ? <ul className="ExistingQuiz__List">
                    {
                        _map(this.state.existingQuiz, (item, key) => {
                            return (
                                <li key={key} className="ExistingQuiz__List__Item">
                                    <span className="ExistingQuiz__List__QuizDetails">
                                        <span className="ExistingQuiz__List__QuizName">
                                            <span className="ExistingQuiz__List__Tick">
                                                &#10004;
                                            </span>
                                            {item.quizName}
                                        </span>
                                        <a href={`http://pankajladhar.github.io/quizbox/quiz/${key}`}
                                            target="_blank"
                                            className="ExistingQuiz__List__QuizURL">
                                            {`http://pankajladhar.github.io/quizbox/quiz/${key}`}
                                        </a>
                                    </span>
                                    <span className="ExistingQuiz__List__Author">
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
                    : this.renderLoader()}
            </div>
        );
    }
}

ExistingQuiz.propTypes = {

};

export default ExistingQuiz;