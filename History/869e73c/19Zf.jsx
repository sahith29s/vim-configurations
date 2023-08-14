import React from 'react'
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'


const About = () => {
    let { id } = useParams()
    return (
        <>
        <div>this is use params {id} </div>
        <button onClick={

            () =>{
                console.log("fuck you bitch ")
            }

        }>button</button>
        </>
    )
}

export default About