import React from 'react'
import styled, { keyframes} from 'styled-components'
import JumboSectionHeader from 'components/common/JumboSectionHeader'
import { P } from 'components/common/typography'
import Pros from 'components/E-React/pros'
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
margin:0px;
padding:0px;
width:100%;
height:400px;
background-color:#17293f;
margin-bottom:10px;
@media(max-width:400px){
height:550px;
};
@media(min-width:992px){
 height:370px;
}
`
const ContentWrapper = styled.div`
display:flex;
@media(max-width:1000px){
    width:80%;
}
height:${height};
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

export default function ReactSection() {


    return (
        <Wrapper id="react" >
            <ContentWrapper>
                <LeftWrapper >
                    <JumboSectionHeader dark >why react ?</JumboSectionHeader>
                    <P dark >I use React because it's great tool allowing to mix HTML/CSS and JavaScript with help of JSX.
                    Great benefits of React are also quick rendering of content and changing data without reloading page what helps improve user experience.
                    As React uses reusable components, source code is ease to maintain. Data flows in one way so code is stable.
                    React is safe, JSX blocks injection and XSS.
                    </P>
                    <ProsWrapper>
                        <Pros dark >Fast Rendering</Pros>
                        <Pros dark >JSX</Pros>
                        <Pros dark >Stable Code</Pros>
                        <Pros dark >Safety</Pros>
                        <Pros dark >Maintenance</Pros>
                        <Pros dark >One-way data flow</Pros>
                        <Pros dark >Facebook Support</Pros>
                        <Pros dark >Reusable Components</Pros>
                    </ProsWrapper>
                </LeftWrapper>
                <RightWrapper>
                    <ReactIcon path={Reacticon}> </ReactIcon>
                </RightWrapper>
            </ContentWrapper>
        </Wrapper>
    )
}

