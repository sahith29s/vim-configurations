import React from 'react'
import Link from 'next/link'

const BoxOfLinks = (props: any) => {
    console.log(props.links[0])
    return (
        <>

            <h3 className='my-5'>{props.heading}</h3>

            {/* {props} */}
            {

                Object.keys(props.links).map((key, index) => {
                    return (
                        <div>
                            <Link href="/" className="inline-block mt-2 font-bold text-blue-900">{key}</Link>
                            <div>{props.links[index]}</div>
                            
                        </div>
                    )
                })

            }



        </>
    )
}

export default BoxOfLinks