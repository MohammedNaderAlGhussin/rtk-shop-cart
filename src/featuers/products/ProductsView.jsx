import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productsSlice";
import Product from "../../components/Product";
import Navbar from "../../components/Navbar";
import { RotatingLines } from "react-loader-spinner";

const ProductsView = () => {
  const products = useSelector((state) => state.products);
  console.log(products.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Fragment>
      <Navbar />
      <div className="container  p-5 pt-20 flex gap-5 items-center justify-center flex-wrap">
        {products.loading ? (
          <div className="mt-20">
            <RotatingLines
              strokeColor="blue"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          </div>
        ) : (
          products.products.map((product) => {
            return <Product key={product.id} product={product} />;
          })
        )}
      </div>
    </Fragment>
  );
};

export default ProductsView;
