import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart, viewProduct } from "./cartSlice";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Fragment } from "react";

const CartView = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, product) => {
    return (acc += product.price * product.quantity);
  }, 0);
  return (
    <Fragment>
      <Navbar />
      <div className="container p-5 pt-20 ">
        <button
          onClick={() => dispatch(clear())}
          className="bg-blue-500 text-[18px] px-6 py-1 mb-3 rounded-[7px] text-center hover:bg-blue-700 duration-150 text-white"
        >
          Clear
        </button>
        <h4 className="pb-2 text-[19px]">
          Total Price:{" "}
          <span className="font-bold">${totalPrice.toFixed(2)}</span>
        </h4>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-3 py-3">
                  #
                </th>
                <th scope="col" className="px-4 py-3">
                  Tilte
                </th>
                <th scope="col" className="px-4 py-3">
                  Img
                </th>
                <th scope="col" className="px-4 py-3">
                  Quntity
                </th>
                <th scope="col" className="px-4 py-3">
                  Price
                </th>
                <th scope="col" className="px-4 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => {
                return (
                  <tr key={product.id} className="bg-white border-b ">
                    <td className="px-3 py-4">{product.id}</td>
                    <th
                      scope="row"
                      className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {product.title}
                    </th>
                    <td className="px-4 py-4">
                      <img
                        className="max-w-[50px] object-contain"
                        src={product.image}
                        alt=""
                      />
                    </td>
                    <td className="px-4 py-4"> {product.quantity}</td>
                    <td className="px-4 py-4">{product.price} $</td>
                    <td className="px-4 py-4">
                      <button
                        onClick={() => dispatch(deleteFromCart(product))}
                        className="font-medium text-[16px] text-red-600 mr-2"
                      >
                        Delete
                      </button>
                      <Link
                        onClick={() => dispatch(viewProduct(product))}
                        to={`/cart/view/${product.id}`}
                        className="font-medium text-[16px] text-blue-600"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default CartView;
