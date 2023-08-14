const Navbar = () => {
    return (
        <>
            {/* This is container */}
            <div className="bg-red-500 h-14 flex">

                {/* left conta */}
                <div className="left flex items-center  ">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" className="h-10 mt-2 ml-2" alt="" />

                    <div className="">
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

                    <div className="thirdBox flex items-center">
                        cart
                    </div>


                </div>

            </div>

        </>
    )
}
export default Navbar;