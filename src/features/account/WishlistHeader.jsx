import { useSelector } from "react-redux";

function WishlistHeader() {
  const { wishlist } = useSelector((store) => store.wishlist);

  if (wishlist?.length <= 0)
    return (
      <p className="absolute left-[50%] top-[50%] w-fit translate-x-[-50%] translate-y-[-50%] text-nowrap font-inter text-[44px] font-semibold text-[#B1B5C3] max-sm:relative max-sm:top-0 max-sm:translate-y-0 max-sm:text-wrap">
        No Products In Wishlist
      </p>
    );

  return (
    <>
      <div className="mt-10 grid h-[30px] w-full grid-cols-[218px_178px_130px] justify-between border-b border-white-shade-1 text-sm text-black-shade-4">
        <p className="pl-8">Product</p>
        <p className="max-sm:hidden">Price</p>
        <p className="max-sm:hidden">Action</p>
      </div>
    </>
  );
}

export default WishlistHeader;
