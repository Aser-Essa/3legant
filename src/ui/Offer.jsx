import { CiDiscount1 } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import ArrowLink from "./ArrowLink";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { motion } from "motion/react";

function Offer() {
  const [isOpen, setIsOpen] = useState(true);

  function handleClick() {
    setIsOpen(false);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="flex h-10 w-full items-center justify-center gap-3 bg-white-shade-2 font-inter text-sm font-semibold"
          initial={{ translateY: "-100%" }}
          animate={{ translateY: "0" }}
          exit={{ translateY: "-100%" }}
          transition={{ duration: 0.35 }}
          key="box"
        >
          <CiDiscount1 className="h-6 w-6" />
          <p className="">30% off storewide — Limited time! </p>
          <ArrowLink
            className={
              "border-blue-custom font-medium text-blue-custom max-sm:hidden"
            }
            to={"/shop"}
          >
            Shop Now
          </ArrowLink>
          <IoCloseOutline
            className="absolute right-4 h-5 w-5 cursor-pointer max-sm:relative max-sm:ml-[22px]"
            onClick={handleClick}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Offer;
