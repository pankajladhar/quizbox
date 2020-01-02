import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Navigation from "./../Navigation";
import "./Header.scss";

const Header = props => {
  const { title, logoUrl } = props;
  return (
    <div className="Header">
      <header className="container">
        <div className="Header__Branding">
          <Link to="/">
            <img className="Header__Logo" src={logoUrl} alt={title} />
            {title && <h1 className="Header__title">{title}</h1>}
          </Link>
        </div>
        <Navigation />
      </header>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired
};

export default Header;
