import { CiDiscount1 } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import ArrowLink from "./ArrowLink";
import { useState } from "react";

function Offer() {
  const [isOpen, setIsOpen] = useState(true);

  function handleClick() {
    setIsOpen(false);
  }

  return (
    <>
      {isOpen && (
        <div className="relative flex h-10 items-center justify-center gap-3 bg-white-shade-2 font-inter text-sm font-semibold">
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
        </div>
      )}
    </>
  );
}

export default Offer;
