import {rightData }from 'store/Footer'
import {BackgroundBlue} from 'styled'
import styled,{css} from 'styled-components'
import {getYear} from 'factory'
import React,{useState} from 'react'

const center = css`
justify-content:center;
align-items:center;
display:flex;
height:100%;
`

const Wrapper = styled.div`
${BackgroundBlue}
height:140px;
width:100%;
`
const InnerWrapper = styled.div`
display:flex;
margin:auto;
height:100px;
width:960px;
`
const Left = styled.div`
${center};
width:20%;
`

const Mid = styled.div`
${center};
width:60%;
`

const Right = styled.div`
${center};
width:20%; 
`
const NickHover = css`
color:#01579B;
font-weight:500;
`

const H2 = styled.h2`
cursor:pointer;
color:#fff;
display:flex;
`
const Nick = styled.p`
margin:0px 3px;
${p => p.nick?css`${NickHover}`:
css`color:#fff;
`};

`
const Text = styled.p`
color:#fff;
`

export default function Footer() {
    let [nick,setNick] = useState(false);

    function mouseEnterH2(){
        setNick(p=> nick = !p)
    }

    return (
       <Wrapper  onMouseEnter={mouseEnterH2} onMouseLeave={mouseEnterH2}>
           <InnerWrapper>
               <Left></Left>
               <Mid><H2 >All rights reserved <Nick nick={nick}> pavdev </Nick> London </H2>{getYear()}</Mid>
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
