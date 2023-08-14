import { Link } from "react-router-dom";
import store from "../../store"

const Navbar = () => {
    const addToProductsArray = store((state: any) => state.addToProductsArray)


    return (
        <>
            {/* This is container */}
            <div className="bg-slate-200 h-14 flex">

                {/* left conta */}
                <div className="left flex items-center  ">
                    <Link onClick={
                        addToProductsArray
                        HTMLFormControlsCollection={.g}
                        } to="/">
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

                    <div className="firstBox "></div>
                    <div className="firstBox flex flex-col items-center justify-center mt-2 ml-5 ">
                        <div className="text-xs">Hello, sign in</div>
                        <div className="">Accounts And lists</div>
                    </div>

                    <div className="secondBox flex flex-col items-center justify-center mt-2 ml-5 ">
                        <div className="text-xs">Returns</div>
                        <div className="">& Orders</div>
                    </div>

                    <div className="thirdBox flex items-center mx-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <Link to="/cart">chart</Link>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Navbar;