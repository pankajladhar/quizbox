import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Navigation.scss';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleMenu : false
        }
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        this.setState({
            toggleMenu: !this.state.toggleMenu
        });
    }

    render() {
        return (
            <div className={`Navigation ${this.state.toggleMenu ? 'Navigation--Opened' : 'Navigation--Closed'}`}>
                <nav>
                    <ul>
                        {/* <li><Link to="/">How to Configure</Link></li> */}
                        <li><Link to="/configure">Configure Quiz</Link></li>
                        <li><Link to="/try">Try Existing </Link></li>
                    </ul>
                </nav>
                <button className="toggleButton"
                    onClick={this.handleOnClick}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
            </div>
        );
    }
}

Navigation.propTypes = {

};

export default Navigation;