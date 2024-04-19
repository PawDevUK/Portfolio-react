import Button from 'components/common/Button'
import { Link } from 'react-router-dom'
import  React from 'react'
import { SvgLoader } from 'react-svgmt'
import logo from 'img/pavdev.svg'
import styled from 'styled-components'

// import { LocalOnEnter } from 'store/VisitorsDataAPI'
// import { CurrentTime, CurrentDate } from 'factory'

const Wrapper = styled.div`
  position: relative;
  width: 170px;
  height:200px;
  margin:auto;
`
const LogoTextWrapper = styled.div`
  position: relative;
  padding:5px;
  margin: auto;
  top:30%;
`
const MobilLogo = styled(SvgLoader)`
  display: block;
  width: auto;
  height: 50px;
  margin-bottom: 10px;

  > path {
    fill: #fff;
  }
`
const H1 = styled.h5`
  margin: 0px;
  color: #fff;
  font-size: 20px;
`
const Text = styled.h5`
  margin: 0px;
  color: #fff;
`
const StButton = styled(Button)`
  margin: 40px auto auto auto;
`
const StLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`
function Welcome({ ...props }) {
  function VisitorsRecorder() {
    // const visitorCounter = {
    //   date: CurrentDate(),
    //   time: CurrentTime(),
    // }

    // LocalOnEnter.get('/', visitorCounter).then((res) => console.log(res.data))
    
  }

  return (
    <Wrapper>
      <LogoTextWrapper>
        <H1>I'm</H1>
        <MobilLogo path={logo}></MobilLogo>
        <Text>
          This is my Portfolio <br />
        </Text>
        <StLink to="/content">
          <StButton 
          // onClick={VisitorsRecorder}
          >Enter</StButton>
        </StLink>
      </LogoTextWrapper>
    </Wrapper>
  )
}

export default Welcome
