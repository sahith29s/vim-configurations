import Navbar from "../justComponents/Navbar";
import { useDispatch , useSelector } from "react-redux";
import Product from "../justComponents/Product";

const HomePage = () => {
  const products = useSelector((state : any) => state.product)
  console.log(products)
  return (
    <>
      <Navbar />
      <img
        className="w-[100%] mb-[-45rem]"
        src="https://img.freepik.com/free-photo/people-making-hands-heart-shape-silhouette-sunset_53876-15987.jpg"
        alt=""
      />

      <div className="flex flex-wrap justify-evenly">
        <Product title="this is me inside the vim" money="$10" id={1} />
        <Product title="this is me inside the vim" money="$10" id={2} />
        <Product title="this is me inside the vim" money="$10" id={3} />
        {
          products.map((item : any) => {
            return <div>{item.name}</div>
          })
        }

      </div>
    </>
  );
};

export default HomePage;
