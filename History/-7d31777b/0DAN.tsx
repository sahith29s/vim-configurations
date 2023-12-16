// import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
// import { faGitHub } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAngleDoubleDown, faSearch, faBurger, faSignIn, faSignInAlt, faCartShopping, faListDots } from '@fortawesome/free-solid-svg-icons'
import DotsHover from './DotsHover'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { RootState } from '../redux/store/store'
import { dotsHoverSetFalse , dotsHoverSetTrue } from '../redux/feature/dotsHover/dotsHoverSlice'


const Navbar = () => {
    const isDotsHover = useAppSelector((state: RootState) => state.dotsHover.value )
    const dispatch = useAppDispatch()

    const [isHoveringDots, setIsHoveringDots] = useState(false)
    return (

        <>
            {/* <FontAwesomeIcon icon={faAngleDoubleDown} /> */}

            <div className="bg-slate-100 fixed top-0 w-[100%]">
                <nav className="container justify-around  mx-auto flex sm:flex-row flex-col items-center py-5">

                    <div className="logo">Sahith</div>

                    {/* search bar */}
                    <div className="input relative max-w-[95%]">
                        <FontAwesomeIcon icon={faSearch} className="absolute left-[.5rem] top-2 z-10" />
                        <input type="text" placeholder="Search for Products, Brands and More" className="bg-slate-200 pl-8 h-8 w-[90vw] sm:w-[50vw] relative" />
                    </div>

                    <div className="hidden md:block">

                        <div className="flex items-center justify-center ">

                            {/* best seller */}
                            <div className="flex items-center gap-3">
                                <FontAwesomeIcon icon={faBurger} />
                                <div className="hidden lg:block">Best Seller</div>
                            </div>

                            {/* Sign in */}
                            <div className="mx-10 flex items-center gap-3">
                                <FontAwesomeIcon icon={faSignInAlt} />
                                <div className="hidden lg:block">Sign In</div>
                            </div>

                            {/* cart  */}
                            <div className="flex items-center gap-3"
                            >
                                <FontAwesomeIcon icon={faCartShopping} />
                                <div className="hidden lg:block">Cart</div>

                            </div>

                            <div className="ml-10 cursor-pointer relative"
                                onMouseOver={() => dispatch(dotsHoverSetTrue())}
                                // onMouseOut={() => dispatch(dotsHoverSetFalse())}
                            >
                                <FontAwesomeIcon icon={faListDots} />
                                {
                                    isDotsHover ? <DotsHover/> : ""
                                }
                            </div>

                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar