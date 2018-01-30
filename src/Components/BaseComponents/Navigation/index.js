import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <nav className="Navigation">
                <ul>
                    <li><Link to="/">How to Configure</Link></li>
                    <li><Link to="/Settings">Settings</Link></li>
                    <li><Link to="/">Sample</Link></li>
                </ul>
            </nav>
        );
    }
}

Navigation.propTypes = {

};

export default Navigation;