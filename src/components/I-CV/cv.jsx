import './cv.css';

import React from 'react';
import styled from 'styled-components';

const A = styled.a`
  &:hover {
    text-decoration: none;
  }
`;

function Cv() {
  return (
    <A href='/content'>
      <div id='cv' className='page'>
        <header className='grid-plus ' id='header'>
          <div id='header-info'>
            <h1 id='header'>pawel siwek</h1>
            <h2>Junio Full Stack Developer</h2>
          </div>
          <div id='socials'>
            <a
              href='https://www.linkedin.com/in/pawel-s-78432119b'
              target='_blank'
            >
              <i className='fa fa-linkedin'></i>
            </a>
            <a href='https://github.com/GitcrackerUK' target='_blank'>
              <i className='fa fa-github'></i>
            </a>
          </div>
        </header>
        <section className='grid' id='contact'>
          <header>
            <h4>contact details</h4>
          </header>
          <article className='grid-plus' id='cont-art'>
            <div id='left'>
              <div className='head'>email:</div>
              <div className='head'>town:</div>
              <div className='head'>telephone:</div>
              <div className='head'>portfolio:</div>
              <div className='head'>languages:</div>
            </div>
            <div id='right'>
              <div className='info'>P.F.Siwek@gmail.com</div>
              <div className='info'>Reading, UK</div>
              <div className='info'>07463765514</div>
              <div className='info'>
                <a href='http://www.pawelsiwek.co.uk'>pawelsiwek.co.uk</a>
              </div>
              <ul>
                <li>English (fluent)</li>
                <li>Polish (native)</li>
              </ul>
            </div>
          </article>
        </section>
        <section className='grid mx-4'>
          <header></header>
          <article>
            <p className='mx-1'>
              Frontend/Backend Developer from Reading, UK, specializing in
              React, Redux Toolkit, and Next.js. Strong in JavaScript (ES6+),
              learning TypeScript, and experienced in building SPAs, integrating
              REST APIs, and managing state with Redux. Skilled in
              styled-components, SCSS/SASS, Tailwind, Material-UI, and Bootstrap
              for responsive, modern designs. Backend experience includes
              Node.js, Express.js, MongoDB, and deploying to Google Cloud
              Platform. Proficient in Git/GitHub, build tools, automated testing
              (Jest, React Testing Library), and deploying projects. Focused on
              clean code, feature-based architecture, and continuous learning.
            </p>
          </article>
        </section>
        {/* <!-- Knowledge --> */}
        <section className='grid' id='know'>
          <header id='header-know'>
            <h4>Knowledge/skills</h4>
          </header>
          <article id='art-know'>
            <div class='Skills'>
              <ul>
                <li>JavaScript ES6 (6 years)</li>
                <li>TypeScript (Learning)</li>
                <li>Python (Basic)</li>
                <li>HTML (7 years)</li>
                <li>CSS (7 years)</li>
                <li>React (5 year)</li>
                <li>Next.js (Learning)</li>
                <li>Git</li>
                <li>NPM</li>
                <li>Material Ui</li>
                <li>Tailwind</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div class='Skills'>
              <ul>
                <li>WebPack</li>
                <li>React-Router</li>
                <li>Styled-Components</li>
                <li>VsCode</li>
                <li>Babel</li>
                <li>Linux</li>
                <li>Figma</li>
                <li>Gcloud</li>
              </ul>
            </div>
            <div class='Skills'>
              <ul>
                <li>Node.js</li>
                <li>Nodemon</li>
                <li>Express js</li>
                <li>Nodemailer</li>
                <li>Twilio</li>
                <li>Mongoose</li>
                <li>Postman</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div class='Skills'>
              <ul>
                <li>Nivo</li>
                <li>Particles.js</li>
                <li>Axios</li>
              </ul>
            </div>
          </article>
        </section>

        {/* <!-- Work History --> */}
        <section className='grid' id='work'>
          <header id='header-know'>
            <h4>Experience</h4>
          </header>
          <article id='art-work'>
            <div class='cv-h5'>
              <span>Portfolio</span>
            </div>
            <p>
              Website created with use of React, create-react-app,
              react-bootstrap, react-router-dom, styled-components, material-ui
              and few more.
            </p>
            <div class='cv-h5'>
              <span>Bot Chat</span>
            </div>
            <p>
              Bot Chat is a simple app allowing any one to have conversation
              with AI. <br /> It’s simple and fun. You can type what ever you
              like and you will get response to your message. Some responses are
              even funny but sometimes without sense but it's fine, we don't
              need super computer to tell us what to do. <br /> It is design in
              figma, programmed in React and hosted on Gcloud. <br /> Here are
              tools used in this project:
            </p>
            <p class='Tools'>
              BotLibre API, React, Create-React-App, React-Router-Dom, Axios,
              XML2JS, Gcloud
            </p>
            <div class='cv-h5'>
              <span>Fitness App</span>
            </div>
            <p>
              Very simple fitness app to track exercises duration, date. App is
              created in React/Node.js and deployed on Gcloud. Database used to
              storage inputs is MongoDb Atlas.
            </p>
            <div class='cv-h5'>
              <span>Nasa website</span>
            </div>
            <p>
              Webpage created in Vanilla Js and Bootstrap for RWD, dedicated to
              space related topics. All data presented on page is fetched from
              Nasa via Nasa API
            </p>
            <div class='cv-h5'>
              <span>Gentleman Barber</span>
            </div>
            <p>Simple barber shop website.</p>
            <div class='cv-h5'>
              <span>Goodwood Solicitors</span>
            </div>
            <p>Mobile-first webpage with menu to sub-pages.</p>
            <div class='cv-h5'>
              <span>Portfolio Server</span>
            </div>
            <p>
              Backend services for the Portfolio app implemented with Node.js
              and Express. Features include API routes, MongoDB (Mongoose)
              integration, serverless Cloud Functions for background tasks and
              file processing, and Nodemailer for transactional emails.
            </p>
          </article>
        </section>
        {/* <div className="m-5 heigh-3 breaker"></div> */}

        {/* <!-- Education --> */}
        <section className='grid' id='edu'>
          <header id='header-edu'>
            <h4>Education</h4>
          </header>
          <article>
            <div class='cv-h5'>
              <span>Relevant Coursework</span>
              <time></time>
            </div>
            <p>Complete React Developer in 2021 (w/ Redux, Hooks, GraphQL)</p>
            <p>JavaScript: Understanding the Weird Parts</p>
            <p>The Modern Javascript Bootcamp Course 2020</p>
            <p>React styled-components v5 (2021 edition)</p>
            <p>
              The MERN Stack - Full Tutorial (MongoDB, Express, React, Node.js)
            </p>
            <p>Figma - UI/UX Design</p>

            <div class='cv-h5'>
              <span>Python backend bootcamp</span>
              <time>January 2019-February 2019</time>
            </div>

            <p>
              Four weeks Bootcamp focused on backend with:<br></br>Python,
              Flask, Django also HTML, CSS, JavaScript, <br /> Github and
              Testing.
            </p>
            <div class='cv-h5'>
              <span>Technical School of Mechanical Engineering</span>
              <time>2003 - 2004</time>
            </div>
            <div class='cv-h5'>
              <span>Basic Vocational School</span>
              <time> 2000 - 2003 </time>
            </div>
          </article>
        </section>
      </div>
    </A>
  );
}

export default Cv;
