import axios from 'axios'
import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class Projects extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cards: []
        }
    };

    componentDidMount() {
        axios.get('http://localhost:5000/card')
            .then(
                (res) => {
                    this.setState({
                        cards: res.data
                    })
                }
            );
            AOS.init({duration:1000});
    }
    render() {
        return (
            <div >
                 <h2 >Projects</h2>
                 <div id="projects" className="mt-3 jumbo d-flex flex-wrap">
                {this.state.cards.map((item, index) => {
                    return (
                        <div  data-aos="fade" key={index} className="card col-xs-10 cardSolo mx-auto my-1">
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
}
