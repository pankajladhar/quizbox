import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './FormField.css';

class FormField extends PureComponent {
    render() {
        return (
            <div className={`FormField ${this.props.className}`}>
                {this.props.children}
            </div>
        );
    }
}

FormField.defaultProps =  {
    className: ""
}

FormField.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired,
};

export default FormField;