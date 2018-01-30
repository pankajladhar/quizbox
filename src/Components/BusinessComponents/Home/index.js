import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Home.css';

class Home extends PureComponent {
    render() {
        return (
            <div className="Home">
                <h1>Quizbox - Online quiz builder</h1>
                <h2>Build your own quiz and share with others</h2>
                <a href="">Configure Quiz</a>
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;
