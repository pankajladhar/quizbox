import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import Header from './../../BaseComponents/Header';

class Home extends PureComponent {
    render() {
        return (
            <div className="Home">
                <div className="gradient gradient-1"></div>
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;