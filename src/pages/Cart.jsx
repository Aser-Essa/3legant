import SectionContainer from "../ui/SectionContainer";
import CartDetails from "../features/cart/CartDetails";
import CartSummary from "../features/cart/CartSummary";
import OrderStages from "../features/place order/OrderStages";

function Cart() {
  return (
    <SectionContainer className={"my-20 max-sm:mb-0"}>
      <OrderStages title={"Cart"} />
      <CartDetails />
      <div className="block max-xl:hidden">
        <CartSummary />
      </div>
    </SectionContainer>
  );
}

export default Cart;
