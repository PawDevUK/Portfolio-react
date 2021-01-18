import React from 'react'
import styled from 'styled-components'


const Wrapper =styled.div`

@media(min-width:900px){
   
width:40%;
height:500px;
}
border-radius:20px;
border:solid 1px #dbdbdb;
margin:10px auto 0px auto;
width:100%;
`
const StImg = styled.img`
border-radius: 20px 20px 0px 0px;

`

export default function Card({ ...props }){
    return (
        <Wrapper >
            <StImg className="card-img-top mt-0" width="100%" src={props.item.src} alt={props.item.alt}></StImg>
            <div className="card-body text-center">
                <h5 className="card-title">{props.item.title}</h5>
                <p className="card-text">{props.item.text}</p>
                <a href={props.item.webHref.href} target="_blank" className="btn btn-outline-primary">{props.item.webHref.button}</a>
                <a href={props.item.githubHref} target="_blank" className="btn btn-dark m-1">Github Repo</a>
            </div>
        </Wrapper>
    )
}