import React from 'react'
import Link from 'next/link'

const BoxOfLinks = (props : any) => {
    console.log(props)
    return (
        <>

            <h3 className='my-5'>{props.heading}</h3>
            {/* {props} */}
            <div>
                <Link href="/" className="inline-block mt-2 font-bold text-blue-900">Home (this is a link)</Link>
            </div>
            <div>
                <Link href="/" className="inline-block mt-2 font-bold text-blue-900">Home (this is a link)</Link>
            </div>
            <div>
                <Link href="/" className="inline-block mt-2 font-bold text-blue-900">Home (this is a link)</Link>
            </div>
            <div>
                <Link href="/" className="inline-block mt-2 font-bold text-blue-900">Home (this is a link)</Link>
            </div>

        </>
    )
}

export default BoxOfLinks