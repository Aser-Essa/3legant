import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartMenu from "./CartMenu";
import { motion } from "motion/react";

function CartToggle() {
  const { cart } = useSelector((store) => store.cart);
  const [isOpen, setIsOpen] = useState();
  let count = 0;

  function handleClick() {
    setIsOpen((open) => !open);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  cart?.forEach((el) => (count += el?.quantity));

  return (
    <>
      <div
        className="flex cursor-pointer items-center gap-[6px]"
        onClick={handleClick}
      >
        <motion.img
          src="/shopping bag.png"
          className="h-6 w-6 max-sm:h-5 max-sm:w-5"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5, delay: 0.55 }}
        />
        <motion.span
          className="flex h-5 w-5 items-center justify-center rounded-[50%] bg-black font-inter text-xs font-bold text-white"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {count}
        </motion.span>
      </div>
      <CartMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default CartToggle;
