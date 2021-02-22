import { bot, asparago, nasa, royal, barber, solicitors, fitnessApp, CovidApp } from 'img';





export const projects = [
    {
        alt: "Covid-app",
        githubHref: "https://github.com/GitcrackerUK/Covid-Tracker",
        src: CovidApp,
        text: "Application for informational purpose with data related to Covid-19. It is react application created with create-react-app and styled with styled-components.",
        title: "Covid-Data",
        webHref: { href: "/covid", button: "Visit" },
        stack: ["react", "VanillaJs", "html", "css", "figma"]
    },
    {
        alt: "Bot Chat",
        githubHref: "https://github.com/GitcrackerUK/Messenger ",
        src: bot,
        text: "Bot Chat is a simple app allowing any one to have conversation with AI. It’s simple and fun. At the moment app contains only chat but will be added chat history in MERN stack",
        title: "Bot Chat",
        webHref: { href: "https://botchat-301119.ew.r.appspot.com/", button: "Visit" },
        stack: ["react", "VanillaJs", "html", "css", "figma"]
    },
    {
        alt: "Nasa",
        githubHref: "https://github.com/GitcrackerUK/Nasa",
        src: nasa,
        text: "Website about space related events and topics based on Nasa API. Front page is dedicated to SpaceX. Next pages contains images from space.",
        title: "Nasa",
        webHref: { href: "https://gitcrackeruk.github.io/NASA/", button: "Visit" },
        stack: ["VanillaJs", "html", "css", "bootstrap"]
    },
    // {
    //     alt: "Login",
    //     githubHref: "https://github.com/GitcrackerUK/Login",
    //     src: login,
    //     text: "Simple app with home component and login. App has two color schemes and is created in React with use of styled-components and React-router-dom.",
    //     title: "Login Page",
    //     webHref: { href: "https://loadin.ew.r.appspot.com", button: "Visit" },
    //     stack: ["react", "html", "css"]
    // },
    {
        alt: "Royal Oak Architects",
        githubHref: "https://github.com/GitcrackerUK/Architect",
        src: royal,
        text: "Light mobile-first website dedicated for customers who like simple and smart looking solutions. Website is done with use of Bootstrap",
        title: "Royal Oak Architects",
        webHref: { href: "https://gitcrackeruk.github.io/Architect/", button: "Visit" },
        stack: ["html", "css", "bootstrap"]
    }, {
        alt: "GENTLEMAN BARBER",
        githubHref: "https://github.com/GitcrackerUK/Barber",
        src: barber,
        text: "Simple bootstrap barber website. It's informative in very friendly tone aimed for every age range customers. ",
        title: "GENTLEMAN BARBER",
        webHref: { href: "https://gitcrackeruk.github.io/Barber/", button: "Visit" },
        stack: ["html", "css", "bootstrap"]
    },
    {
        alt: "Fitness App",
        githubHref: "https://github.com/GitcrackerUK/Architect",
        src: fitnessApp,
        text: "Very simple fitness app to track exercises duration, date. App is created in React/Node.js and deployed on Gcloud. Database used to storage inputs is MongoDb Atlas.",
        title: "Fitness App",
        webHref: { href: "https://code-camp-front.ew.r.appspot.com/", button: "Visit" },
        stack: ["react", "html", "css", "bootstrap", "node", "mongo"]
    }, {
        alt: "Goodwood Solicitors",
        githubHref: "https://github.com/GitcrackerUK/Solicitors",
        src: solicitors,
        text: "Mobile-first webpage with menu to sub pages. Contains light color scheme, parallax image, form, and more.",
        title: "Goodwood Solicitors",
        webHref: { href: "https://gitcrackeruk.github.io/Solicitors/", button: "Visit" },
        stack: ["html", "css", "bootstrap"]
    }, {
        alt: "ASPARAGO",
        githubHref: "https://github.com/GitcrackerUK/Architect",
        src: asparago,
        text: "Bootstrap restaurant page with menu, carousel, content, location, parallax background images. These modern design with great and easy access to every information makes it very attractive",
        title: "ASPARAGO",
        webHref: { href: "https://gitcrackeruk.github.io/asparago.online/", button: "Visit" },
        stack: ["html", "css", "bootstrap"]
    }
]