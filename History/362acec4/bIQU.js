"use client"
import React from 'react'
import { useRouter } from 'next/navigation'


const page = ({ params }) => {
    const router = useRouter()
    const { pid } = router.query

    return (
        <>
            <div>sahith</div>
            <div>{pid}</div>
        </>
    )
}

export default page