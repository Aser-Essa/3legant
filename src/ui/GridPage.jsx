/* eslint-disable react/prop-types */
import { useState } from "react";
import useGridColumns from "../hooks/useGridColumns";

function GridPage({ data, render, type }) {
  const { ref, gridType, grid34, grid12 } = useGridColumns({ type });

  let numOfIncrease = gridType == 1 || gridType == 2 ? 8 : 12;

  const [numberOfProducts, setNumberOfProducts] = useState(numOfIncrease);
  data = data?.slice(0, numberOfProducts);

  function handleClick() {
    setNumberOfProducts((num) => num + numOfIncrease);
  }

  return (
    <div
      className={`grid w-full gap-6 overflow-hidden max-xl:gap-4`}
      ref={ref}
      style={{
        gridTemplateColumns: `repeat(auto-fill , minmax(${gridType == 3 || gridType == 4 ? grid34 : grid12}px, 1fr))`,
      }}
    >
      {data?.map(render)}

      {data?.length >= numOfIncrease && (
        <button
          className={`col-span-full mx-auto mt-20 h-10 w-[163px] rounded-[80px] border border-black-shade-1 font-inter font-medium max-sm:mt-8`}
          onClick={handleClick}
        >
          Show more
        </button>
      )}
    </div>
  );
}

export default GridPage;
