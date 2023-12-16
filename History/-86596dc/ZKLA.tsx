import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const AmazonCloNavbar = () => {

    return (
        <>
            <nav className="flex gap-10 px-10 justify-between text-white h-16 items-center bg-black">
                <div className="logo">
                    logo
                </div>
                <div className="searchbar flex">
                    <input type="text" className="h-10  rounded-xl w-[35vw] relative" />

                    <FontAwesomeIcon icon={faSearch} color="white" className="text-black absolute rounded-r-xl text-[1rem] left-[49.5vw] bg-orange-500 h-10 " />

                </div>
                <div className="signin">
                    <p className="text-sm">Hello, sign in</p>
                    <p>Account & Lists</p>
                </div>
                <div className="orders">
                    <p className="text-sm">Returns</p>
                    <p>& Orders</p>
                </div>
                <div className="cart">
                    <FontAwesomeIcon icon={faCartShopping} color="white" className="" />
                    <span>cart</span>
                </div>
            </nav>
        </>
    )
}

export default AmazonCloNavbar