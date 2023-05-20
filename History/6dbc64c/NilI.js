import React from 'react'

const Home = () => {
  return (
    <>
    
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>

        <li>
            <Link to="/about">About</Link>
        </li>

        <li>
            <Link to="/services">Services</Link>
        </li>
    </ul>
    
    </>
  )
}

export default Home