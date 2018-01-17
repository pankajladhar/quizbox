import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick();
    }

    render() {
        return (
            <button type={this.props.type}
                onClick={this.handleClick}
                className={`Button ${this.props.className}`}>
                {this.props.value}
            </button>
        );
    }
}

Button.defaultProps = {
    type: "button",
    className: ""
};

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(["button", "reset", "submit"]),
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button;