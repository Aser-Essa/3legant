/* eslint-disable react/prop-types */
import { PiHeartBold } from "react-icons/pi";
import { GoHeartFill } from "react-icons/go";
import Stars from "../../ui/Stars";
import { formatCurrency } from "../../utils/formatCurrency";
import { GoHeart } from "react-icons/go";
import { addToCart, deleteItemFromCart } from "../../Redux/cartSlice";
import {
  addToWishlist,
  deleteItemFromWishlist,
} from "../../Redux/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRef } from "react";

function DetaildProductCard({ product, gridType }) {
  const [searchParams] = useSearchParams();
  const category =
    searchParams?.get("category")?.replace("_", " ") || "All Rooms";
  const refAddCart = useRef();
  const refAddWishlist = useRef();
  const navigate = useNavigate();
  const isGrid2 = gridType == 2;
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);
  const { wishlist } = useSelector((store) => store.wishlist);
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
    <>
      <div
        className={`flex h-[349px] min-w-[${isGrid2 ? "calc(25%-18px)" : "100%"}] max-sm:h-fit max-sm:min-w-full`}
        onClick={handleClickProduct}
      >
        <div
          className={`relative h-[349px] ${isGrid2 ? "w-[266px]" : "min-w-[280px]"} rounded-sm bg-white-shade-2 p-4 max-sm:h-[308px] max-sm:p-[14px]`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="mb-2 h-6 w-[67px] rounded-[4px] bg-white text-center font-inter font-bold text-black-shade-1">
                New
              </p>
              <p className="h-6 w-[67px] rounded-[4px] bg-[#38CB89] text-center font-inter font-bold text-[#fefefe]">
                -50%
              </p>
            </div>
            <div
              className="show-at-hover flex h-8 w-8 items-center justify-center rounded-[50%] bg-white opacity-0 transition-all"
              style={{
                boxShadow: "#0f0f0f1f 0px 8px 16px 0px",
              }}
            >
              <PiHeartBold className="h-5 w-5 text-black-shade-4" />
            </div>
          </div>
          <img
            src={product?.primary_image}
            className={`mx-auto mt-[15px] w-[200px] min-w-[200px] max-sm:mt-0 max-sm:w-[177px]`}
            style={{ mixBlendMode: "multiply" }}
          />
        </div>
        <div
          className={`mt-3 w-full max-w-[702px] p-6 font-inter font-semibold max-xl:w-full max-sm:py-0`}
        >
          <Stars rate={product?.Rate} />
          <div className="my-4">
            <p>{product?.title?.split(" ").slice(0, 3)?.join(" ")}</p>
            <p className="mt-1 text-sm">{formatCurrency(product?.Price)}</p>
          </div>
          <div
            className={`h-[82px] ${isGrid2 ? "w-[230px]" : "w-full"} overflow-hidden text-ellipsis font-inter text-sm font-normal text-black-shade-4`}
          >
            {product?.description ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eius tenetur illo magnam accusamus sint. Doloribus enim eligendi debitis exercitationem! Consequuntur omnis praesentium officia alias nemo adipisci, fugiat itaque suscipit!"}
          </div>
          <button
            className="mt-6 h-[46px] w-full rounded-lg bg-[#141718] font-medium text-[#fefefe] transition-all"
            onClick={handleClickAddCart}
            ref={refAddCart}
          >
            Add to cart
          </button>
          <button
            className="mx-auto mt-2 flex h-8 w-fit cursor-pointer items-center gap-1 text-sm font-medium"
            onClick={handleClickAddWishlist}
            ref={refAddWishlist}
          >
            {isInwishlist ? (
              <GoHeartFill className="h-5 w-5 text-red-500" />
            ) : (
              <GoHeart className="h-5 w-5" />
            )}
            <p>Wishlist</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default DetaildProductCard;
