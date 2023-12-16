import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBurger, faSignInAlt, faCartShopping, faListDots } from '@fortawesome/free-solid-svg-icons'
import DotsHover from './DotsHover'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { RootState } from '../redux/store/store'
import { dotsHoverSetTrue } from '../redux/feature/dotsHover/dotsHoverSlice'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const isDotsHover = useAppSelector((state: RootState) => state.dotsHover.value)
    const dispatch = useAppDispatch()

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
                            {/* <Link to="/sahith"> */}
                            <Link to="/path">
                                <div className="px-10 flex items-center gap-3">
                                    <FontAwesomeIcon icon={faSignInAlt} />
                                    <div className="hidden lg:block">Sign In</div>
                                </div>
                            </Link>
                            {/* </Link> */}

                            {/* cart  */}

                            <div className="pr-10 flex cursor-pointer items-center gap-3"
                            >
                                <FontAwesomeIcon icon={faCartShopping} />
                                <div className="hidden lg:block">Cart</div>

                            </div>

                            <div className=" cursor-pointer relative"
                                onMouseOver={() => dispatch(dotsHoverSetTrue())}
                            >
                                <FontAwesomeIcon icon={faListDots} />
                                {isDotsHover && <DotsHover />}
                            </div>

                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar