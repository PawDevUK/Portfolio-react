import JumboSectionHeader from 'components/common/JumboSectionHeader';
import { boxShadow12,ImgCover } from 'styled.js'
import styled from 'styled-components';
import { MyPhoto } from 'img'
import React from 'react';


const Wrapper = styled.div`
background-image: url(${MyPhoto});
position:relative;
height:700px;
width:100%;
${ImgCover}
`
const OuterTextWrapper = styled.div`
border-radius:5px;
position:absolute;
${boxShadow12}
top:400px;
left:5vw;
right:5vw;
`
const TextWrapper = styled.div`
position:relative;
width:100%;
`
const BlueBox = styled.div`
padding:0px 0px 10px 8px;
background-color:#17293F;
border-radius:3px;
position:absolute;
${boxShadow12}
width:280px;
left:50px;
top:-50px;
`
const WhiteBox = styled.div`
border-radius:5px;
background-color:#fff;
width:100%;
height:270px;
`

export default function Contact() {
    return (
        <Wrapper>
            <OuterTextWrapper>
                <TextWrapper>
                    <BlueBox>
                        <JumboSectionHeader dark >
                            Contact
                        </JumboSectionHeader>
                    </BlueBox>
                    <boxShadow12>
                        <WhiteBox>


                        </WhiteBox>
                    </boxShadow12>

                </TextWrapper>
            </OuterTextWrapper>
        </Wrapper>
    )
}
