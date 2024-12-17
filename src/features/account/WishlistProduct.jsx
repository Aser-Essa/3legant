/* eslint-disable react/prop-types */
import { RxCross2 } from "react-icons/rx";
import { formatCurrency } from "../../utils/formatCurrency";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../../Redux/wishlistSlice";
import { addToCart } from "../../Redux/cartSlice";

function WishlistProduct({ product }) {
  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(removeFromWishlist(product));
  }

  function handleAddToCart() {
    dispatch(addToCart(product));
    dispatch(removeFromWishlist(product));
  }

  return (
    <div className="grid h-[120px] grid-cols-[218px_178px_130px] items-center justify-between border-b border-white-shade-1 py-6 font-inter max-sm:block max-sm:h-auto max-sm:space-y-4 max-sm:pb-4">
      <div className="flex items-center gap-2.5 max-sm:h-20">
        <button onClick={handleRemove}>
          <RxCross2 className="min-h-6 min-w-6 text-black-shade-4" />
        </button>
        <div className="flex h-[72px] min-w-[60px] max-w-[60px] items-center bg-white-shade-2">
          <img className="mix-blend-darken" src={product?.primary_image} />
        </div>
        <div className="relative flex w-full flex-col gap-2">
          <span className="flex w-full items-start justify-between text-sm font-semibold">
            <p>{product?.title?.split(" ").slice(0, 2)?.join(" ")}</p>
          </span>
          <p className="text-xs text-black-shade-4">
            color: {product?.colors?.at(0)}
          </p>
          <div className="hidden font-inter text-sm max-sm:block">
            <p>{formatCurrency(product?.Price)}</p>
          </div>
        </div>
      </div>
      <div className="font-inter text-sm max-sm:hidden">
        <p>{formatCurrency(product?.Price)}</p>
      </div>
      <Button
        className="max-h-10 w-[130px] text-nowrap px-6 py-1.5 font-inter"
        onClick={handleAddToCart}
      >
        Add to cart
      </Button>
    </div>
  );
}

export default WishlistProduct;
