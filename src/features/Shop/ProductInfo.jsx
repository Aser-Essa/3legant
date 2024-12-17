import useProduct from "./useProduct";

function ProductInfo() {
  const { data: product } = useProduct();

  return (
    <>
      <p className="mb-7 font-inter text-[28px] font-medium">Additional Info</p>
      <div className="mb-7">
        <p className="mb-3 text-[20px] font-medium text-black-shade-4">
          Details
        </p>
        <div className="flex flex-col gap-1.5 text-base font-medium">
          <p>{product?.about_item}</p>
        </div>
      </div>
      <div>
        <p className="my-3 text-[20px] font-medium text-black-shade-4">
          Packaging
        </p>

        <p className="font-medium">{product?.package_dimensions}</p>
      </div>
    </>
  );
}

export default ProductInfo;
