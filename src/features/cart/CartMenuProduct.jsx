import { useDispatch } from "react-redux";
import {
  addToCart,
  deleteItemFromCart,
  removeFromCart,
} from "../../Redux/cartSlice";
import { RxCross2 } from "react-icons/rx";

/* eslint-disable react/prop-types */
function CartMenuProduct({ product, withDeleteBtn, className }) {
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
    <div
      className={`flex items-center border-b border-white-shade-1 font-inter max-sm:pb-4 ${className}`}
    >
      <div className="flex h-[96px] w-full items-start gap-4 max-sm:h-[88px]">
        <div className="flex h-full min-w-20 max-w-20 items-center bg-white-shade-2">
          <img className="mix-blend-darken" src={product?.primary_image} />
        </div>
        <div className="relative flex w-full flex-col gap-2">
          <span className="flex w-full items-start justify-between text-sm font-semibold">
            <p>{product?.title?.split(" ").slice(0, 2)?.join(" ")}</p>
            <div className="absolute right-0 top-0 flex flex-col items-end gap-2">
              <p>${product?.Price}</p>
              {withDeleteBtn && (
                <RxCross2
                  className="h-6 w-6 cursor-pointer text-black-shade-4"
                  onClick={handleClick}
                />
              )}
            </div>
          </span>
          <p className="text-xs text-black-shade-4">
            color: {product?.colors?.at(0)}
          </p>
          <div className="flex h-8 w-20 items-center justify-between rounded-[4px] border border-black-shade-4 px-2 py-2.5 text-[20px] font-light">
            <button onClick={handleDecrease}>-</button>
            <span className="text-xs font-semibold">{product.quantity}</span>
            <button onClick={handleIncrease}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartMenuProduct;
