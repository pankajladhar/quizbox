import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Results extends PureComponent {
    render() {
        return (
            <div>
                Results 
                Correct Answer
                {this.props.data}
            </div>
        );
    }
}

Results.propTypes = {

};

export default Results;