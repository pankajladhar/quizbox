import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import data from './data';
import './SettingsHint.css';


class SettingsHint extends Component {


    __formatText(val) {
        const regex1 = /\((.*)\)/g;
        const regex2 = /\[(.*)\]/g;
        const text0 = val.split(regex1)[0]
        const text1 = val.split(regex1)[1]
        const text2 = val.split(regex2)[1]
        return (
            <span className="SettingsHint__List__SubDescription">
                {text0} <Link to={text1}>{text2}</Link>
            </span>
        )
    }

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
                                {item.subDescription &&
                                    <span className="SettingsHint__List__SubDescription"
                                        dangerouslySetInnerHTML={{ __html: item.subDescription[1] }} />
                                } 

                                {item.subDescription && this.__formatText(item.subDescription[0])}
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