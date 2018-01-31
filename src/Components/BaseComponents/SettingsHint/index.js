import React, { Component } from 'react';
import PropTypes from 'prop-types';
import data from './data';
import './SettingsHint.css';


class SettingsHint extends Component {
    render() {
        return (
            <div className="SettingsHint">
                {
                    data.map((item, index) => {
                        return (
                            <div className="SettingsHint__List" key={index}>
                                <span className="SettingsHint__List__Count">&#10004;</span>
                                <span className="SettingsHint__List__StepName">{item.stepName}</span>
                                {item.isMandatory && <span className="SettingsHint__List__Optional">optional</span>}
                                <span className="SettingsHint__List__Description">{item.description}</span>
                                {item.subDescription && <span className="SettingsHint__List__SubDescription" dangerouslySetInnerHTML={{__html: item.subDescription}}/>}
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

SettingsHint.propTypes = {

};

export default SettingsHint;