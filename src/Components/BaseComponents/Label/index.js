import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Label extends PureComponent {
    render() {
        return (
            <label htmlFor={this.props.htmlFor} className={`Label ${this.props.className}`}>
                {this.props.text}
            </label>
        );
    }
}

Label.defaultProps =  {
    className: ""
}

Label.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    className: PropTypes.string,
    text: PropTypes.string.isRequired
};

export default Label;