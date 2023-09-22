import React from 'react'

const Modal = ({ open }) => {
    if (!open) return null
    return (
        <>
            <div>
                <button>x</button>
                This is box
            </div>
        </>
    )
}

export default Modal