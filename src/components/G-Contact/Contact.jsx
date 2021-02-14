import JumboSectionHeader from 'components/common/JumboSectionHeader';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {P,Bold} from 'components/common/typography'
import Button from 'components/common/Button'
// import {SectionHeader} from 'components/common/typography'/
import { boxShadow12, ImgCover } from 'styled.js'
import styled from 'styled-components';
import {SkyScraper } from 'img'
import React from 'react';


const Wrapper = styled.div`
background-image: url(${SkyScraper});
${ImgCover} // properties for parallax background
width:100%;
padding:1px;
`

const WhiteBox = styled.div`
margin:100px auto;
background-color:#fff;
border-radius:5px;
${boxShadow12}
padding:10px;
width:80%;
`
const InnerWrapper = styled.div`
width:540px;
margin:auto;
`
const TextWrapper = styled.div`
margin:10px auto 0px auto;
`
const Form = styled.form`
margin:auto;
`
const ButtonWrapper = styled.div`
width:250px;
display:flex;
justify-content:space-between;
height:100px;
margin:5px auto;
`
const StTextField = styled(TextField)`
margin:10px!important;
width:250px;
`
const StTextareaAutosize = styled(TextareaAutosize)`
display:block;
width:90%;
margin:20px auto !important;
:active{

}
`
export default function Contact() {
    return (
        <Wrapper>
                <WhiteBox>
                    <InnerWrapper>
                    <JumboSectionHeader>
                        Contact
                    </JumboSectionHeader>
                    <TextWrapper>
                        <P>If you would like to contact me regarding any queries please don't  <br/> hesitate and drop me an email  or call me directly on my mobile. <br/> I'm always more than happy to speak and answer any questions.</P>
                        {/* <SectionHeader>Message Me</SectionHeader> */}
                        <hr/>
                        <P style={{marginTop:"10px"}}>
                             <Bold>Email:</Bold> p.f.siwek@gmail.com <br/>
                             <Bold>Mobile:</Bold> 07463765514 <br/>
                             <Bold>LinkedIn:</Bold>
                             <a href="www.linkedin.com/in/pawel-siwek-78432119b">Profile</a>
                        </P>
                    </TextWrapper>
                    
                            <Form  noValidate autoComplete="off">

                                <StTextField required id="standard-basic" label="First Name" />
                                <StTextField id="standard-basic" label="Last Name" />
                                <StTextField  required id="standard-basic" label="Email" />
                                <StTextField id="standard-basic" label="Phone" />
                                <StTextField id="standard-basic" label="Website" />
                                <StTextField id="standard-basic" label="Company" />
                                <StTextareaAutosize required aria-label="minimum height" rowsMin={4} required id="outlined-basic" placeholder="Message" variant="outlined"/>
                                <ButtonWrapper>
                                     <Button>Send</Button>
                                     <Button>Clear</Button>
                                </ButtonWrapper>
                            </Form>
                            <TextWrapper>
                    </TextWrapper>
                    </InnerWrapper>
                </WhiteBox>
        </Wrapper>
    )
}
