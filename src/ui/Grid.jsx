/* eslint-disable react/prop-types */
import { cloneElement } from "react";

function Grid({ param, children }) {
  return (
    <ul className="flex h-10 w-fit items-center border border-l-0 border-white-shade-1 text-[#6C7275] max-sm:absolute max-sm:right-0 max-sm:top-2">
      {children?.map((el, idx) => cloneElement(el, { key: idx, param: param }))}
    </ul>
  );
}

export default Grid;
