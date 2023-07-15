import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="flex gap-10 fixed w-full items-center justify-between sm:justify-start py-3 px-3 shadow bg-[#eee]">
      <NavLink to={"/"} className="font-bold text-[25px] text-black">
        CART APP
      </NavLink>
      <div className="flex justify-center items-center gap-3 text-[19px] ">
        <NavLink className="link navlink " to={"/products"}>
          Products
        </NavLink>
        <NavLink className="link navlink" to={"/cart"}>
          Cart - {cart.cart.length}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
