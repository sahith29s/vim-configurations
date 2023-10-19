import React from 'react'
import Link from 'next/link'

const BoxOfLinks = (props: any) => {
    console.log(props)
    let links = props.links
    return (
        <>

            <h3 className='my-5'>{props.heading}</h3>

            {/* {props} */}
            {

                props.links.keys(item).map()

            }



        </>
    )
}

export default BoxOfLinks