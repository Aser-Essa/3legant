/* eslint-disable react/prop-types */
import useProduct from "./useProduct";
import Counter from "../../ui/Counter";
import Description from "../../ui/Description";
import MeasurmentAndColor from "../../ui/MeasurmentAndColor";
import Spinner from "../../ui/Spinner";
import AddToCartOrWishList from "./AddToCartOrWishList";
import ModelAndCategory from "./ModelAndCategory";

function ProductDescription({ product }) {
  const { isLoading } = useProduct();
  if (isLoading) return <Spinner />;

  return (
    <div className="h-full w-[508px] max-xl:w-full">
      <Description product={product} />
      {product?.discount && <Counter />}
      <MeasurmentAndColor product={product} />
      <AddToCartOrWishList product={product} />
      <ModelAndCategory product={product} />
    </div>
  );
}

export default ProductDescription;
