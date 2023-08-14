import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <>

            <div className="header">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />

                <div className='header__search'>
                    <input type="header__searchInput" />
                </div>

                <div className="header__nav">
                    <div className="header__option"></div>
                    <div className="header__option"></div>
                    <div className="header__option"></div>
                </div>

            </div>


        </>
    )
}

export default Header