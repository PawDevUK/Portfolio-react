import React, { useEffect, useState } from 'react'


export default function Test() {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
    }, [])


    return (
        <div>

        </div>
    )
}
