import React from 'react'

const Progressbar = ({ value }: any) => {

    return (
        <>
            <div className="App">
                <span>Progress bar</span>

                <div>
                    <span>{Math.trunc(value)}%</span>
                </div>

            </div>
        </>
    )
}

export default Progressbar