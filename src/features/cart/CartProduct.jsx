/* eslint-disable react/prop-types */
import { RxCross2 } from "react-icons/rx";
import {
  addToCart,
  deleteItemFromCart,
  removeFromCart,
} from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utils/formatCurrency";

function CartProduct({ product }) {
  const dispatch = useDispatch();

  function handleDecrease() {
    dispatch(removeFromCart(product));
  }

  function handleIncrease() {
    dispatch(addToCart(product));
  }

  function handleClick() {
    dispatch(deleteItemFromCart(product?.id));
  }

  return (
    <div className="flex items-center justify-between border-b border-white-shade-1 py-6 font-inter max-sm:pb-4">
      <div className="flex h-[96px] w-fit items-center gap-4 max-sm:h-[88px]">
        <div className="flex h-full min-w-20 max-w-20 items-center bg-white-shade-2">
          <img className="mix-blend-darken" src={product?.primary_image} />
        </div>
        <div className="relative flex w-full flex-col gap-2">
          <span className="flex w-full items-start justify-between text-sm font-semibold">
            <p>{product?.title?.split(" ").slice(0, 2)?.join(" ")}</p>
          </span>
          <p className="text-xs text-black-shade-4">
            color: {product?.colors?.at(0)}
          </p>

          <div
            className="flex cursor-pointer items-center gap-0.5 text-black-shade-4"
            onClick={handleClick}
          >
            <RxCross2 className="h-6 w-6" />
            <p className="text-sm font-semibold">Remove</p>
          </div>
        </div>
      </div>
      <div className="flex w-[322px] items-center justify-between">
        <div className="flex h-8 w-20 items-center justify-between rounded-[4px] border border-black-shade-4 px-2 py-2.5 text-[20px] font-light">
          <button onClick={handleDecrease}>-</button>
          <span className="text-xs font-semibold">{product.quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
        <div className="flex flex-col items-end gap-2 text-lg">
          <p className="w-[58px]">{formatCurrency(product?.Price)}</p>
        </div>
        <div className="flex flex-col items-end gap-2 text-lg font-medium">
          <p className="w-[64px]">
            {formatCurrency(product?.Price * product?.quantity)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
