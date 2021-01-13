import React, { useEffect } from 'react'
import styled from 'styled-components'
import 'aos/dist/aos.css';
import AOS from 'aos';


const Wrapper = styled.div`
margin:0px;
padding:0px;
`
const Card = styled.div`
width:500px;
color: rgba(0, 0, 0, 0.7);
background: #fff;

`
const P = styled.p`
font-size: 16px ;
color: rgba(0, 0, 0, 0.6);
`
const Header = styled.h6`
font-size:20px;
height:30px;
width:20%;
`


export default function TopIntro() {

    useEffect( ()=> AOS.init({ duration: 1000 }))


    return (
        <Wrapper>

                    <Card data-aos="fade-right" >
                        <Header>About</Header>
                        <P>
                            At the moment I haven't got any commercial experience but I've done lots of React small projects like static pages and few MERN Stack apps. I use React, which is fantastic as it's main advantage is jsx and reusable components.

                                </P>
                        <P>
                            To be good at something I know that I need constantly learn and create content, this is what I do.

                                </P>
                    </Card>
               
            

        </Wrapper>
    )
}