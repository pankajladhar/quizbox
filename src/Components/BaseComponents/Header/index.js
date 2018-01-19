import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <header className="container">
                    <img className="Header__Logo" src={this.props.logoUrl} alt={this.props.title}/>
                    <h1 className="Header__title">{this.props.title}</h1>
                </header>
            </div>
        );
    }
}

Header.defaultProps = {
    title: "Online Quiz Builder",
    logoUrl: "https://getbootstrap.com/assets/img/favicons/apple-touch-icon.png"
}

Header.propTypes = {
    title: PropTypes.string,
    logoUrl: PropTypes.string
};

export default Header;