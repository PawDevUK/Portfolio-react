import {FootBackGround,shadow6,h3Light} from '../styled'
import {rightData }from '../../store/PageFeed/Footer'
import styled,{css} from 'styled-components'
import {getYear} from '../factory'
import React from 'react'

const center = css`
justify-content:center;
align-items:center;
display:flex;
height:100%;
`

const Wrapper = styled.div`
height:140px;
width:100%;
`
const InnerWrapper = styled.div`
${FootBackGround};
display:flex;
margin:auto;
height:100px;
width:960px;
${shadow6};
`
const Left = styled.div`
${center};
width:20%;
`

const Mid = styled.div`
${center}
width:60%;
`

const Right = styled.div`
${center};
width:20%; 
`
const Text = styled.p`
${h3Light};
`

export default function Footer() {
    return (
       <Wrapper>
           <InnerWrapper>
               <Left></Left>
               <Mid>All rights reserved pavdev London {getYear()}</Mid>
               <Right>
                   <ul>
                      {rightData.map(( li)=>{
                          return <li><Text>{li}</Text></li>
                      })}
                   </ul>
               </Right>
           </InnerWrapper>
       </Wrapper>
    )
}
