import React, { Component } from 'react';

import DayTime from './DayTime/DayTime.jsx';
import Menu from './Menu/Menu';
import s from './style/style.module.css';

export default class WorkTracker extends Component {
    render() {
        return (
            <div id={s.wrapper}>
                <Menu>
                    <DayTime></DayTime>
                </Menu>
            </div>
        );
    }
}
