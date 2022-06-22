import React, { useEffect } from 'react'
import JumboSectionHeader from 'components/common/JumboSectionHeader'
import styled from 'styled-components'
import 'aos/dist/aos.css'
import AOS from 'aos'
import {connect} from 'react-redux'
import { getAboutText, getAboutHeader } from 'selectors/pageContent.selector'

const Wrapper = styled.div`
  padding: 10px 0px;
  margin: 0px auto;
  width: 100%;
`
const Card = styled.div`
  background: #fff;
  width: 100%;
`

function TopIntro(props) {
  useEffect(() => AOS.init({ duration: 1000 }))
  console.log(props)
  return (
    <Wrapper id="about">
      <Card data-aos="fade-right">
        <JumboSectionHeader>{props.header}</JumboSectionHeader>
        {props.about}
      </Card>
    </Wrapper>
  )
}

const mapStateToProps = (state) =>{
  return {
    header:getAboutHeader(state),
    about:getAboutText(state)
  }
}
export default connect(mapStateToProps)(TopIntro)