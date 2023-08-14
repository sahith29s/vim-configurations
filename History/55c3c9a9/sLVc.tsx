import React from 'react'

const Progressbar = ({ value }: any) => {

    return (
        <>

            <div className="App flex flex-col items-center">
                <span>Progress bar</span>

                <div>
                    <span className='h-[10px] bg-slate-200 w-[500px]'>{Math.trunc(value)}%</span>
                </div>

            </div>
        </>
    )
}

export default Progressbar