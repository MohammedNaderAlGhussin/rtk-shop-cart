/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { addToCart } from "../featuers/cart/cartSlice";

const Product = ({ product }) => {
  //   const cartArr = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="max-w-[350px] min-h-[480px] flex flex-col justify-center items-center text-center bg-white border border-gray-600 rounded-lg shadow-lg mt-2 flex-grow">
      <div className="flex flex-row justify-center items-center text-center pt-2">
        <img
          className="rounded-t-lg max-h-[200px]  object-contain"
          src={product.image}
          alt=""
        />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
          {product.title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 ">{product.category}</p>
        <p className="mb-3 font-bold text-gray-700 ">{product.price} $</p>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
