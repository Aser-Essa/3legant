import { RiDiscountPercentLine } from "react-icons/ri";
import { formatCurrency } from "../../utils/formatCurrency";
import CartMenuProduct from "../cart/CartMenuProduct";
import { useSelector } from "react-redux";
import { useTotalPrice } from "../../hooks/useTotalPrice";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CheckOutOrderSummary() {
  let { cart } = useSelector((store) => store.cart);
  const [subtotalPrice, totalPrice] = useTotalPrice();
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState("JenkateMW");
  const [discount, setDiscount] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClickApplyCoupon() {
    if (coupon === "JenkateMW") {
      searchParams.set("coupon", true);
      setSearchParams(searchParams);
      setDiscount(true);
      setCoupon("");
    }
  }

  useEffect(() => {
    if (cart?.length <= 0) navigate("/cart");
  }, [cart?.length, navigate]);

  return (
    <div className="h-fit min-w-[413px] rounded-md border border-black-shade-4 px-6 py-4 pr-0 max-sm:min-w-[auto]">
      <p className="mb-4 text-[28px] text-[#121212]">Order summary</p>
      <div className="scroll-cart h-[435px] overflow-y-auto pr-6 max-sm:h-[350px] max-sm:gap-4">
        {cart?.map((product) => {
          {
            return (
              <CartMenuProduct
                product={product}
                key={product?.id}
                className={"py-6"}
              />
            );
          }
        })}
      </div>
      <div className="mr-6 mt-6 flex h-[52px] items-center gap-3 font-inter font-medium text-black-shade-4">
        <input
          type="text"
          id="coupon"
          placeholder="Coupon Code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="h-full w-full rounded-md border border-black-shade-4 px-4 placeholder:font-medium placeholder:text-black-shade-4 focus:outline-none"
        />
        <button
          className="h-[52px] w-[95px] rounded-lg bg-black-shade-1 px-[26px] py-3 font-inter text-white"
          onClick={handleClickApplyCoupon}
        >
          Apply
        </button>
      </div>
      <div className="mr-6 mt-4 font-inter">
        {discount && (
          <div className="flex h-[52px] items-center justify-between border-b border-white-shade-1">
            <div className="flex items-center gap-2">
              <RiDiscountPercentLine className="h-6 w-6" />
              <p>JenkateMW</p>
            </div>
            <p className="py-3 font-semibold text-[#38CB89]">
              -$25.00 [Remove]
            </p>
          </div>
        )}
        <div className="flex h-[52px] items-center justify-between border-b border-white-shade-1">
          <p>Shipping</p>
          <p className="py-3 font-semibold">Free</p>
        </div>
        <div className="flex h-[52px] items-center justify-between border-b border-white-shade-1">
          <p>Subtotal</p>
          <p className="py-3 font-semibold">{formatCurrency(subtotalPrice)}</p>
        </div>
        <div className="flex h-[52px] items-center justify-between">
          <p>Total</p>
          <p className="py-3 font-semibold">{formatCurrency(totalPrice)}</p>
        </div>
      </div>
    </div>
  );
}

export default CheckOutOrderSummary;
