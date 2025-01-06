/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function GridPage({ data, render, type }) {
  const [searchParams] = useSearchParams();
  const gridType = searchParams.get("grid") || 4;
  let numOfIncrease = gridType == 1 || gridType == 2 ? 8 : 12;
  const ref = useRef();
  const [containerWidth, setContainerWidth] = useState(1120);
  const [width, setWidth] = useState(window.innerWidth);

  const [numberOfProducts, setNumberOfProducts] = useState(numOfIncrease);
  data = data?.slice(0, numberOfProducts);

  function handleClick() {
    setNumberOfProducts((num) => num + numOfIncrease);
  }

  useEffect(() => {
    if (ref.current) {
      setContainerWidth(ref.current.clientWidth);
    }
    const handleResize = () => {
      if (ref.current) {
        setContainerWidth(ref.current.clientWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [gridType]);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return window.removeEventListener("resize", () =>
      setWidth(window.innerWidth),
    );
  }, []);

  const grid34 =
    type == "blog"
      ? width > 980
        ? containerWidth / gridType - gridType * 6
        : 262
      : width > 980
        ? 250
        : 480;

  const grid12 =
    type == "blog"
      ? width > 1200
        ? containerWidth / gridType - gridType * 6
        : 500
      : width > 1200
        ? containerWidth / gridType - gridType * 6
        : 500;

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
