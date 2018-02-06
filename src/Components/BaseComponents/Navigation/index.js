import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <nav className="Navigation">
                <ul>
                    {/* <li><Link to="/">How to Configure</Link></li> */}
                    <li><Link to="/configure">Configure Quiz</Link></li>
                    <li><Link to="/try">Try Existing </Link></li>
                </ul>
            </nav>
        );
    }
}

Navigation.propTypes = {

};

export default Navigation;