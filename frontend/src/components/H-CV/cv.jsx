import React from 'react';
import styled from 'styled-components'
import './cv.css'

const A = styled.a`
&:hover{
    text-decoration:none;
};
`


function Cv() {
    return (
        <A href="/content">
            <div id="cv" className="page">
                <header className="grid-plus " id='header'>
                    <div id="header-info">
                        <h1>pawel siwek</h1>
                        <h2>React Developer</h2>
                        {/* <h3>Websites developer. </h3> */}
                    </div>
                    <div id="socials">
                        <a href="https://www.linkedin.com/in/pawel-s-78432119b" target="_blank"><i className="fa fa-linkedin"></i></a>
                        <a href="https://github.com/GitcrackerUK" target="_blank"><i className="fa fa-github"></i></a>
                    </div>
                </header>
                <section className="grid" id="contact">
                    <header>
                        <h4>contact details</h4>
                    </header>
                    <article className="grid-plus" id="cont-art">
                        <div id="left">
                            <div className="head">email:</div>
                            <div className="head">town:</div>
                            <div className="head">telephone:</div>
                            <div className="head">portfolio:</div>
                            <div className="head">languages:</div>
                        </div>
                        <div id="right">
                            <div className="">P.F.Siwek@gmail.com</div>
                            <div className="">Reading, UK</div>
                            <div className="">07463765514</div>
                            <div className=""><a href="http://www.pawelsiwek.co.uk">pawelsiwek.co.uk</a></div>
                            <ul>
                                <li>English-fluent</li>
                                <li>Polish-native</li>
                            </ul>
                        </div>
                    </article>
                </section>
                {/* <!-- Knowledge --> */}

                <section className="grid" id="know">
                    <header id="header-know">
                        <h4>Knowledge and skills</h4>
                    </header>
                    <article id="art-know">
                        <p>I am a self-thought and self-motivated programmer from Reading, UK.
                    I started programming without any prior knowledge back in 2018 and now I'm proficient React Developer.</p>
                        <p>
                            I currently use  React which requires good knowledge of number of technologies like JavaScript ES6, HTML, CSS, Package Manager,  WebPack, Babel and many more. Most of my work is kept via Git CLI on GitHub so I branch, commit, push, pull and merge fairly often.
                    </p>
                        <h5>Programming Languages</h5>
                        <p>JavaScript</p>
                        <h5>Libraries</h5>
                        <p>React js, Bootstrap, Material Ui</p>
                        <h5>Operating systems</h5>
                        <p>Linux</p>
                        <h5>Version Control</h5>
                        <p>Git</p>
                        <h5>Cloud computing</h5>
                        <p>Google Cloud</p>
                    </article>
                </section>

                {/* <!-- Work History --> */}
                <section className="grid" id="work">
                    <header id="header-know">
                        <h4>Experience</h4>
                    </header>
                    <article id="art-work">
                        <h5><span>Portfolio</span></h5>
                        <p>Website created in React with create-react-app, react-bootstrap, react-router-dom, styled-components, material-ui and few more.</p>
                        <h5><span>Bot Chat</span></h5>
                        <p>Bot Chat is a simple app allowing any one to have conversation with AI. It’s simple and fun.</p>
                        <h5><span>Fitness App</span></h5>
                        <p>Very simple fitness app to track exercises duration, date. App is created in React/Node.js and deployed on Gcloud. Database used to storage inputs is MongoDb Atlas.</p>
                        <h5><span>Nasa website</span></h5>
                        <p>Webpage dedicated to space related topics based on Nasa API</p>
                        <h5><span>Gentleman Barber</span></h5>
                        <p>Simple barber shop website.</p>
                        <h5><span>Goodwood Solicitors</span></h5>
                        <p>Mobile-first webpage with menu to sub-pages.</p>
                    </article>
                </section>
                {/* <!-- Education --> */}
                <section className="grid" id="edu">
                    <header id="header-edu">
                        <h4>Education</h4>
                    </header>
                    <article id="art-know">
                        <h5>
                            <span>Relevant Coursework</span>
                            <time></time>
                        </h5>
                        <p>Complete React Developer in 2021 (w/ Redux, Hooks, GraphQL)</p>
                        <p>JavaScript: Understanding the Weird Parts</p>
                        <p>The Modern Javascript Bootcamp Course 2020</p>
                        <p>
                        React styled-components v5 (2021 edition)
                        </p>
                        <p>The MERN Stack - Full Tutorial (MongoDB, Express, React, Node.js)</p>
                        <p>Figma - UI/UX Design</p>



                        <h5 >
                            <span>Python backend bootcamp</span>
                            <time>January 2019-February 2019</time>
                        </h5>

                        <p>Four weeks Bootcamp focused on backend with:<br></br>Python, Flask, Django also HTML, CSS, JavaScript, Github and Testing.</p>
                        <h5>
                            <span>Technical School of Mechanical Engineering</span>
                            <time>2003 - 2004</time>
                        </h5>
                        <h5>
                            <span>Basic Vocational School</span>
                            <time> 2000 - 2003 </time>
                        </h5>
                    </article>
                </section>
            </div>



        </A>

    );

}

export default Cv;

