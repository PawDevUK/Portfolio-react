import React, {useEffect} from 'react'
import styled from 'styled-components'
import 'aos/dist/aos.css';
import AOS from 'aos';
import SectionHeader from './SectionHeader'
import JumboHeader from './JumboHeader'

const Wrapper = styled.div`
@media(max-width:992px){
    height:80px;
    position:relative;
}
height:100px;
position:relative;
`
const Header = styled(SectionHeader)`
@media(max-width:992px){
    margin:0px;
padding:0px;
position:absolute;
left:7px;
top:30px;
}
margin:0px;
padding:0px;
position:absolute;
left:7px;
top:57px;
`
const Jumbo = styled(JumboHeader)`
@media(max-width:992px){
    opacity:0.5;
    font-size:60px;
height:80px;
margin:0px;
padding:0px;
position:absolute;
top:0px;
}
position:absolute;
top:0px;
`

export default function JumboSectionHeader({ children }) {

    useEffect(() => AOS.init({ duration: 1000 }))

    return (
        <Wrapper>
            <Header>{children}</Header>
            <Jumbo data-aos="zoom-in">{children}</Jumbo>
        </Wrapper>


    )
}