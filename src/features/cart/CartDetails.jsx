import { useSelector } from "react-redux";
import { useTotalPrice } from "../../hooks/useTotalPrice";
import { useNavigate, useSearchParams } from "react-router-dom";

import CartMenuProduct from "./CartMenuProduct";
import CartSummary from "./CartSummary";
import CartProduct from "./CartProduct";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/formatCurrency";

function CartDetails() {
  const { cart } = useSelector((store) => store.cart);
  const [subtotalPrice, totalPrice] = useTotalPrice();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const shipingType = searchParams.get("shiping") || "free_shipping";

  function handleClick() {
    navigate(`/check-out/?shiping=${shipingType}`);
  }

  function handleChange(shiping) {
    searchParams.set("shiping", shiping);
    setSearchParams(searchParams);
  }

  if (cart?.length <= 0)
    return (
      <p className="mx-auto my-20 w-fit font-inter text-[60px] font-semibold text-[#B1B5C3]">
        No Products In Cart
      </p>
    );

  return (
    <div className="flex gap-16 py-20 font-inter max-xl:flex-col max-xl:gap-12 max-sm:gap-6">
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
          {cart.map((product) => (
            <CartProduct product={product} key={product} />
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

      <div className="hidden max-xl:block">
        <CartSummary />
      </div>

      <div className="h-[476px] w-full rounded-md border border-black-shade-4 p-6">
        <p className="mb-4 text-xl font-medium">Cart summary</p>
        <div className="flex flex-col gap-3 pb-4">
          <label
            htmlFor="free-shiping"
            className="flex h-[52px] cursor-pointer items-center gap-3 rounded-md border border-black-shade-4 px-4 py-[13px]"
          >
            <input
              type="radio"
              id="free-shiping"
              name="cart"
              defaultChecked={true}
              onChange={() => handleChange("free_shipping")}
              className="peer relative mt-1 h-[18px] w-[18px] shrink-0 cursor-pointer appearance-none rounded-[50%] bg-white p-2 outline outline-1 checked:border-4 checked:border-white checked:bg-[#121212] checked:p-0"
            />
            <p>Free shipping</p>
            <p className="ml-auto">$0.00</p>
          </label>
          <label
            htmlFor="express-shipping"
            className="flex h-[52px] cursor-pointer items-center gap-3 rounded-md border border-black-shade-4 px-4 py-[13px]"
          >
            <input
              type="radio"
              id="express-shipping"
              name="cart"
              onChange={() => handleChange("express_shipping")}
              className="peer relative mt-1 h-[18px] w-[18px] shrink-0 cursor-pointer appearance-none rounded-[50%] bg-white p-2 outline outline-1 checked:border-4 checked:border-white checked:bg-[#121212] checked:p-0"
            />
            <p>Express shipping</p>
            <p className="ml-auto">+$15.00</p>
          </label>
          <label
            htmlFor="pick-up"
            className="flex h-[52px] cursor-pointer items-center gap-3 rounded-md border border-black-shade-4 px-4 py-[13px]"
          >
            <input
              type="radio"
              id="pick-up"
              name="cart"
              onChange={() => handleChange("pick_up")}
              className="peer relative mt-1 h-[18px] w-[18px] shrink-0 cursor-pointer appearance-none rounded-[50%] bg-white p-2 outline outline-1 checked:border-4 checked:border-white checked:bg-[#121212] checked:p-0"
            />
            <p>Pick Up</p>
            <p className="ml-auto">%21.00</p>
          </label>
        </div>
        <div className="flex items-center justify-between border-b border-[#EAEAEA] py-[13px]">
          <p>Subtotal</p>
          <p className="font-semibold">{formatCurrency(subtotalPrice)}</p>
        </div>
        <div className="mb-8 flex items-center justify-between py-[13px] text-xl font-semibold">
          <p>Total</p>
          <p>{formatCurrency(totalPrice)}</p>
        </div>
        <Button className={"h-[52px] text-lg"} onClick={handleClick}>
          Checkout
        </Button>
      </div>
    </div>
  );
}

export default CartDetails;
