import React, { Component } from 'react'
import '../../style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components'


const Wrapper= styled.div`
 display: flex;
    align-items: center;
    height: 600px;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: -20px;

`
const Card = styled.div`
margin:10px 0px;
color: rgba(0, 0, 0, 0.7);
background: #fff;
/* background-opacity: 0.5; */
padding: 12px;
border-radius: 10px;
`
const P = styled.p`
font-size: 16px ;
color: rgba(0, 0, 0, 0.6);
`


export default class TopIntro extends Component {

    componentDidMount() {
        AOS.init({ duration: 1000 });
    }

    render() {
        return (
            <Wrapper id="home">
                <div className="container">
                    <div className="row justify-content-sm-center">
                        <div className="col-12">
                            <Card data-aos="fade-right" className=" col-sm-12 col-md-8 mx-auto">
                            <P>
                                    At the moment I haven't got any commercial experience but I've done lots of React small projects like static pages and few MERN Stack apps. I use React, which is fantastic as it's main advantage is jsx and reusable components.

                                </P>
                                <P>
                                    To be good at something I know that I need constantly learn and create content, this is what I do.     

                                </P>
                            </Card>
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}
