import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Error.css';

class Error extends Component {
    render() {
        return (
            <div className="Error">
                {this.props.children}
            </div>
        );
    }
}

Error.propTypes = {

};

export default Error;