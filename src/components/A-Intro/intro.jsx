import { makeStyles } from '@material-ui/core/styles'
import Welcome from 'components/A-Intro/welcome'
import img from 'img/computer-2982270_1920.jpg'
import Particles from 'react-tsparticles'
import styled from 'styled-components'
import React from 'react'

const useStyles = makeStyles({
  leftImg: {
    background: `url(${img})`,
    backgroundSize: 'cover',
    height: '100vh',
    width: '50vw',
    position: 'absolute',
    top: '0px',
  },
  Particles: {
    display: 'block',
    position: 'absolute',
    height: '95%',
    width: ' 49%',
  },
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
    height: 500px;
  }
`
const TopImg = styled.div`
  z-index: 1000;
  background: url(${img});
  background-size: cover;
  height: 50vh;
  width: 100vw;
`
const BottomWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 50vh;
  width: 100%;
  position: relative;
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

  return (
    <MainWrapper>
      <Large>
        <LeftImg></LeftImg>
        <RightWrapper>
          <Particles
            className={classes.Particles}
            params={{
              particles: {
                number: {
                  value: 30,
                },
                size: {
                  value: 1,
                },
                autoPlay: true,

                opacity: {
                  value: 0.6,
                  random: true,
                },
                links: {
                  enable: true,
                  opacity: 0.2,
                },
              },
            }}
          />
          <Welcome buttonIntro></Welcome>
        </RightWrapper>
      </Large>
      <Mobile>
        <TopImg></TopImg>
        <BottomWrapper>
          <Welcome buttonIntro></Welcome>
        </BottomWrapper>
      </Mobile>
    </MainWrapper>
  )
}

export default Intro
