import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AmazonCloNavbar = () => {
    return (
        <>
            <nav className="flex gap-10 px-10 justify-between text-white h-16 items-center bg-black">
                <div className="logo">
                    logo
                </div>
                <div className="searchbar flex">
                    <input type="text" className="h-10  rounded-xl w-[25rem]" />
                    <FontAwesomeIcon icon={faSearch} color='white' className="text-black bg-orange-500 h-10" />
                </div>
                <div className="signin">Sign in</div>
                <div className="orders"> orders</div>
                <div className="cart">cart</div>
            </nav>
        </>
    )
}

export default AmazonCloNavbar