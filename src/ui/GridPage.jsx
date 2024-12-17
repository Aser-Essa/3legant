/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

function GridPage({ data, render }) {
  const [searchParams] = useSearchParams();
  const gridType = searchParams.get("grid") || 4;
  let numOfIncrease = gridType == 1 || gridType == 2 ? 8 : 12;

  const [numberOfProducts, setNumberOfProducts] = useState(numOfIncrease);

  data = data?.slice(0, numberOfProducts);

  function handleClick() {
    setNumberOfProducts((num) => num + numOfIncrease);
  }

  return (
    <div
      className={`grid w-full gap-6 overflow-hidden max-xl:gap-4 ${
        gridType == 3 || gridType == 4
          ? "grid-cols-[repeat(auto-fill,minmax(262px,_1fr))]"
          : "grid-cols-[repeat(auto-fill,minmax(460px,_1fr))]"
      } ${
        gridType == 2
          ? `max-sm:grid-cols-[repeat(auto-fill,minmax(108px,_1fr))]`
          : "max-sm:grid-cols-[repeat(auto-fill,minmax(180px,_1fr))]"
      } `}
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
