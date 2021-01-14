
import {projects} from 'store'
import React, { useEffect } from 'react'
import '../../../node_modules/aos/dist/aos.css';
import AOS from 'aos';


export default function Projects() {
  

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div>
            <h2 className="mt-3">Projects</h2>
            <div id="projects" className="mt-3 jumbo d-flex flex-wrap">
                {projects.map((item, index) => {
                    return (
                        <div data-aos="fade" key={index} className="card col-xs-10 cardSolo mx-auto my-2">
                            <img className="card-img-top mt-0" width="100%" src={item.src} alt={item.alt}></img>
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.text}</p>
                                <a href={item.webHref.href} target="_blank" className="btn btn-outline-primary">{item.webHref.button}</a>
                                <a href={item.githubHref} target="_blank" className="btn btn-dark m-1">Github Repo</a>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )

}
