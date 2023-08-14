const Product = (): JSX.Element => {
    return (
        <>
            <div className="">
                <div className="heading">this is me inside the vim</div>
                <div className="prize">10$</div>
                <div className="image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4TAC2ojUUWRiJZij7iJpBbbwRy58jj2qJdOZdzo8_&s"
                        className="h-[10rem] w-[10rem]"
                        alt="" />

                </div>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add to cart
                    </button>
                </div>
            </div>
        </>
    )
}

export default Product