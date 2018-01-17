
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TextBox extends PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <input id={this.props.id}
                type={this.props.type}
                className={`TextBox ${this.props.className}`}
                placeholder={this.props.placeholder}
                onChange={this.handleChange}
            />
        );
    }
}

TextBox.defaultProps = {
    type: "text",
    placeholder: "",
    className: ""
};

TextBox.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["text", "password"]).isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default TextBox;