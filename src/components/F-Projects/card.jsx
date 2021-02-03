import React from 'react'
import styled from 'styled-components'
import Button from 'components/common/Button'

const Header = styled.h5`
transition:transform 0.5s;
`
const Wrapper =styled.div`
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2);
border-radius:20px;
border:solid 1px #dbdbdb;
margin:20px auto 0px auto;
@media(max-width:600px){
    width:100%;
}
width:60%;
@media(min-width:992px){
width:40%;
height:430px;
}
&:hover ${Header}{
        transform:scale(1.2); 
}
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
const A = styled.a`
:hover{
    text-decoration:none;
}
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

                <Header className="card-title">{props.item.title}</Header>
                <P className="card-text">{LimitText(props.item.text,120)}</P>
               

               <ButtonWrapper>
               <A href={props.item.webHref.href} target="_blank" >
                     <Button light>{props.item.webHref.button}</Button>
                </A>
                <A href={props.item.githubHref} target="_blank">
                    <Button light>Github Repo</Button>
                </A>
               </ButtonWrapper>
               
            </CardContent>
        </Wrapper>
    )
}