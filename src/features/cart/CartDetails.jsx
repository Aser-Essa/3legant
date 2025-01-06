import { useSelector } from "react-redux";

import CouponInput from "./CouponInput";
import CartSummary from "./CartSummary";
import CartTable from "./CartTable";

function CartDetails() {
  const { cart } = useSelector((store) => store.cart);

  if (cart?.length <= 0)
    return (
      <p className="mx-auto my-20 w-fit font-inter text-[60px] font-semibold text-[#B1B5C3]">
        No Products In Cart
      </p>
    );

  return (
    <div className="flex gap-16 py-20 font-inter max-xl:flex-col max-xl:gap-12 max-sm:gap-6">
      <CartTable cart={cart} />
      <div className="hidden max-xl:block">
        <CouponInput />
      </div>
      <CartSummary />
    </div>
  );
}

export default CartDetails;
