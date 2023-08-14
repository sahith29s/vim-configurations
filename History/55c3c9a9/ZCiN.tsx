import React from 'react'

const Progressbar = ({ value }: any) => {

    return (
        <>
            st
            <div className="App flex flex-col ">
                <span>Progress bar</span>

                <div>
                    <span >{Math.trunc(value)}%</span>
                </div>

            </div>
        </>
    )
}

export default Progressbar