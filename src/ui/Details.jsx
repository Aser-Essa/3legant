/* eslint-disable react/prop-types */
import { formatCurrency } from "../utils/formatCurrency";
import FiveStarRate from "./FiveStarRate";

function Details({ product }) {
  const discount = (+product?.discount / 100) * product?.Price || 0;

  return (
    <>
      <div className="flex flex-col gap-4 pb-6">
        <div className="flex items-center gap-2.5">
          <FiveStarRate product={product} />
          <p className="font-inter text-xs">{product?.Rate} Reviews</p>
        </div>
        <p className="text-[40px] font-medium">
          {product?.title?.split(" ").slice(0, 3)?.join(" ")}
        </p>
        <p className="max-h-[78px] overflow-hidden text-ellipsis font-inter leading-[26px] text-black-shade-4">
          {product?.description || product?.about_item}
        </p>
        <div className="flex items-center gap-3 font-medium">
          <p className="text-[28px]">
            {" "}
            {formatCurrency(Math.round(product?.Price - discount))}
          </p>
          <p className="text-xl text-black-shade-4 line-through">
            {formatCurrency(product?.Price)}
          </p>
        </div>
      </div>
    </>
  );
}

export default Details;
