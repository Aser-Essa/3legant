import { RiDiscountPercentLine } from "react-icons/ri";
import { useSelector } from "react-redux";

function CartSummary() {
  const { cart } = useSelector((store) => store.cart);

  if (cart?.length <= 0) return;

  return (
    <div className="flex w-[424px] flex-col gap-4 max-xl:w-full">
      <div>
        <p className="mb-2 text-xl font-medium">Have a coupon?</p>
        <p className="font-inter text-black-shade-4">
          Add your code for an instant cart discount
        </p>
      </div>
      <div className="flex h-[52px] items-center gap-2 border border-black-shade-4 px-4 font-inter font-medium text-black-shade-4">
        <label htmlFor="coupon">
          <RiDiscountPercentLine className="h-6 w-6" />
        </label>
        <input
          type="text"
          id="coupon"
          placeholder="Coupon Code"
          className="h-full w-full placeholder:font-medium placeholder:text-black-shade-4 focus:outline-none"
        />
        <button className="text-black-shade-1">Apply</button>
      </div>
    </div>
  );
}

export default CartSummary;
