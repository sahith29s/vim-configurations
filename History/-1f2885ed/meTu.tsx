import Navbar from "../justComponents/Navbar";
import store from "../../store";

const Cart = () => {
  const productsArray = store((state: any) => state.productsArray);
  const addToProductsArray = store((state: any) => state.addToProductsArray);
  return (
    <>
      <Navbar />
      {
        productsArray.map((product : any) =>{
          return product.title






        })
      }
    </>
  );
};

export default Cart;
