import React, { Component } from 'react';
import s from './style/style.module.css'
import DayTime from './dayTime/DayTime.jsx'

export default class WorkTracker extends Component {
    render() {
        return (
            <div id={s.wrapper}>
                <h1>Work Tracker</h1>
                <DayTime></DayTime>
            </div>
        );
    }
}