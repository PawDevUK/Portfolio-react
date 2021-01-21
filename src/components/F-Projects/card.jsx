import React from 'react'
import styled from 'styled-components'
import Button from 'components/common/button'

const Wrapper =styled.div`
@media(min-width:900px){
width:45%;
height:430px;
}
border-radius:20px;
border:solid 1px #dbdbdb;
margin:10px auto 0px auto;
width:100%;
`
const CardContent = styled.div`
text-align:center;
margin:0 5px 10px 5px;
`
const StImg = styled.img`
border-radius: 20px 20px 0px 0px;
height:250px;
width:100%;
`
const ButtonWrapper = styled.div`
display:flex;
justify-content:space-between;
margin:10px auto auto auto;
width:210px;
`
const P = styled.p`

`
export default function Card({ ...props }){

    function LimitText(str,length){
        let dots = "..."
        if(str.length>length){
            str = str.substring(0,length) + dots
        }
        return str
    }
    return (
        <Wrapper >
            <StImg  src={props.item.src} alt={props.item.alt}></StImg>
            <CardContent>

                <h5 className="card-title">{props.item.title}</h5>
                <P className="card-text">{LimitText(props.item.text,120)}</P>
               

               <ButtonWrapper>
               <a href={props.item.webHref.href} target="_blank" >
                     <Button light>{props.item.webHref.button}</Button>
                </a>
                <a href={props.item.githubHref} target="_blank">
                    <Button light>Github Repo</Button>
                </a>
               </ButtonWrapper>
               
            </CardContent>
        </Wrapper>
    )
}