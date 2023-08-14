import React, { Children } from 'react'

const MainScreen = (props) => {
    return (
        <>
            <div className="page">

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
                {props.children}
            </div>

        </>




    )
}

export default MainScreen