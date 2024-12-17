/* eslint-disable react/prop-types */
import { cloneElement } from "react";

function List({ param, width, children, setIsOpen }) {
  return (
    <>
      <ul
        className={`absolute z-50 max-sm:relative max-sm:w-[calc(100vw-64px)] w-[${width}px] space-y-[10px] rounded-xl border border-white-shade-2 bg-white p-2 font-inter text-black-shade-4`}
      >
        {children?.map((el, idx) =>
          cloneElement(el, { key: idx, param: param, setIsOpen }),
        )}
      </ul>
    </>
  );
}

export default List;
