/* eslint-disable react/prop-types */
function OrderProducts({ cart }) {
  return (
    <>
      <div className="relative flex max-w-[368px] flex-wrap items-end justify-center gap-10 max-sm:gap-x-0 max-sm:gap-y-3">
        {cart?.map((product, idx) => {
          return (
            <div
              className="relative flex h-[112px] w-[96px] items-end"
              key={product}
            >
              <div className="flex h-[96px] min-w-20 max-w-20 items-center bg-white-shade-2">
                <img
                  className="mix-blend-darken"
                  src={product?.primary_image}
                />
              </div>
              <span className="absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-[50%] bg-black font-inter text-xs font-bold text-white">
                {idx + 1}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default OrderProducts;
