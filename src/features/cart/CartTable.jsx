/* eslint-disable react/prop-types */
import CartMenuProduct from "./CartMenuProduct";
import CartProduct from "./CartProduct";
import SlideInFromLeftAnimation from "../../ui/SlideInFromLeftAnimation";

function CartTable({ cart }) {
  return (
    <div className="min-w-[643px] max-xl:min-w-[auto]">
      <div className="flex h-[50px] w-full items-center justify-between border-b border-black-shade-1 pb-6 font-semibold max-sm:mb-2">
        <p>Product</p>
        <span className="flex w-[322px] items-center justify-between">
          <p className="max-sm:hidden">Quantity</p>
          <p className="max-sm:hidden">Price</p>
          <p className="max-sm:hidden">Subtotal</p>
        </span>
      </div>
      <div className="w-full max-sm:hidden">
        {cart.map((product, idx) => (
          <SlideInFromLeftAnimation key={product} delay={idx / 20}>
            <CartProduct product={product} />
          </SlideInFromLeftAnimation>
        ))}
      </div>
      <div className="hidden w-full max-sm:block">
        {cart.map((product) => (
          <CartMenuProduct
            product={product}
            key={product}
            withDeleteBtn={true}
            className={"pt-4"}
          />
        ))}
      </div>
    </div>
  );
}

export default CartTable;
