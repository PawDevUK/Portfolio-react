import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Particles from 'react-particles-js'
import Background from '../../img/BackgroundBlue.png'

const logoBlue = "#1598C3"
const backgroundColor= '#35495e'


const useStyles = makeStyles({
root:{
    height:200,
    width:"100%",
    backgroundImage:`url(${Background})`
},
particles:{
    height:"100%"
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
    </div>
    )
}
