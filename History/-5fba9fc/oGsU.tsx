import Navbar from '../justComponents/Navbar'
import Product from '../justComponents/Product'

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className='flex justify-evenly'>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </>
    )
}

export default HomePage