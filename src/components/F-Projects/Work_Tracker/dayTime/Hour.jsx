import React, { useState } from 'react';
import { useEffect } from 'react';
import s from '../style/style.module.css';

export default function Hour(props) {
    const [first, setFirst] = useState(null);
    const [second, setSecond] = useState(null);

    useEffect(()=>{
        if(props.first){
            setFirst(props.first)
        }
        if(props.second){
            setSecond(props.second)
        }

        
    },[props])

    return (
        <div className={s.HourWrapper}>
            <div className={s.Timer}>
                <div className={s.FirstTimerHour}>{first}</div>
                <div className={s.SecondTimerHour}>{second}</div>
            </div>
            <div className={s.TimeLineWrapper}>
                <div className={s.H_Divider}></div>
                <div className={s.HH_Divider}></div>
                <div className={s.QH_Divider}></div>
                <div className={s.T_Line}></div>
            </div>
           
        </div>
    );
}