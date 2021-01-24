import ChatWindow from 'img/BotChatWindow.svg'
import { SvgLoader } from 'react-svgmt'
import React from "react"
import styled from 'styled-components'

const Window = styled(SvgLoader)`

`
const Wrapper = styled.div`
@media(max-width:1000px){
display:none;
}
display:block;
position:absolute;
top:400px;
right:-257px;
`

export default function Chat({...props}){
    function HandleClick(){
        console.log("click");
    }
    return(
        <Wrapper onClick={HandleClick} >
            <Window path={ChatWindow}></Window>
        </Wrapper>
    )
}