import React, { Component } from 'react'
import '../../style.css'

export default class TopIntro extends Component {
    render() {
        return (
            <section id="home">
            <div className="container">
                <div className="row justify-content-sm-center">
                    <div className="col-sm-8 col-lg-10">
                        <div className="main-hello">
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
