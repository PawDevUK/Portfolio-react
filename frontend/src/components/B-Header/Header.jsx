import JumboMainText from 'components/B-Header/JumboText';
import MainLarge from 'components/B-Header/LargeMenu'
import MobileMenu from 'components/B-Header/MobileMenu'
import React, { useEffect, useState } from 'react';
import { useWindowWidth } from 'functions'
import styled from 'styled-components';
const backgroundColor = '#17293F';

const Wrapper = styled.div`
margin:0px;
padding:0px;
`;

const BigBlue = styled.div`
margin:0px;
height:583px;
background-color:${backgroundColor};
@media(max-width:700px){
    height:60vw;
}
`
const JumboTextWrapper = styled.div`
text-align:center;
width:600px;
margin:0px auto;
padding-top:1px;
@media(max-width:700px){
    width:350px;
}
`

export default function Header() {
    const [large,setLarge] = useState(false)
    const [mobile, setMobile] = useState(false)
    const windowWidth = useWindowWidth()


    useEffect(() => {
        windowWidth < 700 ? setMobile(true) : setMobile(false)
        windowWidth > 993 ? setLarge(true) : setLarge(false)
    },[windowWidth])


    return (
        <Wrapper >
           {!large?<MobileMenu></MobileMenu>:null}
            <BigBlue >
               {large?<MainLarge></MainLarge> :null}
                <JumboTextWrapper>
                  <JumboMainText  mobile={mobile}></JumboMainText>
                </JumboTextWrapper>
            </BigBlue>
        </Wrapper>
    );
}