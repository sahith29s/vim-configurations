import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import "./Header.css"

const Header = () => {
    return (
        <>

            <div className="header">

                <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />

                <div className='header__search'>
                    <input type="text" className="header__searchInput"/>
                    <SearchIcon className="header__searchIcon"/>

                </div>

                <div className="header__nav">

                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Hello Guest
                        </span>
                        <span className="header__optionLineTwo">
                            Sign In
                        </span>
                    </div>


                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Returns
                        </span>
                        <span className="header__optionLineTwo">
                            & Orders
                        </span>
                    </div>


                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Your
                        </span>
                        <span className="header__optionLineTwo">
                            Prime
                        </span>
                    </div>

                    <div className="header__optionBasket">

                        <ShoppingBasketIcon/>
                        
                    </div>



                </div>

            </div>


        </>
    )
}

export default Header