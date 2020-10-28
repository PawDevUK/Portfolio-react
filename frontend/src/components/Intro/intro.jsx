import React from 'react';
import styled from 'styled-components'
import Particles from 'react-particles-js'
import img from '../../img/computer-2982270_1920.jpg';
import IntroButtonGroup from './introButtonGroup';
import Logo from '../logo'

const Root = styled.div`
height:100vh;
width:100vw;
background-color:#35495e;
position:relative;
`
const Img = styled.div`
background:url(${img});
border:0;
background-size: cover;
height:100vh;
width:50vw;
position:absolute;
top:0px;
`
// ------------------------------------
const Wrapper = styled.div`
position:absolute;
height:100vh;
width:50vw;
top:0px;
left:50vw;
`
const InnerWrapper = styled.div`
display:flex;
justify-content:center;
align-items: center;
position:relative;
height:100%;
`
const Particle = styled(Particles)`
    position:absolute;
    height:100%;
    width:100%;
`
const IntroLogo = styled(Logo)`

`
const IBG = styled(IntroButtonGroup)`
    `

function Intro(props) {
    return (
        <Root>
            <Wrapper>
                <IntroLogo></IntroLogo>
                <InnerWrapper>
                    <Particle
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

                    <IBG></IBG>
                </InnerWrapper>

            </Wrapper>
            <Img></Img>


        </Root>
    );
}

export default Intro;