/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import SlideInFromLeftAnimation from "../../ui/SlideInFromLeftAnimation";
import SlideInFromRightAnimation from "../../ui/SlideInFromRightAnimation";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { motion } from "motion/react";
import { removeFromCart } from "../../Redux/cartSlice";
import { useAddCart } from "../cart/useAddCart";
import { useAddWhishlist } from "../whishlist/useAddWhishlist";

function AddToCartOrWishList({ product }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);
  const { handleClickAddCart } = useAddCart(product);
  const quantity = cart?.filter((el) => el?.id == product?.id)[0]?.quantity;
  const { wishlist } = useSelector((store) => store.wishlist);
  const { handleClickAddWishlist } = useAddWhishlist(product);
  const isInwishlist = wishlist.map((el) => el.id).includes(product?.id);

  function handleDecrease() {
    dispatch(removeFromCart({ ...product, quantity }));
  }

  function handleIncrease() {
    handleClickAddCart();
  }

  return (
    <div className="flex flex-col gap-4 border-b border-white-shade-1 py-8 font-inter max-xl:py-6">
      <div className="flex items-center gap-6 max-xl:gap-2">
        <SlideInFromLeftAnimation
          className="flex h-[52px] w-[127px] items-center justify-between rounded-lg bg-[#f5f5f5] px-4 py-3 text-[20px] font-light max-sm:h-8 max-sm:rounded-[4px] max-sm:py-1 max-sm:text-sm"
          delay={0.3}
        >
          <div className="flex w-full items-center justify-between">
            <button onClick={handleDecrease}>-</button>
            <span className="text-base font-semibold">{quantity || 0}</span>
            <button onClick={handleIncrease}>+</button>
          </div>
        </SlideInFromLeftAnimation>

        <SlideInFromRightAnimation
          className="flex h-[52px] w-[357px] cursor-pointer items-center justify-center rounded-lg border border-black-shade-1 px-10 py-2.5 font-inter text-lg font-medium text-black-shade-1 max-sm:h-8 max-sm:rounded-[4px] max-sm:py-1 max-sm:text-sm"
          delay={0.3}
          onClick={handleClickAddWishlist}
        >
          <button className="flex items-center gap-2">
            {isInwishlist ? (
              <GoHeartFill className="h-6 w-6 text-red-500 max-sm:h-4 max-sm:w-4" />
            ) : (
              <GoHeart className="h-6 w-6 max-sm:h-4 max-sm:w-4" />
            )}
            <p>Wishlist</p>
          </button>
        </SlideInFromRightAnimation>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: [0, 1.05, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Button
          onClick={handleClickAddCart}
          className="h-[52px] max-sm:h-8 max-sm:rounded-[4px] max-sm:py-1 max-sm:text-sm"
        >
          Add To Cart
        </Button>
      </motion.div>
    </div>
  );
}

export default AddToCartOrWishList;
