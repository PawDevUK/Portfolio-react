import React, { Component } from 'react'
import '../../style.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default class TopIntro extends Component {

    componentDidMount(){
        AOS.init({duration:1000});
    }


    render() {
        return (
            <section id="home">
            <div className="container">
                <div className="row justify-content-sm-center">
                    <div className="col-sm-8 col-lg-10">
                        <div data-aos="fade-right" className="main-hello">
                            <h2 className="" id="hallo"><strong>Hello</strong></h2>
                            <h5 className=" ">I'm <strong className="text-blue">PAWEL SIWEK</strong>, a web developer. I'm happy to help you with your Website or Web App.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
