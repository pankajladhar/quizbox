import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Loader extends PureComponent {
    render() {
        return (
            <div className="Loader">
                quiz is loading please wait....
            </div>
        );
    }
}

Loader.propTypes = {

};

export default Loader;