import { react, git, mongo, nodeJS, material, gcloud, bootstrap, figma, html, css, js, styled } from 'img'
import { bot, asparago, nasa, royal, barber, solicitors, fitnessApp, CovidApp } from 'img';


export const Menu = [
    {
        title: "About",
        href: "#about",
        disabled: false,
    },
    {
        title: "What I Use",
        href: "#use",
        disabled: false,
        react: {
            title: "Why I use React ?",
            href: "#react",
            style: "Blue",
            disabled: false
        }
    },
    {
        title: "Projects",
        href: "#projects",
        style: "Green",
        disabled: false
    },
    {
        title: "My Github",
        href: "https://github.com/GitcrackerUK",
        disabled: false,
        target: "_blank"
    },
    {
        title: "CV",
        href: "/cv",
        disabled: false,
        target: "_blank"
    }
    // {
    //     title: "Contact",
    //     href: "",
    //     disabled:true,
    // }
]

export const stack = [
    {
        img: html,
        title: "HTML",
        text: "",
        webHref: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    }
    , {
        img: css,
        title: "CSS",
        text: "",
        webHref: "https://www.w3.org/Style/CSS/Overview.en.html",
    }
    , {
        img: js,
        title: "JavaScript",
        text: "",
        webHref: "https://javascript.info/",
    },
    {
        img: react,
        title: "React",
        text: "React makes it painless to create interactive UIs. Design simple views...",
        webHref: "https://reactjs.org/",
    }, 
    {
        img: styled,
        title: "Styled-components",
        text: "",
        webHref: "https://styled-components.com/",
        styled: true
    },
    {
        img: bootstrap,
        title: "Bootstarp",
        text: "Quickly design and customize responsive mobile-first sites with Bootst...",
        webHref: "https://getbootstrap.com",
    }, {
        img: material,
        title: "Material-UI",
        text: "Material-UI is an open-source project that features React components t...",
        webHref: "https://material-ui.com/",
    }, {
        img: figma,
        title: "Figma",
        text: "Figma is a browser-based UI and UX design application, with excellent ...",
        webHref: "https://www.figma.com/",
    }, {
        img: gcloud,
        title: "Google Cloud",
        text: "Google Cloud Platform is a suite of public cloud computing services of...",
        webHref: "https://cloud.google.com/",
    }, {
        img: nodeJS,
        title: "NodeJs",
        text: "Node.Js (Node) is an open source development platform for executing Ja...",
        webHref: "https://nodejs.org/en/",
    }, {
        img: mongo,
        title: "MongoDB",
        text: "MongoDB is a cross-platform and open-source document-oriented database...",
        webHref: "https://www.mongodb.com/",
    }, {
        img: git,
        title: "GitHub",
        text: "GitHub is a Git repository hosting service, but it adds many of its ow...",
        webHref: "https://github.com/",
    }




]
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

export const ReactComponentData = {
    Header: "why react ?",
    MainText: "I use React because it's great tool allowing to mix HTML/CSS and JavaScript with help of JSX.  Great benefits of React are also quick rendering of content and changing data without reloading page what helps improve user experience.As React uses reusable components, source code is ease to maintain. Data flows in one way so code is stable. React is safe, JSX blocks injection and XSS.",
    Pros: ["Fast Rendering", "JSX", "Stable Code", "Safety", "Maintenance", "One-way data flow", "Facebook Support", "Reusable Components"]
}