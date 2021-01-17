import { react, git, mongo, nodeJS, material, gcloud, bootstrap, figma } from 'img'
import { asparago, nasa, royal, barber, solicitors, fitnessApp } from 'img';


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
        react:{
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
        target:"_blank"
    }
]

export const stack = [
    {
        img: react,
        title: "React",
        text: "React makes it painless to create interactive UIs. Design simple views...",
        webHref: "https://reactjs.org/",
    }, {
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
        alt: "Royal Oak Architects",
        githubHref: "https://github.com/GitcrackerUK/Architect",
        src: royal,
        text: "Light mobile-first website dedicated for customers who like simple and smart looking solutions.",
        title: "Royal Oak Architects",
        webHref: { href: "https://gitcrackeruk.github.io/Architect/", button: "Visit Royal Oak" },
        _id: "5f818007f14466ba5c71f59b",
    }, {
        alt: "Nasa",
        githubHref: "https://github.com/GitcrackerUK/Nasa",
        src: nasa,
        text: "Website about space related events and topics based on Nasa API. Front page is dedicated to SpaceX. Next pages contains images from space.",
        title: "Nasa",
        webHref: { href: "https://gitcrackeruk.github.io/NASA/", button: "Visit Nasa" },
        _id: "5f822f7ef004f97587496990"
    }, {
        alt: "GENTLEMAN BARBER",
        githubHref: "https://github.com/GitcrackerUK/Barber",
        src: barber,
        text: "Simple bootstrap barber website. It's informative in very friendly tone aimed for every age customers.",
        title: "GENTLEMAN BARBER",
        webHref: { href: "https://gitcrackeruk.github.io/Barber/", button: "Visit Gentleman" },
        _id: "5f8231a6f004f97587496991",
    },
    {
        alt: "Fitness App",
        githubHref: "https://github.com/GitcrackerUK/Architect",
        src: fitnessApp,
        text: "Very simple fitness app to track exercises duration, date. App is created in React/Node.js and deployed on Gcloud. Database used to storage inputs is MongoDb Atlas.",
        title: "Fitness App",
        webHref: { href: "https://code-camp-front.ew.r.appspot.com/", button: "Visit Fitness App" },
        _id: "5f8231c8f004f97587496992",
    }, {
        alt: "Goodwood Solicitors",
        githubHref: "https://github.com/GitcrackerUK/Solicitors",
        src: solicitors,
        text: "Mobile-first webpage with menu to sub pages. Contains light color scheme, parallax image, form, and more.",
        title: "Goodwood Solicitors",
        webHref: { href: "https://gitcrackeruk.github.io/Solicitors/", button: "Visit Goodwood" },
        _id: "5f8231cdf004f97587496993",
    }, {
        alt: "ASPARAGO",
        githubHref: "https://github.com/GitcrackerUK/Architect",
        src: asparago,
        text: "Bootstrap restaurant page with menu, carousel, content, location, parallax background images.",
        title: "ASPARAGO",
        webHref: { href: "https://gitcrackeruk.github.io/asparago.online/", button: "Visit Asparago" },
        _id: "5f8231d2f004f97587496994",
    }
]