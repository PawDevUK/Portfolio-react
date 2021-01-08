import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Particles from 'react-particles-js'
import Background from '../../img/BackgroundBlue.png'
import FooterCurrentYear from './FooterYear'

const logoBlue = "#1598C3"
const backgroundColor = '#35495e'

const Year = styled(FooterCurrentYear)`
                 color:red;
                 font-size:10px;
                `


const useStyles = makeStyles({
    root: {
        padding:0,
        margin:0,
        height: 200,
        width: "100%",
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%'
    },
    particles: {
        padding:0,
        margin:0,
        height: "100%"
    }
})

export default function Footer() {


    const classes = useStyles();

    
    return (
        <div className={classes.root}>
            <Particles className={classes.particles}
                params={{
                    particles: {
                        number: {
                            value: 20
                        },
                        size: {
                            value: 1
                        },
                        autoPlay: true,

                        opacity: {
                            value: 0.3,
                            random: true
                        },
                        links: {
                            enable: true,
                            opacity: 0.1
                        },

                    }

                }} />
            {/* <Year></Year> */}
        </div>
    )
}
