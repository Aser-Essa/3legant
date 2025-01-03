/* eslint-disable react/prop-types */
import { PiHeartBold } from "react-icons/pi";
import { PiHeartFill } from "react-icons/pi";
import Stars from "../../ui/Stars";
import { formatCurrency } from "../../utils/formatCurrency";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteItemFromCart } from "../../Redux/cartSlice";
import { useRef, useState } from "react";
import {
  addToWishlist,
  deleteItemFromWishlist,
} from "../../Redux/wishlistSlice";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";

function ProductCard({ product, delay, animation }) {
  const [searchParams] = useSearchParams();
  const gridType = searchParams.get("grid");
  const category = searchParams?.get("category") || "All Rooms";
  const { cart } = useSelector((store) => store.cart);
  const { wishlist } = useSelector((store) => store.wishlist);
  const refAddCart = useRef();
  const refAddWishlist = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isNew = new Date(product?.Date)?.getTime() > new Date("2024-6-01");
  const [isHovered, setIsHovered] = useState(false);
  const isInwishlist = wishlist.map((el) => el.id).includes(product.id);

  function handleClickAddCart() {
    const isInWishlist = wishlist?.map((el) => el.id)?.includes(product?.id);
    if (isInWishlist) {
      dispatch(deleteItemFromWishlist(product?.id));
    }
    dispatch(addToCart(product));
  }

  function handleClickAddWishlist() {
    const isInCart = cart?.map((el) => el.id)?.includes(product?.id);
    if (isInCart) {
      dispatch(deleteItemFromCart(product?.id));
    }
    if (isInwishlist) {
      dispatch(deleteItemFromWishlist(product?.id));
      return;
    }
    dispatch(addToWishlist(product));
  }

  function handleClickProduct(e) {
    if (
      e.target.closest("button") !== refAddCart.current &&
      e.target.closest("button") !== refAddWishlist.current
    ) {
      navigate(
        `/products/${product?.id}?category=${category?.replace(" ", "_")}`,
      );
    }
  }

  return (
    <AnimatePresence initial={animation}>
      <motion.div
        onClick={handleClickProduct}
        className="card h-[433px] min-w-[calc(25%-18px)] cursor-pointer max-lg:min-w-[calc(33.33%-16px)] max-sm:h-fit max-sm:min-w-full"
        initial={{ opacity: 0, translateY: "70%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.55, delay: delay / 35 }}
        viewport={{ once: true, amount: 0.1 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div
          className={`relative max-h-[349px] min-h-[349px] w-full rounded-sm bg-white-shade-2 p-4 max-sm:h-auto max-sm:min-h-[225px] max-sm:p-[14px] ${gridType == 2 ? "max-sm:max-h-[225px]" : ""}`}
        >
          <div className="flex justify-between">
            <div>
              {isNew && (
                <p className="mb-2 h-6 w-[67px] rounded-[4px] bg-white text-center font-inter font-bold text-black-shade-1">
                  New
                </p>
              )}
              {product?.discount && (
                <p className="h-6 w-[67px] rounded-[4px] bg-[#38CB89] text-center font-inter font-bold text-[#fefefe]">
                  -{product?.discount}%
                </p>
              )}
            </div>
            <motion.div
              className="flex h-8 w-8 items-center justify-center rounded-[50%] bg-white opacity-0 transition-all"
              style={{
                boxShadow: "#0f0f0f1f 0px 8px 16px 0px",
              }}
              initial={{ opacity: 0 }}
              animate={isHovered ? { opacity: 1 } : {}}
              transition={{ duration: 0.3 }}
            >
              {isInwishlist ? (
                <button ref={refAddWishlist} onClick={handleClickAddWishlist}>
                  <PiHeartFill className="h-5 w-5 text-red-500" />
                </button>
              ) : (
                <button ref={refAddWishlist} onClick={handleClickAddWishlist}>
                  <PiHeartBold className="h-5 w-5 text-black-shade-4" />
                </button>
              )}
            </motion.div>
          </div>
          <img
            src={product?.primary_image}
            className="mx-auto mt-[15px] w-[200px] max-sm:mt-0 max-sm:w-[177px]"
            style={{ mixBlendMode: "multiply" }}
          />
          <motion.button
            className="show-at-hover h-[46px] w-full rounded-lg bg-[#141718] text-[#fefefe] opacity-0 transition-all"
            onClick={handleClickAddCart}
            ref={refAddCart}
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : {}}
            transition={{ duration: 0.3 }}
          >
            Add to cart
          </motion.button>
        </div>
        <div className="mt-3 font-inter font-semibold max-sm:h-[66px]">
          <Stars rate={product?.Rate} />
          <p className="mt-1 overflow-hidden text-ellipsis max-sm:text-nowrap max-sm:text-sm">
            {product?.title?.split(" ").slice(0, 2)?.join(" ")}
          </p>
          <p className="mt-1 text-sm max-sm:text-xs">
            {formatCurrency(product?.Price)}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProductCard;
