import React from 'react';
import PropTypes from 'prop-types';
import Header from './../../BaseComponents/Header';
import logo from './Logo.svg';
import './Layout.css';

const Layout = props => {
  return (
    <div className="Layout">
      <Header title="Quizbox" logoUrl={logo} />
      <div className="container">
        {props.children}
      </div>
    </div>
  )
};

Layout.propTypes = {

};

export default Layout;