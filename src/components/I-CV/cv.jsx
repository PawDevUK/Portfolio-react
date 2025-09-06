import './cv.css';

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
`;
const ExpieranceWrapper = styled.div`
  padding-right: 30px;
`;
const SchoolSection = styled.div`
  padding-right: 30px;
`;
const Article = styled.article`
  padding: 10px 0px 10px 0px;
`;

function Cv() {
  return (
    <Wrapper>
      <div id='cv' className='page'>
        <header className='grid-plus sectionPadding'>
          <div id='header-info'>
            <h1 id='name'>Pawel Siwek</h1>
            <h2>Junior Full-Stack Developer</h2>
          </div>
        </header>

        <section className='grid sectionPadding'>
          <header>
            <h4>Contact Details</h4>
          </header>
          <Article className='grid-plus' id='cont-art'>
            <div id='left'>
              <div className='head'>Email:</div>
              <div className='head'>Town:</div>
              <div className='head'>Telephone:</div>
              <div className='head'>Portfolio:</div>
              <div className='head'>Languages:</div>
            </div>
            <div id='right'>
              <div className='info'>P.F.Siwek@gmail.com</div>
              <div className='info'>Reading, UK</div>
              <div className='info'>07463765514</div>
              <div className='info'>
                <a href='https://pawelsiwek.co.uk'>pawelsiwek.co.uk</a>
              </div>
              <div className='info'>English (Fluent), Polish (Native)</div>
            </div>
          </Article>
        </section>

        <section className='grid sectionPadding'>
          <header>
            <h4>About Me</h4>
          </header>
          <Article>
            <p>
              Junior Full-Stack Developer from Reading, UK, specializing in
              React and Node.js.
              <br /> Experienced in building SPAs, integrating REST APIs, and
              developing responsive,
              <br /> modern web applications.
            </p>
            <p>
              Strong knowledge of JavaScript (ES6+), currently learning
              TypeScript and Python.
              <br /> Skilled in styled-components, SCSS/SASS, Tailwind,
              Mbaterial-UI, and Bootstrap.
            </p>
            <p>
              Backend experience includes Node.js, Express.js, MongoDB, and
              cloud deployments <br /> to GCP, AWS, Azure. Focused on clean
              code, component-based architecture,
              <br /> and continuous learning.
            </p>
          </Article>
        </section>

        <section className='grid sectionPadding'>
          <header>
            <h4>Skills</h4>
          </header>
          <Article id='art-know'>
            <div class='Skills'>
              <h5>Frontend</h5>
              <ul>
                <li>JavaScript ES6+</li>
                <li>TypeScript (learning)</li>
                <li>React / Next.js</li>
                <li>Redux Toolkit</li>
                <li>React Router</li>
                <li>Styled-Components</li>
                <li>Tailwind</li>
                <li>Material-UI</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div class='Skills'>
              <h5>Backend</h5>
              <ul>
                <li>Node.js / Express.js</li>
                <li>MongoDB / Mongoose</li>
                <li>Moments.js / date-fns</li>
                <li>REST API integration</li>
                <li>Nodemailer / Twilio</li>
                <li>Google Cloud Functions</li>
              </ul>
            </div>
            <div class='Skills'>
              <h5>Tools & Testing</h5>
              <ul>
                <li>Git / GitHub / GitLab</li>
                <li>Webpack / npm</li>
                <li>React Testing Library</li>
                <li>Jest</li>
                <li>Figma</li>
                <li>GCP / AWS</li>
              </ul>
            </div>
          </Article>
        </section>

        <section className='grid sectionPadding'>
          <header>
            <h4>Experience</h4>
          </header>
          <Article id='art-work'>
            <ExpieranceWrapper>
              <div class='cv-h5'>
                <span>FilesConverto.com</span>
              </div>
              <p>
                Files converter build with TypeScript styled with Tailwind.
                Framework of choice is Next.js. The user can upload a file with
                use of dropzone and then sent it to backend for convertion. At
                the moment frontend is in development process and constantly
                updated.
              </p>
            </ExpieranceWrapper>
            <ExpieranceWrapper>
              <div class='cv-h5'>
                <span>Work Tracker</span>
              </div>
              <p>
                Work Tracker is a full-stack payroll management app for
                businesses with complex shift patterns. Built with
                Node.js/Express and React, it tracks work hours and calculates
                earnings across multiple pay rates (base, night, weekend,
                overtime). Features include yearly calendar generation, payroll
                period tracking, RESTful API, MongoDB integration, and schedule
                management. The system supports employee self-service, automated
                payroll, and flexible scheduling.
              </p>
            </ExpieranceWrapper>
            <ExpieranceWrapper>
              <div class='cv-h5'>
                <span>Junior Full-Stack Developer – Filament AI</span>
                <time>April 2021 – Decembre 2021</time>
              </div>
              <p>
                Developed and customized chat widgets for multiple clients,
                aligning with website themes and functional requirements (e.g.,
                Rentokill, Versus Arthritis). Extended Google Cloud Functions to
                support ticket creation with additional service options.
                Configured and optimized EBM chatbot dialog flows, adding new
                features to meet client needs. Enhanced Filament UI (custom CSS
                library) by implementing new features and resolving bugs.
                <strong>Tools & Technologies:</strong> React, Node.js, Google
                Cloud Functions, EBM, Filament UI, REST APIs
              </p>
            </ExpieranceWrapper>
            <ExpieranceWrapper>
              <div class='cv-h5'>
                <span>Portfolio Frontend</span>
              </div>
              <p>
                Developed personal portfolio website using React,
                create-react-app, React-Bootstrap, React Router, and
                styled-components. Designed UI/UX in Figma and deployed on
                GitHub Pages.
              </p>
              <p>
                <strong>Tools & Technologies:</strong> React, React Router,
                Styled-Components, Material-UI, Figma
              </p>
            </ExpieranceWrapper>
            <ExpieranceWrapper>
              <div class='cv-h5'>
                <span>Portfolio Backend</span>
              </div>
              <p>
                Implemented backend services for portfolio application using
                Node.js and Express. Features include API routes, MongoDB
                integration, serverless Cloud Functions, and Nodemailer for
                transactional emails.
              </p>
              <p>
                <strong>Tools & Technologies:</strong> Node.js, Express.js,
                MongoDB, Google Cloud Functions, Nodemailer
              </p>
            </ExpieranceWrapper>
            <ExpieranceWrapper>
              <div class='cv-h5'>
                <span>Bot Chat</span>
              </div>
              <p>
                Simple AI chat application allowing conversational interaction.
                Built in React, hosted on Google Cloud, using BotLibre API for
                AI responses.
              </p>
              <p>
                <strong>Tools & Technologies:</strong> React, Create-React-App,
                BotLibre API, Google Cloud, Axios
              </p>
            </ExpieranceWrapper>
            <ExpieranceWrapper>
              <div class='cv-h5'>
                <span>Fitness App</span>
              </div>
              <p>
                App to track exercises with duration and date. Frontend in
                React, backend in Node.js with MongoDB Atlas, deployed on Google
                Cloud.
              </p>
              <p>
                <strong>Tools & Technologies:</strong> React, Node.js, MongoDB,
                Google Cloud
              </p>
            </ExpieranceWrapper>
            <ExpieranceWrapper>
              <div class='cv-h5'>
                <span>NASA Website</span>
              </div>
              <p>
                Vanilla JS website with Bootstrap for RWD. Fetches space-related
                data from NASA API.
              </p>
              <p>
                <strong>Tools & Technologies:</strong> Vanilla JS, Bootstrap,
                NASA API
              </p>
            </ExpieranceWrapper>
            <ExpieranceWrapper>
              <div class='cv-h5'>
                <span>Gentleman Barber</span>
              </div>
              <p>Simple barber shop website for demonstration purposes.</p>
            </ExpieranceWrapper>
            <ExpieranceWrapper>
              <div class='cv-h5'>
                <span>Goodwood Solicitors</span>
              </div>
            </ExpieranceWrapper>
            <p>Mobile-first website with navigation menu and sub-pages.</p>
          </Article>
        </section>

        <section className='grid sectionPadding'>
          <header>
            <h4>Education</h4>
          </header>
          <Article>
            <div class='cv-h5'>
              <span>Relevant Coursework</span>
            </div>
            <ul>
              <li>Complete React Developer (2021, w/ Redux, Hooks, GraphQL)</li>
              <li>JavaScript: Understanding the Weird Parts</li>
              <li>The Modern JavaScript Bootcamp Course (2020)</li>
              <li>React styled-components v5 (2021 edition)</li>
              <li>
                The MERN Stack - Full Tutorial (MongoDB, Express, React,
                Node.js)
              </li>
              <li>Figma - UI/UX Design</li>
            </ul>
            <SchoolSection>
              <div class='cv-h5'>
                <span>Python Backend Bootcamp</span>
                <time>January 2019 – February 2019</time>
              </div>
              <p>
                Four-week backend bootcamp covering Python, Flask, Django, HTML,
                CSS, JavaScript, Git, and Testing.
              </p>

              <div class='cv-h5'>
                <span>Technical School of Mechanical Engineering</span>
                <time>2003 – 2004</time>
              </div>

              <div class='cv-h5'>
                <span>Basic Vocational School</span>
                <time>2000 – 2003</time>
              </div>
            </SchoolSection>
          </Article>
        </section>
      </div>
     </Wrapper>
  );
}

export default Cv;
