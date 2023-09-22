import { useState } from "react";
import Cart from "../pages/Cart"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { notOfCartOpen } from "../../reduxToolkit/cartSlice"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const isCartOpen = useSelector((state: any) => state.cart.value)



    return (
        <>
            {isOpen && <Cart />}
            {/* This is container */}
            <div className="bg-slate-200 h-14 flex">

                {/* left conta */}
                <div className="left flex items-center  ">
                    <Link to="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" className="h-10 mt-2 ml-2" alt="" />
                    </Link>

                    <div className="ml-5">
                        <div className="text-center">hello</div>
                        <div className="">select your address</div>
                    </div>
                </div>

                {/* middlepart search button */}
                <div className="ml-5 search flex items-center">
                    <input type="text" className="w-[30rem] h-10" />
                </div>

                {/* right area? */}
                <div className="rightBox flex ml-auto mr-10">

                    <Link to="/signup">
                        <div className="firstBox flex flex-col items-center justify-center mt-2 ml-5 ">
                            <div className="text-xs">Hello, sign in</div>
                            <div className="">Accounts And lists</div>
                        </div>
                    </Link>

                    <div className="secondBox flex flex-col items-center justify-center mt-2 ml-5 ">
                        <div className="text-xs">Returns</div>
                        <div className="">& Orders</div>
                    </div>

                    <div className="thirdBox flex items-center mx-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <div onClick={() => {
                                useDispatch(isCartOpen())
                                console.log(isOpen)
                            }} >Cart
                            </div>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Navbar;