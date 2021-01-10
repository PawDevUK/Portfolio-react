import React from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js'
import Background from '../../img/BackgroundBlue.png'
import FooterYear from './FooterYear'

// const logoBlue = "#1598C3"
// const backgroundColor = '#35495e'

const Wrapper = styled.div`
position:relative;
padding:0px;
margin:0px;
height: 200px;
width: 100%;
background-image: url(${Background});
background-repeat: no-repeat;
background-size: 100%;
`
const StParticles = styled(Particles)`
padding: 0px;
margin: 0px;
height: 100%;
width:100%;
`

const Year = styled(FooterYear)`
position:absolute;
top:0px;
color:red;
font-size:10px;
`

export default function Footer() {
    return (
        <Wrapper>
            <Year></Year>
        </Wrapper>


    )
}
