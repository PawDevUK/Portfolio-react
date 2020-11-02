import axios from 'axios';
import React, { useEffect } from 'react';

import Logo from '../common/logo'
import Particles from 'react-particles-js'
import img from '../../img/computer-2982270_1920.jpg';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        height: "100vh",
        width: "100vw",
        backgroundColor: "#35495e",
        position: "relative",
    },
    leftImg: {
        background: `url(${img})`,
        backgroundSize: "cover",
        height: "100vh",
        width: "50vw",
        position: "absolute",
        top: "0px",
    },
    RightWrapper: {
        position: "absolute",
        height: "100vh",
        width: "50vw",
        top: "0px",
        left: "50vw",
    },
    Particles: {
        position: "absolute",
        height: "100%",
        width: " 100%",
    },
    upperWrapper: {
        position:"relative",
        height: "50vh"
    },
    lowerWrapper: {
        height: "50vh"
    },
    logo: {
        position:"absolute",
        top: "200px",
        
    }
});


const WeakUpCloud = () => {
    axios.get('https://portfolio-server-293806.ew.r.appspot.com/card')
        .then(
            (res) => {
                console.log("Intro woke up gcloud and mongodb so cards shouldn't lag.")
            }
        );
    axios.get('https://portfolio-server-293806.ew.r.appspot.com/stack')
        .then((res) => { console.log("Intro woke up gcloud and mongodb so stack shouldn't lag.") })
}

function Intro(props) {
    const classes = useStyles();
    useEffect(
        () => { WeakUpCloud() }
    )

    return (
        <div className={classes.root}>

            <div className={classes.RightWrapper}>
                <Particles className={classes.Particles}
                    params={{
                        particles: {
                            number: {
                                value: 30
                            },
                            size: {
                                value: 1
                            },
                            autoPlay: true,

                            opacity: {
                                value: 0.6,
                                random: true
                            },
                            links: {
                                enable: true,
                                opacity: 0.2
                            },

                        }
                    }} />
                <div className={classes.upperWrapper}>
                    <Logo className={classes.logo}></Logo>
                </div>
                <div className={classes.lowerWrapper}>

                </div>
            </div>

            <div className={classes.leftImg}></div>

        </div>
    );
}

export default Intro;