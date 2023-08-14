import React, { Children } from 'react'

const MainScreen = (props) => {
    return (
        <>
            {
                props.title && (
                    <>
                        <h1>{props.title}</h1>
                        <hr />
                        {Children}
                    </>
                )
            }
        </>




    )
}

export default MainScreen