import React from 'react'

const Progressbar = ({ value }: any) => {

    return (
        <>

            <div className="App flex flex-col items-center">
                <span>Progress bar</span>

                <div className='progressbar flex justify-center items-center  '>
                    <div className='flex justify-center items-center h-[30px] bg-slate-200 w-[500px]'>{Math.trunc(value)}%</div>
                </div>

            </div>
        </>
    )
}

export default Progressbar