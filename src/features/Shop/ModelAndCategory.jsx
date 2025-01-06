/* eslint-disable react/prop-types */
function ModelAndCategory({ product }) {
  return (
    <div className="flex flex-col gap-2 py-6 font-inter text-xs">
      <div className="flex items-center gap-[58px]">
        <p className="w-[65px] text-black-shade-4">SKU</p>
        <p>{product?.item_model_number}</p>
      </div>
      <div className="flex items-center gap-[58px]">
        <p className="w-[65px] text-black-shade-4">CATEGORY</p>
        <p>{product?.categories?.slice(0, 2)?.join(", ")}</p>
      </div>
    </div>
  );
}

export default ModelAndCategory;
