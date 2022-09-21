import React, { Component } from 'react';
import s from '../style/style.module.css';
import DayTimeLine from './DayTimeLine';
import Eclipse from './Eclipse';

export default class DayTime extends Component {
    render() {
        return (
            <div id={s.TL_Wrapper}>
                <div className={s.main}>
                    <div className={s.mainTop}></div>
                    <div className={s.mainBottom}>
                        <DayTimeLine></DayTimeLine>
                    </div>
                   
                </div>
                <div id={s.right}>
                    <Eclipse basic={100} overTime={100}></Eclipse>
                </div>
            </div>
        );
    }
}
