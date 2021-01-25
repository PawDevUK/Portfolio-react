import ChatButtonLarge1px from 'img/ChatButtonLarge1px.svg'
import { SvgLoader } from 'react-svgmt'
import React,{useState} from "react"
import styled,{css} from 'styled-components'

const Button = styled(SvgLoader)`
padding:0px;
margin:0px;
`
const Wrapper = styled.div`
/* border:1px solid black; */
/* ${p=>console.log(p)} */
display:block;
transform:right 1s;
@media(max-width:1000px){
display:none;
}
${p=>p.open?css`
position:absolute;
top:300px;
right:250px;
`:css`
position:absolute;
top:300px;
right:0px;`}
`

export default function Chat({...props}){
    const [open, setOpen]= useState(false)
    function HandleClick(){
        setOpen(p=>p=!p)
    }
    return(
        <Wrapper open={open} onClick={HandleClick}>
            <Button path={ChatButtonLarge1px}></Button>
        </Wrapper>
    )
}