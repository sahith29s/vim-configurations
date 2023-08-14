import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        
        <ul>
            <li>

                <Link>Home</Link>

            </li>
            <li>
                <Link>About</Link>
            </li>
            <li>
                <Link>Services</Link>
            </li>

        </ul>

        </>
    )
}

export default Navbar