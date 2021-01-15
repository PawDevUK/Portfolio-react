import React, {useEffect} from 'react'
import styled from 'styled-components'
import 'aos/dist/aos.css';
import AOS from 'aos';
import SectionHeader from 'components/common/SectionHeader'
import JumboHeader from 'components/common/JumboHeader'

const Wrapper = styled.div`
@media(min-width:992px){
    height:144px;
position:relative;
}
height:80px;
position:relative;
`
const Header = styled(SectionHeader)`
@media(min-width:992px){
    margin:0px;
padding:0px;
position:absolute;
left:7px;
top:87px;
}
margin:0px;
padding:0px;
position:absolute;
left:7px;
top:30px;
`
const Jumbo = styled(JumboHeader)`
@media(min-width:992px){
font-size:144px;
height:144px;
margin:0px;
padding:0px;
position:absolute;
top:0px;
}
opacity:0.5;
font-size:60px;
height:80px;
margin:0px;
padding:0px;
position:absolute;
top:0px;
`

export default function JumboSectionHeader({ children }) {

    useEffect(() => AOS.init({ duration: 1000 }))

    return (
        <Wrapper>
            <Header>{children}</Header>
            <Jumbo data-aos="zoom-in" >{children}</Jumbo>
        </Wrapper>


    )
}