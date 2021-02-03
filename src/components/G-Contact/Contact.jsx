import JumboSectionHeader from 'components/common/JumboSectionHeader';
import {P,Bold} from 'components/common/typography'
import { boxShadow12, ImgCover } from 'styled.js'
import styled from 'styled-components';
import { MyPhoto, SkyScraper } from 'img'
import React from 'react';


const Wrapper = styled.div`
background-image: url(${SkyScraper});
${ImgCover} // properties for parallax background
position:relative;
height:500px;
width:100%;
`
const OuterTextWrapper = styled.div`
border-radius:5px;
position:absolute;
top:100px;
left:10vw;
right:10vw;
`
const WhiteBox = styled.div`
${boxShadow12}
border-radius:5px;
background-color:#fff;
width:100%;
padding:10px;
`
const TextWrapper = styled.div`
margin:20px 0px 0px 10px;
`

export default function Contact() {
    return (
        <Wrapper>
            <OuterTextWrapper>
                <WhiteBox>
                    <JumboSectionHeader>
                        Contact
                    </JumboSectionHeader>
                    <TextWrapper>
                        <P>If you would like to contact me regarding any queries please don't  <br/> hesitate and drop me an email  or call me directly on my mobile. <br/> I'm always more than happy to speak and answer any questions.</P> <br/>
                        <P><Bold>Email:</Bold> p.f.siwek@gmail.com<br/>
                        <Bold>Mobile:</Bold> 07463765514</P>
                    </TextWrapper>
                </WhiteBox>
            </OuterTextWrapper>
        </Wrapper>
    )
}
