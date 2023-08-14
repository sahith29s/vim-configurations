import React from 'react'

const MainScreen = (props) => {
    return (
        <>
            {
                props.title && (
                    <>
                    <h1>{props.title}</h1>
                    <hr />
                    </>
                )
            }
        </>



        
    )
}

export default MainScreen