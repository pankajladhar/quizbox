import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <nav className="Navigation">
                <ul>
                    <li><a href="#">How to Configure</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Sample</a></li>
                </ul>
            </nav>
        );
    }
}

Navigation.propTypes = {

};

export default Navigation;