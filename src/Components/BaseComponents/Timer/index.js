import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Timer.scss';

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: {
                m: 0,
                s: 0
            },
            seconds: this.props.mins,
        };
        this.countDown = this.countDown.bind(this);
        this.timeTaken = this.timeTaken.bind(this);
    }


    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    startTimer() {
        this.timer = setInterval(this.countDown, 1000);
    }

    secondsToTime(sec) {
        return {
            m: this.state.time.m +  Math.floor(sec / 60),
            s: sec % 60
        }
    }

    countDown() {
        let seconds = this.state.time.s + 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });    
    }

    timeTaken() {
        return `${this.state.time.m} Mins and ${this.state.time.s} Secs`;
    }


    render() {
        return (
            <div className="Timer">
                <div className="Timer__Item">
                    <span className="days">{this.state.time.m}</span>
                    <div className="smalltext">Mins</div>
                </div>
                <div className="Timer__Item">
                    <span className="days">{this.state.time.s}</span>
                    <div className="smalltext">Secs</div>
                </div>
            </div>
        );
    }
}

Timer.propTypes = {

};

export default Timer;