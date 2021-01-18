import React, { useEffect, useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
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
height:370px;
background-color:#17293f;
margin-bottom:10px;
@media(max-width:500px){
height:550px;
};
@media(min-width:992px){
/* height:450px; */
}
`
const ContentWrapper = styled.div`
display:flex;
@media(max-width:1000px){
    width:80%;
    /* height:350px; */
}
height:${height};
width:1000px;
margin:auto;
`

const LeftWrapper = styled.div`
${p => p.Large ? css`width:60%;` : css`width:100%;`};
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
display:flex;
justify-content:center;
align-items:center;
height:${height};
`

export default function ReactSection() {
    const [Large, setLarge] = useState(true)
    const [size, setSize] = useState(0)
    useEffect(() => {
        if(size>1000){
            setLarge(true)
        }else{
            setLarge(false)
        };
        window.addEventListener('resize',()=>{ setSize(window.innerWidth)})
    })

    return (
        <Wrapper >
            <ContentWrapper>

                <LeftWrapper Large={Large}>
                    <JumboSectionHeader dark >why react ?</JumboSectionHeader>
                    <P dark >I'm using React because it's great tool allowing to mix HTML/CSS and JavaScript with help of JSX.
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
                {Large ? <RightWrapper>
                    <ReactIcon path={Reacticon}> </ReactIcon>
                </RightWrapper> : null}
            </ContentWrapper>
        </Wrapper>
    )
}

