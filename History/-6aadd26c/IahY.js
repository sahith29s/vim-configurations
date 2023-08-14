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

                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Hello Guest
                        </span>
                        https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfPCkTjR_ayZLVETOH_a_DbIAHdj4nkajNbQ&usqp=CAU
                    </div>

                    <div className="header__option"></div>

                    <div className="header__option"></div>

                </div>

            </div>


        </>
    )
}

export default Header