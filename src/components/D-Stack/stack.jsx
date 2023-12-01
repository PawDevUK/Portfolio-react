import React from 'react'
import {connect} from 'react-redux'
import MiniCard from './card.jsx'
import styled from 'styled-components'
import JumboSectionHeader from 'components/common/JumboSectionHeader'
import { getStack, getStackHeader } from 'selectors/pageContent.selector'

const Wrapper = styled.div`
  background: #fff;
  width: 100%;
  margin: 0px auto 50px auto;
`
const Thumbnails = styled.div`
  justify-content: center;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: 700px) {
    width: 100%;
  }
`

function Stack(props) {
  return (
    <Wrapper id="use">
      <JumboSectionHeader>{props.header}</JumboSectionHeader>
      <Thumbnails>
        {props.tools.map((item, i) => {
          return (
            <MiniCard
              key={i}
              styled={item.styled}
              image={item.img}
              title={item.title}
              text={item.text}
              href={item.webHref}
            ></MiniCard>
          )
        })}
      </Thumbnails>
    </Wrapper>
  )
}

const mapStateToProps = (state)=>{
  return {
    header:getStackHeader(state),
    tools:getStack(state)
  }
}

export default connect(mapStateToProps)(Stack)