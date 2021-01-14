import React from 'react';
import './cv.css'

function Cv() {

    return (
        <div className="page">
            <header className="grid-plus " id='header'>
                <div id="header-info">
                    <h1>pawel siwek</h1>
                    <h2>React Developer</h2>
                    <h3>Websites developer. </h3>
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
                        <div className="head">languages:</div>
                    </div>
                    <div id="right">
                        <div className="">P.F.Siwek@gmail.com</div>
                        <div className="">Reading, UK</div>
                        <div className="">07463765514</div>
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
                    <p>Over last year I learned essentials of Web Development and <br></br>gained needed skills to develop websites.
                        Examples of work available in my portfolio </p>
                    <h5>Programming Languages</h5>
                    <p>JavaScript, HTML5, CSS3 </p>
                    <h5>Libraries</h5>
                    <p>React js, Bootstrap, Material Ui</p>
                    <h5>Operating systems</h5>
                    <p>Linux</p>
                    <h5>Version Control</h5>
                    <p>Git</p>
                </article>
            </section>

            {/* <!-- Work History --> */}
            <section className="grid" id="work">
                <header id="header-know">
                    <h4>Experience</h4>
                </header>
                <article id="art-work">
                    <h5 className="non-margin-top"><span>Nasa website</span></h5>
                    <p>Webpage dedicated to space related topics based on Nasa API</p>
                    <h5 className="non-margin-top"><span>Gentleman Barber</span></h5>
                    <p>Simple barber shop website.</p>
                    <h5 className="non-margin-top"><span>Goodwood Solicitors</span></h5>
                    <p>Mobile-first webpage with menu to subpages.</p>
                </article>
            </section>
            {/* <!-- Education --> */}
            <section className="grid" id="edu">
                <header id="header-edu">
                    <h4>Education</h4>
                </header>
                <article id="art-know">
                    <h5 className="non-margin-top">
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
    );

}

export default Cv;

