import { cloneElement, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { AnimatePresence } from "motion/react";

// eslint-disable-next-line react/prop-types
function FilterBy({ children, title, param, defaultValue }) {
  const [searchParams] = useSearchParams("");
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const value = searchParams.get(param)?.replace("_", " ");
  const gridType = searchParams.get("grid");

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleClickOutside = (event) => {
    const domNode = ref.current;
    if (!domNode || !domNode.contains(event.target)) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div
        className={`${gridType == 3 || gridType == 1 ? "hidden max-[895px]:block" : ""} max-sm:w-full`}
        ref={ref}
      >
        <p className="font-inter font-semibold text-black-shade-4">{title}</p>
        <div
          className="mb-2 mt-0.5 flex h-12 w-[262px] cursor-pointer items-center justify-between rounded-lg border-2 border-black-shade-4 py-2 pl-4 pr-4 font-semibold leading-[26px] text-black-shade-1 outline-none max-xl:w-[180px] max-lg:w-fit max-sm:w-[100%]"
          onClick={() => setIsOpen((open) => !open)}
        >
          <p className="text-nowrap">{value || defaultValue}</p>
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        <AnimatePresence>
          {isOpen && cloneElement(children, { setIsOpen })}
        </AnimatePresence>
      </div>
    </>
  );
}

export default FilterBy;
