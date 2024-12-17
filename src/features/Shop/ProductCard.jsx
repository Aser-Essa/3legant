/* eslint-disable react/prop-types */
import { PiHeartBold } from "react-icons/pi";
import Stars from "../../ui/Stars";
import { formatCurrency } from "../../utils/formatCurrency";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteItemFromCart } from "../../Redux/cartSlice";
import { useRef } from "react";
import {
  addToWishlist,
  deleteItemFromWishlist,
} from "../../Redux/wishlistSlice";

function ProductCard({ product }) {
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
    <div
      onClick={handleClickProduct}
      className="card h-[433px] min-w-[calc(25%-18px)] max-lg:min-w-[calc(33.33%-16px)] max-sm:h-fit max-sm:min-w-full"
    >
      <div
        className={`relative max-h-[349px] min-h-[349px] w-full rounded-sm bg-white-shade-2 p-4 max-sm:h-auto max-sm:min-h-[225px] max-sm:p-[14px] ${gridType == 2 ? "max-sm:max-h-[225px]" : ""}`}
      >
        <div className="flex items-center justify-between">
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
          <div
            className="show-at-hover flex h-8 w-8 items-center justify-center rounded-[50%] bg-white opacity-0 transition-all"
            style={{
              boxShadow: "#0f0f0f1f 0px 8px 16px 0px",
            }}
          >
            <button ref={refAddWishlist} onClick={handleClickAddWishlist}>
              <PiHeartBold className="h-5 w-5 text-black-shade-4" />
            </button>
          </div>
        </div>
        <img
          src={product?.primary_image}
          className="mx-auto mt-[15px] w-[200px] max-sm:mt-0 max-sm:w-[177px]"
          style={{ mixBlendMode: "multiply" }}
        />
        <button
          className="show-at-hover h-[46px] w-full rounded-lg bg-[#141718] text-[#fefefe] opacity-0 transition-all"
          onClick={handleClickAddCart}
          ref={refAddCart}
        >
          Add to cart
        </button>
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
    </div>
  );
}

export default ProductCard;
