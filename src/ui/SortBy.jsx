import { AnimatePresence } from "motion/react";
import { cloneElement, useEffect, useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
function SortBy({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

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
      <div ref={ref}>
        <div
          className="my-2 flex h-[26px] w-[80px] cursor-pointer items-center justify-between gap-1 rounded-lg font-semibold leading-[26px] text-black-shade-1 outline-none"
          onClick={() => setIsOpen((open) => !open)}
        >
          <p className="font-inter font-semibold">Sort by</p>
          {isOpen ? (
            <FaAngleUp className="h-3 w-3" />
          ) : (
            <FaAngleDown className="h-3 w-3" />
          )}
        </div>
        <AnimatePresence>
          {isOpen && cloneElement(children, { setIsOpen })}
        </AnimatePresence>
      </div>
    </>
  );
}

export default SortBy;
