import s from '../style/style.module.css';
import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core';

export default function Eclipse(props) {
    const [pay, setPay] = useState(0);
    const [basic, setBasic] = useState(0);
    const [overtime, setOvertime] = useState(0);

    useEffect(() => {
        setBasic(props.basic);
        setOvertime(props.overTime);
        setPay(props.basic + props.overTime);
    }, [props]);

    //styles
    const SCBlue = withStyles({
        root: {
            position: 'absolute',
            color:'#283daf'
        },
    })(CircularProgress);

    const SCGreen = withStyles({
        root: {
            position: 'absolute',
            color: '#28b828',
        }
    })(CircularProgress);
    ///

    function calculatePercent(basic,overtime){
        return overtime / (( basic + overtime) / 100)
    }

    return (
        <div>
            <div id={s.circleWrapper}>
                <div className={s.SCWrapper}>
                    <SCBlue color='primary' size={144} thickness={10} variant='determinate' value='100' />
                    <SCGreen color='secondary' size={144} thickness={10} variant='determinate' value={calculatePercent(basic,overtime)} />
                </div>

                <div id={s.innerCircle}>
                    <div id={s.text}>{`£${pay}`}</div>
                </div>
            </div>
        </div>
    );
}
