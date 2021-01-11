import img from 'img/computer-2982270_1920.jpg'
import React from 'react';
import styled from 'styled-components'
import Particles from 'react-particles-js'
import { makeStyles } from '@material-ui/core/styles';
import Welcome from 'components/Intro/welcome'

const LeftImg = styled.div`
background: url(${img});
background-size: cover;
height:100vh;
width: 50vw;
`
const Large = styled.div`
display:flex;
@media(max-width:992px){
    display:none;
}
`
const useStyles = makeStyles({
    root: {
        height: "100vh",
        width: "100vw",
        backgroundColor: "#17293f",
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

    },
    Particles: {
        position: "absolute",
        height: "100%",
        width: " 100%",
    },

});
const RightWrapper = styled.div`
display:flex;
height: 100vh;
width: 50vw;
top: 0px;
left: 50vw;
`

//mobile
const Mobile = styled.div`
display:none;
@media(max-width:992px){
    display:block
}
`
const TopImg = styled.div`
z-index:1000;
background: url(${img});
background-size: cover;
height:50vh;
width: 100vw;
`
const BottomWrapper = styled.div`
display:flex;
justify-content:center;
height:50vh;
width:100%;
`
function Intro(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Large>
                <LeftImg></LeftImg>
                <RightWrapper>
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
                    <Welcome></Welcome>
                </RightWrapper>
            </Large>
            <Mobile>
                <TopImg></TopImg>
                <BottomWrapper>
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
                    <Welcome></Welcome>
                </BottomWrapper>
            </Mobile>
        </div>
    );
}

export default Intro;