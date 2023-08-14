import React from 'react'
import { useParams } from 'react-router-dom'

const About = (props) => {
    
    let {id} = useParams()

    return (
        <>
        {/* <div>This is about { props.name} </div> */}
        {/* <div>this is parama {id} </div> */}
        This is about
        </>
    )
}

export default About