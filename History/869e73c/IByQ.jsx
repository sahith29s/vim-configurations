import React from 'react'
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { RedirectFunction } from 'react-router-dom'


const About = () => {
    let { id } = useParams()
    return (
        <>
        <div>this is use params {id} </div>
        <button onClick={
            () =>{

                
            }
        }>button</button>
        </>
    )
}

export default About