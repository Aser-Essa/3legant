import SectionContainer from "../ui/SectionContainer";
import CartDetails from "../features/cart/CartDetails";
import OrderStages from "../features/place order/OrderStages";
import CouponInput from "../features/cart/CouponInput";

function Cart() {
  return (
    <SectionContainer className={"my-20 max-sm:mb-0"}>
      <OrderStages title={"Cart"} />
      <CartDetails />
      <div className="block max-xl:hidden">
        <CouponInput />
      </div>
    </SectionContainer>
  );
}

export default Cart;
