import React from 'react';
import s from '../style/style.module.css';

export default function Eclipse() {
    return (
        <div>
            <div id={s.circleWrapper}>
                <div id={s.outerCircle}></div>
                <div id={s.innerCircle}>
                    <div id={s.text}>
                        £220.20
                    </div>
                </div>
            </div>
        </div>
    );
}
