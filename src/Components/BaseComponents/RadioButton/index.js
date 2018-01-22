import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Label from './../Label'

class RadioButton extends PureComponent {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange() {
        let response = {
            data : this.props.data,
            id: this.props.id
        }
        this.props.onChange(response)
    }

    render() {
        return (
            <div className="RadioButton">
                <input onChange={this.handleOnChange}
                    checked={this.props.checked}
                    type="radio"
                    id={this.props.id}
                    name="answers"/>
                <Label htmlFor={this.props.id} text={this.props.data} />
            </div>
        );
    }
}

RadioButton.propTypes = {

};

export default RadioButton;