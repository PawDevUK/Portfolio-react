import React from "react"

export default function FooterCurrentYear() {
    let year = new Date().getFullYear()
    return <h1 >{year}</h1>
}