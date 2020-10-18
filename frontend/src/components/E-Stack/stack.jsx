import React, { Component } from 'react';

import Card from './card.jsx'
import axios from 'axios'


export default class Stack extends Component {

    constructor(props) {
        super(props);
        this.state = {
           stack:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/stack')
        .then((res)=>{
            console.log(res.data);
            this.setState({stack:res.data})
        }).catch(function (error) {
            console.log(error);
          })
    }
    componentDidUpdate(item,stack){
        if(stack!==this.state.stack){
            console.log(this.state.stack);
        }
    }
    render() {
        return (
            <div>
                <h2>What I Use</h2>
                {
                    this.state.stack.map((item)=>{
                        console.log(item.webHref);
                        return(
                            <Card key={item._id} image={item.img} title={item.title} text={item.text} href={item.webHref
                            }></Card>
                        )
                    })
                }
               
            </div>
        )
    }
};
