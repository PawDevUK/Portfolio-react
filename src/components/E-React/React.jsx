import React from 'react'
import styled, { keyframes} from 'styled-components'
import JumboSectionHeader from 'components/common/JumboSectionHeader'
import { P } from 'components/common/typography'
import Pros from 'components/E-React/pros'
import {ReactComponentData} from 'store'
import Reacticon from 'img/react.svg'
import { SvgLoader } from 'react-svgmt'

const height = "350px"
const rotate = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }

`
const Wrapper = styled.div`
@media(max-width:400px){
height:500px;
};
margin:0px;
width:100%;
min-height:380px;
background-color:#17293f;
margin-bottom:10px;
@media(min-width:600px){
 min-height:310px;
};
`
const ContentWrapper = styled.div`
display:flex;
@media(max-width:1000px){
    width:80%;
}
/* height:${height}; */
width:1000px;
margin:auto;
`

const LeftWrapper = styled.div`
@media(max-width:992px){
    width:100%
}
width:60%;
`

const ProsWrapper = styled.div`
height:80px;
display:flex;
flex-wrap:wrap;
margin-bottom:10px;
`
const ReactIcon = styled(SvgLoader)`
display:flex;
animation:${rotate} 30s infinite linear;
height:270px;
width:300px;
.background{
fill:rgba(41, 87, 111, 0.46);
}
.ring{
    fill:#17293f;
}
`
const RightWrapper = styled.div`
@media(max-width:992px){
    display:none;
}

display:flex;
margin:auto;
justify-content:center;
align-items:center;
height:${height};
`
let StP = styled(P)`
line-height:19px;
margin-bottom:15px;
`
export default function ReactSection() {


    return (
        <Wrapper id="react" >
            <ContentWrapper>
                <LeftWrapper >
                    <JumboSectionHeader dark >{ReactComponentData.Header}</JumboSectionHeader>
                    <StP dark >{ReactComponentData.MainText}
                    </StP>
                    <ProsWrapper>
                    {ReactComponentData.Pros.map((pro,i)=>{
                        return  <Pros dark>{pro}</Pros>
                    })}
                       
                    </ProsWrapper>
                </LeftWrapper>
                <RightWrapper>
                    <ReactIcon path={Reacticon}> </ReactIcon>
                </RightWrapper>
            </ContentWrapper>
        </Wrapper>
    )
}

