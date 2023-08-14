import React, { Children } from 'react'

const MainScreen = (props) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="page">
                        {
                            props.title && (
                                <>
                                    <h1>{props.title}</h1>
                                    <hr />
                                </>
                            )
                        }
                        {props.children}
                    </div>
                </div>
            </div>

        </>




    )
}

export default MainScreen