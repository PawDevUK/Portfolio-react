import React, { Component } from 'react';
import s from './style.module.css'


export default class WorkTracker extends Component {
    render() {
        return (
            <div id={s.wrapper}>
                <h1>Work Tracker</h1>
            </div>
        );
    }
}