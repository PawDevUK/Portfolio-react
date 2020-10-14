import React from 'react'
import Particles from 'react-particles-js'
import logo from "../../img/pavdev.png"


export default function Particle() {
    return (
        <Particles width='100%' height='500px' params={{
          particles:{
            number:160,
            densityEnable:true
          }
            
        }}style={{
            backgroundColor:"green"
        }} />
    )
}
