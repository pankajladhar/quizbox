
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './TextBox.css';

class TextBox extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            hasError: "TextBox--NoError"
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
    }

    handleOnChange(e) {
        this.props.onChange(e);
    }

    handleOnBlur(e) {
        let value = e.target.value;
        value.length === 0 && this.setState({
            hasError: "TextBox--Error"
        })
    }

    render() {
        return (
            <input id={this.props.id}
                name={this.props.id}
                type={this.props.type}
                className={`TextBox ${this.props.className} ${this.state.hasError}`}
                placeholder={this.props.placeholder}
                onChange={this.handleOnChange}
                onBlur={this.handleOnBlur}
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