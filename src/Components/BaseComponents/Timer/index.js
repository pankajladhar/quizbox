import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Timer.css';

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: {},
            seconds: this.props.mins,
        };
        this.countDown = this.countDown.bind(this);
    }

    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));
        
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar },()=>{
            this.startTimer();
        });
    }

    startTimer() {
        this.timer = setInterval(this.countDown, 1000);
    }

    countDown() {
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        if (seconds == 0) {
            clearInterval(this.timer);
            this.props.onTimeOut();
        }
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