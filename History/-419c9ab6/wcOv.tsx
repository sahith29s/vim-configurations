import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../reduxToolkit/productsSlice/productsSlice"

const Product = (props: any): JSX.Element => {

  const dispatch = useDispatch()
  const products = useSelector((state: any) => state.product)



  const handleAddToCart = async () => {
    // const objectToSendInDataBase = JSON.stringify({
    //   id: props.id,
    //   title: props.title,
    //   image: props.image ? props.image : "this is iamge",
    //   money: props.money
    // })



    // http://localhost:5000/product
    // const data = await fetch('http://localhost:5000/product', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     id: props.id,
    //     title: props.title,
    //     image: props.image ? props.image : "IDK",
    //     money: props.money
    //   })
    // })
    // const res = await data.json()
    // console.log(res)
    // dispatch(addProduct())
  };
  console.log(products)

  return (
    <>
      <div className="bg-slate-200 w-[22rem] px-[2rem] m-5">
        <div className="heading">{props.title}</div>
        <div className="prize mb-2">{props.money}</div>
        <div className="image">
          <img
            src={props.image}
            className="h-[20rem] border-none outline-none w-[100%]"
            alt="IDK"
          />
        </div>
        <div>
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 my-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;