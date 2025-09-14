import { bot, asparago, nasa, royal, barber, solicitors, fitnessApp, CovidApp, register, TicTacToe, filesconverto } from 'img';
import { react, git, mongo, nodeJS, gcloud, bootstrap, figma, html, css, scss, js, styled, router, express, vscode, npm, tailwind, nextjs, ts } from 'img'

export const projects = [
    {
        alt: "FilesConverto.com",
        githubHref: "https://github.com/pawdevuk/Filesconverto",
        src: filesconverto,
        text: "",
        title: "FilesConverto",
        webHref: { href: "https://filesconverto.vercel.app/", button: "Visit" },
        stack: [react, nextjs, ts, styled, tailwind, nodeJS, npm]
    },
    {
        alt: "TicTacToe",
        githubHref: "https://github.com/pawdevuk/Portfolio-react/tree/master/src/components/F-Projects/TicTacToe",
        src: TicTacToe,
        text: "Tic-tac-toe is a game where two players take turns placing 'O' or 'X' on a 3x3 grid.",
        title: "Tic Tac Toe",
        webHref: { href: "/TicTacToe", button: "Visit" },
        stack: [react, js, figma, styled, nodeJS, npm]
    },
    {
        alt: "Covid-app",
        githubHref: "https://github.com/pawdevuk/Covid-Tracker",
        src: CovidApp,
        text: "Application providing information and data related to COVID-19. It's a React app created with Create React App and styled with styled-components.",
        title: "Covid-Data",
        webHref: { href: "/covid", button: "Visit" },
        stack: [react, js, figma, styled, gcloud, nodeJS, npm]
    },
    {
        alt: "Chat Bot",
        githubHref: "https://github.com/pawdevuk/Messenger ",
        src: bot,
        text: "Chat Bot is a simple app that lets anyone converse with an AI. It's simple and fun. Chat history and a MERN-stack backend will be added later.",
        title: "Chat Bot",
        webHref: { href: "https://botchat-301119.ew.r.appspot.com/", button: "Visit" },
        stack: [react, router, js, figma, styled, gcloud, git, npm]
    }, {
        alt: "Fitness App",
        githubHref: "https://github.com/pawdevuk/Architect",
        src: fitnessApp,
        text: "A simple fitness app to track exercise duration and date. The app is built with React/Node.js and deployed on Google Cloud. Data is stored in MongoDB Atlas.",
        title: "Fitness App",
        webHref: { href: "https://code-camp-front.ew.r.appspot.com/", button: "Visit" },
        stack: [react, bootstrap, nodeJS, express, mongo, gcloud, git]
    },
    {
        alt: "Nasa",
        githubHref: "https://github.com/pawdevuk/Nasa",
        src: nasa,
        text: "Website about space-related events and topics using the NASA API. The front page focuses on SpaceX; other pages contain space images.",
        title: "Nasa",
        webHref: { href: "https://pawdevuk.github.io/NASA/", button: "Visit" },
        stack: [js, html, css, bootstrap, git, vscode]
    },
    {
        alt: "Register",
        githubHref: "https://github.com/pawdevuk/Portfolio-react/tree/RegisterLogin/src/components/F-Projects/Register_Login",
        src: register,
        text: "Simple app with home and login components. The app has two color schemes and is built with React, styled-components, and react-router-dom.",
        title: "Register/Sign in Page",
        webHref: { href: "/RegisterSignIn", button: "Visit" },
        stack: [react, scss, html, css, vscode, git]
    },
    {
        alt: "Royal Oak Architects",
        githubHref: "https://github.com/pawdevuk/Architect",
        src: royal,
        text: "A light, mobile-first website for customers who prefer simple, clean designs. Built using Bootstrap.",
        title: "Royal Oak Architects",
        webHref: { href: "https://pawdevuk.github.io/Architect/", button: "Visit" },
        stack: [html, css, bootstrap, git, vscode]
    }, {
        alt: "Gentlemen Barber",
        githubHref: "https://github.com/pawdevuk/Barber",
        src: barber,
        text: "Simple Bootstrap barber website. It's informative and written in a friendly tone to appeal to customers of all ages.",
        title: "Gentlemen Barber",
        webHref: { href: "https://pawdevuk.github.io/Barber/", button: "Visit" },
        stack: [html, css, bootstrap, git, vscode]
    },
    {
        alt: "Goodwood Solicitors",
        githubHref: "https://github.com/pawdevuk/Solicitors",
        src: solicitors,
        text: "Mobile-first website with navigation to subpages. Features a light color scheme, parallax image, contact form, and more.",
        title: "Goodwood Solicitors",
        webHref: { href: "https://pawdevuk.github.io/Solicitors/", button: "Visit" },
        stack: [html, css, bootstrap, git, vscode]
    }, {
        alt: "Asparago",
        githubHref: "https://github.com/pawdevuk/Architect",
        src: asparago,
        text: "Bootstrap restaurant page with menu, carousel, content, location, and parallax background images. The modern design provides easy access to information.",
        title: "Asparago",
        webHref: { href: "https://pawdevuk.github.io/asparago.online/", button: "Visit" },
        stack: [html, css, bootstrap, git, vscode]
    }
]