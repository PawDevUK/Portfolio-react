import JumboMainText from './JumboText';
import MainLarge from './LargeMenu'
import MobileMenu from './MobileMenu'
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BackgroundBlue } from 'styled'
import { store } from 'configureStore'
import { chatClose } from 'actions/isChatOpen.actions'
import { connect } from 'react-redux'
import { isChatOpen } from 'selectors/isChatOpen.selector'

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
${BackgroundBlue};
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

function Header( {...props} ) {
    const [width, setWidth] = useState(window.innerWidth);
    const [large,setLarge] = useState(false)

    useEffect(() => {
        window.addEventListener('resize', ()=> setWidth(
            window.innerWidth
        ))
        width > 993 ? setLarge(true) : setLarge(false)
    },[width])

    function closeChat(){
        store.dispatch(chatClose())
      }


    return (
        <Wrapper onClick={ props.isChatOpen ? closeChat : null }>
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

const mapStateToProps = (state) => {
return{
    isChatOpen:isChatOpen(state)
}
}

export default connect(mapStateToProps)(Header)