import React, { useState, useEffect } from "react";

export default function UseStateExample1() {
    const [resourcetype, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourcetype}`)
        .then(response => response.json())
        .then(json => setItems(json))
    }, [resourcetype])

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        // clean up
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    return (
        <>
            <div> width: {windowWidth} </div>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h1>{resourcetype}</h1>
            {items.map(item => {
                return <pre key={item.id}>{JSON.stringify(item)}</pre>
            })}
        </>
    )
}