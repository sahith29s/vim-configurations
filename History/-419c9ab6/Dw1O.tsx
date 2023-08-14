const Product = (props : any): JSX.Element => { 
    return (
        <>
            <div className="bg-slate-200 w-[22rem] px-[2rem] m-5">
                <div className="heading">this is me inside the vim</div>
                <div className="prize mb-2">10$</div>
                <div className="image">
                    <img src=""
                        className="h-[20rem] border-none outline-none w-[100%]"
                        alt="" />

                </div>
                <div>
                    <button className="bg-blue-500 my-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add to cart
                    </button>
                </div>
            </div>
        </>
    )
}

export default Product