/* eslint-disable react/prop-types */
import { cloneElement } from "react";
import { motion } from "motion/react";

function List({ param, width, children, setIsOpen }) {
  return (
    <>
      <motion.ul
        className={`absolute z-50 h-0 overflow-hidden max-sm:relative max-sm:w-[calc(100vw-64px)] w-[${width}px] space-y-[10px] rounded-xl border border-white-shade-2 bg-white p-2 font-inter text-black-shade-4`}
        initial={{ height: 0 }}
        animate={{ height: "fit-content" }}
        exit={{ height: 0 }}
        transition={{ duration: 0.35 }}
        key={`box ${param} ${setIsOpen}`}
      >
        {children?.map((el, idx) =>
          cloneElement(el, { key: idx, param: param, setIsOpen }),
        )}
      </motion.ul>
    </>
  );
}

export default List;
