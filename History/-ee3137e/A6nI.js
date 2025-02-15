import React from 'react'
import "./Home.css"
import Product from './Product'

const Home = () => {
    return (
        <>
            <div className="home">

                <div className="home__container">
                    {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/viedo/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" /> */}

                    <img className="home__image" src="https://static.toiimg.com/thumb/msid-95356591,width-1280,height-720,resizemode-4/.jpg" alt="" />
                </div>

                <div className="home__row">
                    <Product/>
                    <Product/>

                    {/* Product  */}
                    {/* Product  */}
                </div>

                <div className="home__row">
                    {/* Product  */}
                    {/* Product  */}
                    {/* Product  */}
                </div>

                <div className="home__row">
                    {/* Product  */}
                </div>
            </div>

        </>
    )
}

export default Home