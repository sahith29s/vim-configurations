"use-client"
import Image from 'next/image'
import React from 'react'
const Block11Card = (props : any) => {
    return (
        <>
        <div className="flex flex-col">
            <Image
                className="w-[100%]"
                src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                alt="sample image"
                loader={({ src, width, quality }) => {
                    const url = new URL("https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80");
                    url.searchParams.append("src", src);
                    url.searchParams.append("w", width + "");
                    url.searchParams.append("q", quality + "");
                    return url.toString();
                }}
                width={600}
                height={400}
            />
            <p>{props.description}</p>
        </div>
        </>

    )
}

export default Block11Card