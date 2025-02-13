import { useTotalPrice } from "../../hooks/useTotalPrice";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/formatCurrency";
import { motion } from "motion/react";

function CartSummary() {
  const [subtotalPrice, totalPrice] = useTotalPrice();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const shipingType = searchParams.get("shiping") || "free_shipping";

  function handleClick() {
    navigate(`/check-out/?shiping=${shipingType}`);
  }

  function handleChange(shiping) {
    searchParams.set("shiping", shiping);

    setSearchParams(searchParams);
  }

  return (
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
      <motion.div
        initial={{ opacity: 0.5, scale: 0 }}
        whileInView={{ opacity: 1, scale: [0, 1.08, 1] }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Button className={"h-[52px] text-lg"} onClick={handleClick}>
          Checkout
        </Button>
      </motion.div>
    </div>
  );
}

export default CartSummary;
