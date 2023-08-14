import React, { Children } from 'react'
import "./MainScreen.css"

const MainScreen = (props) => {
    return (
        <>
            <div className="container .mainback">
                <div className="row">
                    <div className="page">
                        {
                            props.title && (
                                <>
                                    <h1 className="heading">{props.title}</h1>
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