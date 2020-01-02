import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Banner.scss';

class Banner extends Component {
    render() {
        return (
            <div className={`Banner Banner--${this.props.type}`}>
                {this.props.children}
            </div>
        );
    }
}

Banner.propTypes = {
    type: PropTypes.oneOf(['Info']),
    children: PropTypes.any.isRequired,
};

Banner.defaultProps = {
    type: "Info"
};

export default Banner;