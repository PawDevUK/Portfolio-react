import React, { useState } from 'react';
import s from '../style/style.module.css';

export default function DayTimeLine() {
    const [state, setState] = useState(null);

    return (
        <div className={s.TimeLineWrapper}>
            <div className={s.T_Line}></div>
        </div>
    );
}
