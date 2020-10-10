import React, { Component } from 'react'
import Architect from '../../img/royal.png'

export default class Projects extends Component {
    constructor(props) {
        super(props)

        this.state = {
            projects: [
                {
                    src: Architect,
                    alt: "asparago.com",
                    title: "Royal Oak Architects",
                    text: "Light mobile-first website dedicated for customers who like simple and smart looking solutions.",
                    webHref: {
                        href: "Architects/about.html",
                        button: "Visit Royal Oak"
                    },
                    githubHref: "https://github.com/GitcrackerUK/Architect",

                },
                {
                    src: Architect,
                    alt: "asparago.com",
                    title: "Royal Oak Architects",
                    text: "Light mobile-first website dedicated for customers who like simple and smart looking solutions.",
                    webHref: {
                        href: "Architects/about.html",
                        button: "Visit Royal Oak"
                    },
                    githubHref: "https://github.com/GitcrackerUK/Architect",

                },
                {
                    src: Architect,
                    alt: "asparago.com",
                    title: "Royal Oak Architects",
                    text: "Light mobile-first website dedicated for customers who like simple and smart looking solutions.",
                    webHref: {
                        href: "Architects/about.html",
                        button: "Visit Royal Oak"
                    },
                    githubHref: "https://github.com/GitcrackerUK/Architect",

                },
                {
                    src: Architect,
                    alt: "asparago.com",
                    title: "Royal Oak Architects",
                    text: "Light mobile-first website dedicated for customers who like simple and smart looking solutions.",
                    webHref: {
                        href: "Architects/about.html",
                        button: "Visit Royal Oak"
                    },
                    githubHref: "https://github.com/GitcrackerUK/Architect",

                }
            ]
        }
    }
    render() {
        return (
            <div className="mt-3 jumbo d-flex flex-wrap">
                {this.state.projects.map((item, index) => {
                    return (
                        <div key={index} className="card col-xs-10 cardSolo mx-auto my-1">
                            <img className="card-img-top" width="100%" src={item.src} alt={item.alt}></img>
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.text}</p>
                                <a href={item.webHref.href} className="btn btn-outline-primary">{item.webHref.button}</a>
                                <a href={item.githubHref} target="_blank" className="btn btn-dark m-1">Github Repo</a>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        )
    }
}
