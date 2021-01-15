import React, { useEffect } from 'react'
import JumboSectionHeader from 'components/C-About/JumboSectionHeader'
import styled from 'styled-components'
import 'aos/dist/aos.css';
import AOS from 'aos';


const Wrapper = styled.div`
padding:50px 0px;
margin:auto;
width:100%;
@media(max-width:992px){
    width:80%;
}
`
const Card = styled.div`
background: #fff;
width:100%;
`
const P = styled.p`
font-size: 16px ;
color: rgba(0, 0, 0, 0.6);
`
const Bold = styled.span`
font-weight:600;
`


export default function TopIntro() {

    useEffect(() => AOS.init({ duration: 1000 }))

    return (
        <Wrapper>
            <Card data-aos="fade-right" >
                <JumboSectionHeader>About Me</JumboSectionHeader>
                <P>
                    My name is <Bold>Pawel</Bold>, I'm self thought and self motivated programmer from Reading UK. <br />
                    I started from
                    jumping without prior knowledge into programming back in 2018 and now I'm <Bold>React Developer</Bold>.</P>
                <P>
                    I can design from scratch and create, modern looking websites and web application with functionality including <Bold>API</Bold>. To design I use <Bold>Figma</Bold> which helps me to make the modern looking layouts with the use of number of popular design patterns. Currently most of the users browse web on mobile devices so <Bold>RWD</Bold> is quite important that's why I'm implementing it in my websites and applications.
                </P>
                <P>
                    I currently use  <Bold>React</Bold> which requires good knowledge of number of technologies like <Bold>JavaScript ES6</Bold>, HTML, CSS, Package Manager,  WebPack, Babel and many more. Most of my work is kept via Git CLI on <Bold>GitHub</Bold> so I branch, commit, push, pull and merge fairly often. </P>
                <P>
                    All my work is done on <Bold>Linux</Bold> machine so Terminal is used on a regular basis. Code editor of my choice is <Bold>Visual Studio Code</Bold>. Also I know how to build a backend for simple communication(express.js) with frontend(Axios) and database. <br />
                    <Bold>MERN</Bold> stack is not what I specialize in at the moment but I would like to master it in the nearest future.
                </P>
            </Card>



        </Wrapper>
    )
}