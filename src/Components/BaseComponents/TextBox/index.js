
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './TextBox.scss';

class TextBox extends PureComponent {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
        this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
        this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    }


    handleOnChange(e) {
        this.props.onChange(e);
    }

    handleOnKeyPress(e) {
        this.props.type === "number"
            && (
                e.charCode === 101
                || e.charCode === 43
                || e.charCode === 45
                || e.charCode === 69
            )
            && e.preventDefault();
    }

    handleOnKeyDown(e) {
        this.props.type === "number" && (e.which === 38 || e.which === 40) && e.preventDefault();
    }

    handleOnBlur(e) {
        this.props.onBlur(e);
    }

    render() {
        return (
            <input id={this.props.id}
                name={this.props.id}
                type={this.props.type}
                className={`TextBox ${this.props.className}`}
                placeholder={this.props.placeholder}
                onChange={this.handleOnChange}
                onBlur={this.handleOnBlur}
                onKeyPress={this.handleOnKeyPress}
                onKeyDown={this.handleOnKeyDown}
            />
        );
    }
}

TextBox.defaultProps = {
    type: "text",
    placeholder: "",
    className: "",
    onBlur: () =>{

    }
};

TextBox.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["text", "number"]).isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func,
    onKeyDown: PropTypes.func,
};

export default TextBox;