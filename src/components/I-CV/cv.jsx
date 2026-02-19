import './cv.css';
import DownloadCV from './DownloadCV';

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const ExpieranceWrapper = styled.div`
  padding-right: 30px;
`;
const SchoolSection = styled.div`
  padding-right: 30px;
`;
const Article = styled.article`
  padding: 10px 0px 10px 0px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end; /* Pushes button to the right */
  align-items: start; /* Vertically centers with h2 */
`;
const ButtonInnerWrapper = styled.div`
  padding: 10px;
`;

function Cv() {
  return (
    <>
      <Wrapper>
        <div id='cv' className='page'>
          <header className='grid-plus sectionPadding'>
            <div id='header-info'>
              <h1 id='name'>Pawel Siwek</h1>
              <h2>Junior Full-Stack Developer</h2>
            </div>
            <ButtonWrapper>
              <ButtonInnerWrapper>
                <DownloadCV />
              </ButtonInnerWrapper>
            </ButtonWrapper>
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
              {/* <p>
                Junior Full-Stack Developer based in Reading, UK, specializing
                in: <br /> <strong>React</strong>,{' '}
                <strong>Next.js (App Router)</strong>,
                <strong>TypeScript</strong>, and <strong>Node.js</strong>.
              </p>
              <p>
                I build modern, responsive web applications with clean
                architecture, focusing on performance, user experience, secure
                API integrations, and maintainable code. Experienced in SPAs,
                RESTful APIs, state management (Redux Toolkit), and full-stack
                deployment (Vercel, GCP).
              </p>
              <p>
                Actively using <strong>TypeScript</strong> in production and
                increasingly integrating <strong>AI</strong> (OpenAI GPT models)
                to add intelligent automation and data processing capabilities.
              </p>
              <p>Recent personal projects:</p>
              <strong>TLG (Time Line Generator)</strong> — Next.js app that
              tracks GitHub repositories, fetches commits, groups activity by
              day, and generates concise development summaries using OpenAI GPT.
              Summaries are stored in MongoDB and displayed in an interactive
              timeline UI.
              <br />
              <em>
                Showcases GitHub API integration, AI prompting, MongoDB
                persistence, and automated developer workflow tools.
              </em>
              <br />
              <strong>Profit Radar</strong> — Next.js tool for monitoring Copart
              salvage vehicle auctions (with Otomoto cross-checks). Features
              server-side scraping with proxy support, MongoDB storage,
              calendar/lot browsing, and AI-powered title/description parsing
              for actionable insights.
              <br />
              <p>
                Professional experience includes customizing chat widgets and
                extending Google Cloud Functions for major clients at Filament
                AI (2021).
              </p>
              <p>
                Committed to clean code, best practices, automated testing, and
                continuous learning in full-stack development and AI-augmented
                tools.
              </p> */}
              <p>
                I'm a Junior Full-Stack Developer based in Reading, UK, focused
                on building modern, responsive web applications. I specialize in{' '}
                <strong>React</strong>, <strong>Next.js (App Router)</strong>,{' '}
                <strong>TypeScript</strong>, and <strong>Node.js</strong>,
                always prioritizing clean architecture and user experience.
              </p>
              <p>
                My expertise covers SPAs, <strong>RESTful APIs</strong>, state
                management with <strong>Redux Toolkit</strong>, and full-stack
                deployments on <strong>Vercel</strong> and{' '}
                <strong>Google Cloud Platform</strong>. I use{' '}
                <strong>TypeScript</strong> daily and increasingly integrate{' '}
                <strong>OpenAI GPT</strong> for automation and smarter features.
              </p>
              <p>
                Recent projects include{' '}
                <strong>TLG (Time Line Generator)</strong>—a Next.js app that
                tracks GitHub activity and generates AI-powered summaries—and{' '}
                <strong>Profit Radar</strong>, a tool for monitoring Copart
                auctions with AI-driven insights. Both highlight my skills in
                API integration, MongoDB, and practical automation.
                <br />
                <em>
                  Showcases: GitHub API, AI prompting, MongoDB, workflow tools.
                </em>
              </p>
              <p>
                Professionally, I gained hands-on experience at{' '}
                <strong>Filament AI</strong> in 2021, customizing chat widgets
                and extending <strong>Google Cloud Functions</strong> for client
                projects.
              </p>
              <p>
                I'm committed to clean code, best practices, automated testing,
                and continuous learning in full-stack and AI-augmented
                development.
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
                <div className='cv-h5-nonMargin-top'>
                  <span>
                    TLG – Time Line Generator (Personal Project, 2025–2026)
                  </span>
                </div>
                <p>
                  Full-stack Next.js application that automates GitHub commit
                  tracking and generates AI-powered daily development summaries
                  using OpenAI GPT. Features interactive timeline UI, MongoDB
                  storage, and REST API endpoints.
                </p>
                <p>
                  <strong>Tools & Technologies:</strong> Next.js (App Router),
                  TypeScript, Tailwind CSS, MongoDB/Mongoose, OpenAI API, GitHub
                  API
                </p>
              </ExpieranceWrapper>

              <ExpieranceWrapper>
                <div className='cv-h5'>
                  <span>Profit Radar (Personal Project, 2025–2026)</span>
                </div>
                <p>
                  Next.js tool for Copart auction monitoring with server-side
                  scraping, proxy support, MongoDB persistence, and AI title
                  parsing. Helps identify potential resale opportunities.
                </p>
                <p>
                  <strong>Tools & Technologies:</strong> Next.js (App Router),
                  TypeScript, Puppeteer, MongoDB, OpenAI API, Vercel
                </p>
              </ExpieranceWrapper>
              <ExpieranceWrapper>
                <div class='cv-h5'>
                  <span>FilesConverto.com</span>
                </div>
                <p>
                  Files converter build with TypeScript styled with Tailwind.
                  Framework of choice is Next.js. The user can upload a file
                  with use of dropzone and then sent it to backend for
                  convertion. At the moment frontend is in development process
                  and constantly updated.
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
                  overtime). Features include yearly calendar generation,
                  payroll period tracking, RESTful API, MongoDB integration, and
                  schedule management. The system supports employee
                  self-service, automated payroll, and flexible scheduling.
                </p>
              </ExpieranceWrapper>
              <ExpieranceWrapper>
                <div class='cv-h5'>
                  <span>Junior Full-Stack Developer – Filament AI</span>
                  <time>April 2021 – December 2021</time>
                </div>
                <p>
                  Developed and customized chat widgets for multiple clients,
                  aligning with website themes and functional requirements
                  (e.g., Rentokill, Versus Arthritis). Extended Google Cloud
                  Functions to support ticket creation with additional service
                  options. Configured and optimized EBM chatbot dialog flows,
                  adding new features to meet client needs. Enhanced Filament UI
                  (custom CSS library) by implementing new features and
                  resolving bugs.
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
                  Simple AI chat application allowing conversational
                  interaction. Built in React, hosted on Google Cloud, using
                  BotLibre API for AI responses.
                </p>
                <p>
                  <strong>Tools & Technologies:</strong> React,
                  Create-React-App, BotLibre API, Google Cloud, Axios
                </p>
              </ExpieranceWrapper>
              <ExpieranceWrapper>
                <div class='cv-h5'>
                  <span>Fitness App</span>
                </div>
                <p>
                  App to track exercises with duration and date. Frontend in
                  React, backend in Node.js with MongoDB Atlas, deployed on
                  Google Cloud.
                </p>
                <p>
                  <strong>Tools & Technologies:</strong> React, Node.js,
                  MongoDB, Google Cloud
                </p>
              </ExpieranceWrapper>
              <ExpieranceWrapper>
                <div class='cv-h5'>
                  <span>NASA Website</span>
                </div>
                <p>
                  Vanilla JS website with Bootstrap for RWD. Fetches
                  space-related data from NASA API.
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
              <div class='cv-h5-nonMargin-top'>
                <span>Relevant Coursework</span>
              </div>
              <ul>
                <li>
                  Complete React Developer (2021, w/ Redux, Hooks, GraphQL)
                </li>
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
                  Four-week backend bootcamp covering Python, Flask, Django,
                  HTML, CSS, JavaScript, Git, and Testing.
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
    </>
  );
}

export default Cv;
