import React, { Component } from 'react';
import s from '../style/style.module.css';
import Eclipse from './Eclipse';

export default class DayTime extends Component {
    render() {
        return (
            <div id={s.TL_Wrapper}>
                <div id={s.main}></div>
                <div id={s.right}>
                    <Eclipse basic={100} overTime={100}></Eclipse>
                </div>
            </div>
        );
    }
}
