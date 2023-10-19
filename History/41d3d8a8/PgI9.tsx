import React from 'react'
import Link from 'next/link'

const BoxOfLinks = (props: { heading: string, links: string[] }) => {
    return (
        <>

            <h3 className='my-5'>Explore</h3>
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