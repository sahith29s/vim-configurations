const Navbar = () => {
    return (
        <>
            <div className="bg-red-500 h-14">

                {/* This is container */}
                <div className="conta flex">

                    <div className="left flex items-center  ">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" className="h-10 mt-2 ml-2" alt="" />

                        <div className="">
                            <div className="text-center">hello</div>
                            <div className="">select your address</div>
                        </div>
                    </div>

                    <div className="search flex">
                        <input type="text" className="w-[30rem]" />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Navbar