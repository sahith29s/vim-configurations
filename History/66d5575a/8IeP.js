import React from 'react'

import Container from 'react-bootstrap/esm/Container'



const Footer = () => {
    return (
        <>
            <footer 

                style={{
                    width : "100%",
                    position : "relative",
                    bottom : 0,
                    display : "flex",
                    justifyContent : "center",
                }}
            >
            <Container>

                <div className="row">
                    <div className="col text-center py3">copyright &copy; Note Zipper</div>

                </div>

            </Container>
            </footer>
        </>
    )
}

export default Footer