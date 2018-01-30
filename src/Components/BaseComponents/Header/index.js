import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navigation from './../Navigation';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <header className="container">
                    <div className="Header__Branding">
                        <Link to="/">
                            <img className="Header__Logo" src={this.props.logoUrl} alt={this.props.title} />
                            {this.props.title && <h1 className="Header__title">{this.props.title}</h1>}
                        </Link>
                    </div>
                    <Navigation />
                </header>
            </div>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    logoUrl: PropTypes.string.isRequired
};

export default Header;