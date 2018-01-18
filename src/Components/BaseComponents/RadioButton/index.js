import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Label from './../Label'

class RadioButton extends PureComponent {
    render() {
        return (
            <div className="RadioButton">
                <input type="radio" id="logoUrl" name="answers"/>
                <Label htmlFor="logoUrl" text={this.props.data} />
            </div>
        );
    }
}

RadioButton.propTypes = {

};

export default RadioButton;