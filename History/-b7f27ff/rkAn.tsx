import Navbar from '../justComponents/Navbar'
import Product from '../justComponents/Product'

const HomePage = () => {
    return (
        <>
            <Navbar />
            <img className='w-[100%] mb-[-45rem]' src="https://img.freepik.com/free-photo/people-making-hands-heart-shape-silhouette-sunset_53876-15987.jpg" alt="" />

            <div className='flex flex-wrap justify-evenly'>
                <Product />
                <Product />
                <Product />
            </div>
        </>
    )
}

export default HomePage