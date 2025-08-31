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
      <div id="cv" className="page">
  <header className="grid-plus" id="header">
    <div id="header-info">
      <h1 id="header">Paweł Siwek</h1>
      <h2>Junior Full-Stack Developer</h2>
    </div>
    <div id="socials">
      <a href="https://www.linkedin.com/in/pawel-s-78432119b" target="_blank">
        <i className="fa fa-linkedin"></i>
      </a>
      <a href="https://github.com/pawdevuk" target="_blank">
        <i className="fa fa-github"></i>
      </a>
    </div>
  </header>

  
  <section className="grid" id="contact">
    <header><h4>Contact Details</h4></header>
    <article className="grid-plus" id="cont-art">
      <div id="left">
        <div className="head">Email:</div>
        <div className="head">Town:</div>
        <div className="head">Telephone:</div>
        <div className="head">Portfolio:</div>
        <div className="head">Languages:</div>
      </div>
      <div id="right">
        <div className="info">P.F.Siwek@gmail.com</div>
        <div className="info">Reading, UK</div>
        <div className="info">07463765514</div>
        <div className="info"><a href="https://pawelsiwek.co.uk">pawelsiwek.co.uk</a></div>
        <div className="info">English (Fluent), Polish (Native)</div>
      </div>
    </article>
  </section>

  
  <section className="grid mx-4">
    <header><h4>About Me</h4></header>
    <article>
      <p>
        Junior Full-Stack Developer from Reading, UK, specializing in React and Node.js. Experienced in building SPAs, integrating REST APIs, and developing responsive, modern web applications.
      </p>
      <p>
        Strong knowledge of JavaScript (ES6+), currently learning TypeScript and React useContext. Skilled in styled-components, SCSS/SASS, Tailwind, Material-UI, and Bootstrap.
      </p>
      <p>
        Backend experience includes Node.js, Express.js, MongoDB, and cloud deployments (GCP & AWS). Focused on clean code, component-based architecture, and continuous learning.
      </p>
    </article>
  </section>

  
  <section className="grid" id="know">
    <header><h4>Skills</h4></header>
    <article id="art-know">
      <div class="Skills">
        <h5>Frontend</h5>
        <ul>
          <li>JavaScript ES6+</li>
          <li>TypeScript (learning)</li>
          <li>React / Next.js</li>
          <li>useContext / Redux Toolkit (experience)</li>
          <li>React Router</li>
          <li>Styled-Components / SCSS / Tailwind / Material-UI / Bootstrap</li>
        </ul>
      </div>
      <div class="Skills">
        <h5>Backend</h5>
        <ul>
          <li>Node.js / Express.js</li>
          <li>MongoDB / Mongoose</li>
          <li>REST API integration</li>
          <li>Nodemailer / Twilio</li>
          <li>Serverless: Google Cloud Functions</li>
        </ul>
      </div>
      <div class="Skills">
        <h5>Tools & Testing</h5>
        <ul>
          <li>Git / GitHub / GitLab</li>
          <li>Webpack / npm</li>
          <li>Jest / React Testing Library</li>
          <li>Figma</li>
          <li>GCP / AWS</li>
        </ul>
      </div>
    </article>
  </section>

  
  <section className="grid" id="work">
    <header><h4>Experience</h4></header>
    <article id="art-work">

      
      <div class='cv-h5'>
        <span>Junior Full-Stack Developer – Filament AI</span>
        <time>June 2023 – August 2025</time>
      </div>
      <ul>
        <li>Developed and customized chat widgets for multiple clients, aligning with website themes and functional requirements (e.g., Rentokill, Versus Arthritis).</li>
        <li>Extended Google Cloud Functions to support ticket creation with additional service options.</li>
        <li>Configured and optimized EBM chatbot dialog flows, adding new features to meet client needs.</li>
        <li>Enhanced Filament UI (custom CSS library) by implementing new features and resolving bugs.</li>
        <li><strong>Tools & Technologies:</strong> React, Node.js, Google Cloud Functions, EBM, Filament UI, REST APIs</li>
      </ul>

      
      <div class='cv-h5'>
        <span>Portfolio Frontend</span>
      </div>
      <p>
        Developed personal portfolio website using React, create-react-app, React-Bootstrap, React Router, and styled-components. Designed UI/UX in Figma and deployed on GitHub Pages.
      </p>
      <p><strong>Tools & Technologies:</strong> React, React Router, Styled-Components, Material-UI, Figma</p>

      
      <div class='cv-h5'>
        <span>Portfolio Backend</span>
      </div>
      <p>
        Implemented backend services for portfolio application using Node.js and Express. Features include API routes, MongoDB integration, serverless Cloud Functions, and Nodemailer for transactional emails.
      </p>
      <p><strong>Tools & Technologies:</strong> Node.js, Express.js, MongoDB, Google Cloud Functions, Nodemailer</p>

      
      <div class='cv-h5'>
        <span>Bot Chat</span>
      </div>
      <p>
        Simple AI chat application allowing conversational interaction. Built in React, hosted on Google Cloud, using BotLibre API for AI responses.
      </p>
      <p><strong>Tools & Technologies:</strong> React, Create-React-App, BotLibre API, Google Cloud, Axios</p>

      
      <div class='cv-h5'>
        <span>Fitness App</span>
      </div>
      <p>
        App to track exercises with duration and date. Frontend in React, backend in Node.js with MongoDB Atlas, deployed on Google Cloud.
      </p>
      <p><strong>Tools & Technologies:</strong> React, Node.js, MongoDB, Google Cloud</p>

      
      <div class='cv-h5'>
        <span>NASA Website</span>
      </div>
      <p>
        Vanilla JS website with Bootstrap for RWD. Fetches space-related data from NASA API.
      </p>
      <p><strong>Tools & Technologies:</strong> Vanilla JS, Bootstrap, NASA API</p>

      
      <div class='cv-h5'>
        <span>Gentleman Barber</span>
      </div>
      <p>Simple barber shop website for demonstration purposes.</p>

      
      <div class='cv-h5'>
        <span>Goodwood Solicitors</span>
      </div>
      <p>Mobile-first website with navigation menu and sub-pages.</p>
      
    </article>
  </section>

  
  <section className='grid' id='edu'>
    <header><h4>Education</h4></header>
    <article>
      <div class='cv-h5'>
        <span>Relevant Coursework</span>
      </div>
      <ul>
        <li>Complete React Developer (2021, w/ Redux, Hooks, GraphQL)</li>
        <li>JavaScript: Understanding the Weird Parts</li>
        <li>The Modern JavaScript Bootcamp Course (2020)</li>
        <li>React styled-components v5 (2021 edition)</li>
        <li>The MERN Stack - Full Tutorial (MongoDB, Express, React, Node.js)</li>
        <li>Figma - UI/UX Design</li>
      </ul>

      <div class='cv-h5'>
        <span>Python Backend Bootcamp</span>
        <time>January 2019 – February 2019</time>
      </div>
      <p>Four-week backend bootcamp covering Python, Flask, Django, HTML, CSS, JavaScript, Git, and Testing.</p>

      <div class='cv-h5'>
        <span>Technical School of Mechanical Engineering</span>
        <time>2003 – 2004</time>
      </div>

      <div class='cv-h5'>
        <span>Basic Vocational School</span>
        <time>2000 – 2003</time>
      </div>
    </article>
  </section>
</div>

    </A>
  );
}

export default Cv;
