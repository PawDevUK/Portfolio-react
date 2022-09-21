import React, { Component } from 'react';
import s from '../style/style.module.css';
import Hour from './Hour';
import Eclipse from './Eclipse';

export default class DayTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // arr: ['20:00', '21:00', '22:00', '23:00', '00:00', '01:00', '02:00', '03:00','04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00',],
            arr: [],
        };
    }

    createShift(payload) {
        const arr = [];

        for (let i = 0; i < 15; i++) {
            if (i === 0) {
                arr.push( <Hour first={null} second={null}></Hour>)
             }
             arr.push(<Hour first={i === 0 ?payload[i] : null} second={payload[i + 1]}></Hour>);
        }

        payload.forEach((ele, i) => {
           
        });
        return arr;
    }

    render() {
        return (
            <div id={s.TL_Wrapper}>
                <div className={s.main}>
                    <div className={s.mainTop}></div>
                    <div className={s.mainBottom}>
                        <div className={s.TL_Wrapper}>{this.createShift(this.state.arr)}</div>
                    </div>
                   
                </div>
                <div id={s.right}>
                    <Eclipse basic={100} overTime={100}></Eclipse>
                </div>
            </div>
        );
    }
}
