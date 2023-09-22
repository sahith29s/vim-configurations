import React from 'react'
import { useRouter } from 'next/navigation'


const page = ({ params }) => {
    const router = useRouter()

    return (
        <div>{router.query.slug}</div>
    )
}

export default page