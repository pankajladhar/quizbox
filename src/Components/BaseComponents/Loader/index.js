import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Loader.css';

class Loader extends PureComponent {
    render() {
        return (
            <div className="Loader">
                <div className="Loader__Content">
                    <div className="spinner"></div>
                    quiz is loading please wait ....
                </div>
            </div>
        );
    }
}

Loader.propTypes = {

};

export default Loader;