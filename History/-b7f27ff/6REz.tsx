import Navbar from "../justComponents/Navbar";
import Product from "../justComponents/Product";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <img
        className="w-[100%] mb-[-45rem]"
        src="https://img.freepik.com/free-photo/people-making-hands-heart-shape-silhouette-sunset_53876-15987.jpg"
        alt=""
      />

      <div className="flex flex-wrap justify-evenly">
        <Product title="this is me inside the vim" money="$10" id={1} image="what the fuck"/>
        <Product title="this is me inside the vim" money="$10" id={2} />
        <Product title="this is me inside the vim" money="$10" id={3} />
      </div>
    </>
  );
};

export default HomePage;
