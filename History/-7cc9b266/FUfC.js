import React, { Children } from 'react'

const MainScreen = (props) => {
    return (
        <>
            {
                props.title && (
                    <>
                        <div className="container">
                            <div className="row">
                                <h1>{props.title}</h1>
                                <hr />
                            </div>
                        </div>
                    </>
                )
            }

        </>




    )
}

export default MainScreen