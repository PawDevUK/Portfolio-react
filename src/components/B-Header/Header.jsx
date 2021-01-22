import JumboMainText from './JumboText';
import MainLarge from './LargeMenu'
import MobileMenu from './MobileMenu'
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
const backgroundColor = '#17293F';

const Wrapper = styled.div`
margin:0px;
padding:0px;
`;

const BigBlue = styled.div`
margin:0px;
@media(min-width:992px){
    height:583px;
}
height:300px;
background-color:${backgroundColor};
@media(max-width:700px){
    height:250px;
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
    const [width, setWidth] = useState(window.innerWidth);
    const [large,setLarge] = useState(false)

    useEffect(() => {
        window.addEventListener('resize', ()=> setWidth(
            window.innerWidth
        ))
        width > 993 ? setLarge(true) : setLarge(false)
    },[width])


    return (
        <Wrapper >
           {!large?<MobileMenu></MobileMenu>:null}
            <BigBlue >
               {large?<MainLarge></MainLarge> :null}
                <JumboTextWrapper>
                  <JumboMainText ></JumboMainText>
                </JumboTextWrapper>
            </BigBlue>
        </Wrapper>
    );
}