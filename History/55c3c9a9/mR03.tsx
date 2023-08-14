import React, { useState } from 'react'

const Progressbar = ({ value }: any) => {

    const [] = useState(second)

    return (
        <>

            <div className="App flex flex-col items-center">
                <span>Progress bar</span>

                <div className='progressbar flex justify-center items-center h-[20px] bg-slate-200 w-[500px] '>
                    <div className=''>{Math.trunc(value)}%</div>
                </div>

            </div>
        </>
    )
}

export default Progressbar