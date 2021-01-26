import ChatButtonLarge1px from 'img/ChatButtonLarge1px.svg'
import { SvgLoader } from 'react-svgmt'
import React,{useState} from "react"
import styled,{css} from 'styled-components'

const Button = styled(SvgLoader)`
padding:0px;
margin:0px;
`
const Wrapper = styled.div`
display:flex;
/* transform:right 1s; */
@media(max-width:1000px){
display:none;
}
${p=>p.open?css`
position:absolute;
top:300px;
right:0px;
`:css`
position:absolute;
top:300px;
right:0px;`}
`

const Window = styled.div`
${p=>console.log(p)}
${p=>p.open?css`display:block;`:css`display:none;`};
width:250px;
height:400px;
background-color:white;
`

export default function Chat({...props}){
    const [open, setOpen]= useState(true)
    function HandleClick(){
        setOpen(p=>p=!p)
    }
    return(
        <Wrapper open={open} onClick={HandleClick}>
            <Button path={ChatButtonLarge1px}></Button>
            <Window open={open}></Window>
        </Wrapper>
    )
}