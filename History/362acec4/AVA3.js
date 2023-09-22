import React from 'react'
import { useRouter } from 'next/router'

const page = () => {
    const router = useRouter()
    return (
        <div>{router.query.slug}</div>
    )
}

export default page