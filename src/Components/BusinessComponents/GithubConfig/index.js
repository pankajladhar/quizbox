import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GithubConfig.css'
import step1 from './images/step-1.png';
import step2 from './images/step-2.png';
import step3 from './images/step-3.png';

class GithubConfig extends Component {
    render() {
        return (
            <div className="GithubConfig">
                <h2>How to configure using github</h2>
                <h3> Assumption :</h3>
                <div>
                    You have pushed
                    <span className="GithubConfig__FileName">react_new.json</span>
                    file in one of your repository.
                </div>
                <div>
                    * extension of file must be <span className="GithubConfig__FileName">.json</span>
                    and validate json.
                </div>
                <h3>Step 1</h3>
                <img src={step1} alt="step1" />
                <h3>Step 2</h3>
                <img src={step2} alt="step2" />
                <h3>Step 3</h3>
                <img src={step3} alt="step3" />
            </div>
        );
    }
}

GithubConfig.propTypes = {

};

export default GithubConfig;