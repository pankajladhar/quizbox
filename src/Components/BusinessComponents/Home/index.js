import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import Header from './../../BaseComponents/Header';
import logo from './Logo.svg';

class Home extends PureComponent {
    render() {
        return (
            <div className="Home gradient-9">
                <Header title="Quizbox" logoUrl={logo}/>
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;