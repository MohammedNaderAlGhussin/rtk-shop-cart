import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const ViewPage = () => {
  const product = useSelector((state) => state.cart.product);
  console.log(product);
  return (
    <Fragment>
      <Navbar />
      <div className="flex flex-row  justify-center items-center pt-[90px]">
        <div className="max-w-[400px] min-h-[480px] flex flex-col justify-center items-center text-center bg-white border border-gray-600 rounded-lg shadow-lg  flex-grow">
          <div className="flex flex-row justify-center items-center text-start pt-2">
            <img
              className="rounded-t-lg max-h-[200px]  object-contain"
              src={product.image}
              alt=""
            />
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900  text-start pl-2">
              {product.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700  text-start pl-3">
              {product.description}
            </p>
            <p className="mb-3 font-normal text-gray-700 ">
              {product.category}
            </p>
            <p className="mb-3 font-bold text-gray-700 ">{product.price} $</p>
            <p className="mb-3 font-bold text-gray-700 ">
              Rating: {product.rating.rate}
            </p>

            <Link
              to={"/cart"}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              Back To Cart
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ViewPage;
