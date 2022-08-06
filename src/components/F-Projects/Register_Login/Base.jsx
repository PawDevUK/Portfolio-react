import React from 'react';
import s from './styles/RegisterLogin.module.css'

function Base(props){
        return (
            <div className={s.Wrapper}>
                <div className={s.section}>
                    {props.children}
                </div>
            </div>
        );
    }

export default Base;