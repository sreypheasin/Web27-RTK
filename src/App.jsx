import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase } from "./features/counter/counterSlice";
import {
  selectAllProducts,
  fetchAllProduct,
  fetchSingleProduct,
  selectSingleProduct,
  selectStatus
} from "./features/product/productSlice";
import ProductCard from "./components/cards/product-card";
import ProductSkeleton from "./components/skeleton/product-skeleton";
import { selectUser } from "./features/auth/authSlice";

function App() {
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectStatus);
  const countValue = useSelector((state) => state.counterR.countValue);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  const dispatch = useDispatch();
  console.log(countValue);
  useEffect(() => {
    dispatch(fetchAllProduct());
  }, []);

  // useEffect(())

  console.log("product in home page", products);

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        {/* product section */}
        <section className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {status === "Loading" &&
            skeleton.map((index) => <ProductSkeleton key={index} />)}
          {status === "Success" &&
            products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                thumbnail={product.thumbnail}
                price={product.price}
                desc={product.description}
                tag={product.tags[0]}
                id={product.id}
              />
            ))}
        </section>
      </div>
    </>
  );
}

export default App;
