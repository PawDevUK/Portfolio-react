import React, { useEffect, useState } from 'react';
import { stack } from 'store.js'
import Card from './card.jsx'
import styled from 'styled-components'
import { useWindowWidth } from 'functions'
import JumboSectionHeader from 'components/common/JumboHeaders/JumboSectionHeader'

const Wrapper = styled.div`
@media(max-width:992px){
width:80%;
}
width:100%;
margin:auto;
`
const Thumbnails = styled.div`
justify-content:center;
margin:auto;
display:flex;
flex-wrap:wrap;
width:748px;
@media(max-width:700px){
    width:100%;
}
`

export default function Stack() {
    const Width = useWindowWidth()
    const [Mobile,setMobile] = useState(false)

    useEffect(()=>{
        Width<700?setMobile(true):setMobile(false)
    })

    return (
        <Wrapper>
            <JumboSectionHeader>What I use</JumboSectionHeader>
            <Thumbnails>
                {
                    stack.map((item) => {
                        return (
                            <Card  Mobile={Mobile} key={item._id} image={item.img} title={item.title} text={item.text} href={item.webHref
                            }></Card>
                        )
                    })
                }
            </Thumbnails>
        </Wrapper>
    )
};
