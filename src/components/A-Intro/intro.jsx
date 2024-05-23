import Particles, { initParticlesEngine } from '@tsparticles/react'
import {ParticlesOptions} from 'selectors/particlesOptions.selector'
import { useSelector } from 'react-redux'
import React,{ useCallback, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Welcome from 'components/A-Intro/welcome'
import img from 'img/computer-2982270_1920.jpg'
import {loadSlim}from '@tsparticles/slim'
import styled from 'styled-components'

const useStyles = makeStyles({
  leftImg: {
    background: `url(${img})`,
    backgroundSize: 'cover',
    height: '100vh',
    width: '50vw',
    position: 'absolute',
    top: '0px',
  },
  ParticlesRight: {
    display: 'block',
    position:'absolute',
    height: '95%',
    width: ' 49%',
  },
  ParticlesBottom:{
    display: 'block',
    position:'absolute',
    height: '49%',
    width: ' 100',
  }
})

const MainWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #17293f;
`

const Large = styled.div`
  display: flex;
  @media (max-width: 992px) {
    display: none;
  }
`
const LeftImg = styled.div`
  background: url(${img});
  background-size: cover;
  height: 100vh ;
  width: 50vw;
`
const RightWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 50vw;
  top: 0px;
  left: 50vw;
`
//mobile
const Mobile = styled.div`
  display: none;
  @media (max-width: 992px) {
    display: block;
    height:100%
  }
`
const TopImg = styled.div`
  z-index: 1000;
  background: url(${img});
  background-size: cover;
  height: 50%;
  width: 100vw;
`
const BottomWrapper = styled.div`
  height: 50%;
  width: 100%;
`
const ParticlesBottom = styled(Particles)`
  * {
    height: 50vh;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
`
function Intro(props) {
  const classes = useStyles()

  useEffect(()=>{
    initParticlesEngine(async(engine)=>{
      await loadSlim(engine)
    })
  },[]);

  const particlesOptions = useSelector((state)=> state.ParticlesOptions)

  return (
    <MainWrapper>
      <Large>
        <LeftImg></LeftImg>
        <RightWrapper>
          <Particles
            className={classes.ParticlesRight}
            id="tsparticles"
            options={particlesOptions}
          />
          <Welcome buttonIntro></Welcome>
        </RightWrapper>
      </Large>
      <Mobile>
        <TopImg></TopImg>
        <BottomWrapper>
        <Particles
        className={classes.ParticlesBottom}
        id="tsparticles1"
        options={particlesOptions}
        />
        <Welcome buttonIntro></Welcome>
        </BottomWrapper>
      </Mobile>
    </MainWrapper>
  )
}

export default Intro
