import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
    let { id } = useParams()
    return (
        <div>this is use params {id} </div>
    )
}

export default About