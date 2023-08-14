import React from 'react'

import { useParams } from 'react-router-dom'
const About = (props) => {
    let {id } = useParams()
    return (
        <div>
            this is about .js 
            <br />
            this is props {props.title}
            <br />
            this is params {id}

            


        </div>
    )
}

export default About