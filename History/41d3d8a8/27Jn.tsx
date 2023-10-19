import React from 'react'
import Link from 'next/link'

const BoxOfLinks = () => {
    return (
        <>

            <h3 className='my-5'>Explore</h3>
            <Link href="/" className="inline-block mt-2 font-bold text-blue-900">Home (this is a link)</Link>


        </>
    )
}

export default BoxOfLinks