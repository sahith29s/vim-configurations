import React from 'react'
import { useRouter } from ''

const page = () => {
    const router = useRouter()
    return (
        <div>{router.query.slug}</div>
    )
}

export default page