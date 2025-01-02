import SectionContainer from "../../ui/SectionContainer";
import Counter from "../../ui/Counter";
import Details from "../../ui/Details";
import MeasurmentAndColor from "../../ui/MeasurmentAndColor";
import {
  addToCart,
  deleteItemFromCart,
  removeFromCart,
} from "../../Redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { GoHeart } from "react-icons/go";
import Button from "../../ui/Button";
import ProductImages from "./ProductImages";
import PageNavigation from "../../ui/PageNavigation";
import { Link, useSearchParams } from "react-router-dom";
import PageNavigationLink from "../../ui/PageNavigationLink";
import useProduct from "./useProduct";
import {
  addToWishlist,
  deleteItemFromWishlist,
} from "../../Redux/wishlistSlice";
import Spinner from "../../ui/Spinner";
import { motion } from "motion/react";
import SlideInFromLeftAnimation from "../../ui/SlideInFromLeftAnimation";
import SlideInFromRightAnimation from "../../ui/SlideInFromRightAnimation";

function ProductDetails() {
  const [searchParams] = useSearchParams();
  const category =
    searchParams?.get("category")?.replace("_", " ") || "All Rooms";

  const { data: product, isLoading } = useProduct();
  const { cart } = useSelector((store) => store.cart);
  const { wishlist } = useSelector((store) => store.wishlist);
  const quantity = cart?.filter((el) => el?.id == product?.id)[0]?.quantity;
  const dispatch = useDispatch();

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

  function handleDecrease() {
    dispatch(removeFromCart({ ...product, quantity }));
  }

  function handleIncrease() {
    handleClickAddCart();
  }

  if (isLoading) return <Spinner />;

  return (
    <SectionContainer>
      <PageNavigation className={"py-4"}>
        <PageNavigationLink title={"Shop"} link={"/shop"} />
        <PageNavigationLink
          title={category}
          link={`/shop?category=${category?.replace(" ", "_")}`}
        />
        <Link className="flex items-center gap-1 truncate font-inter text-sm font-medium text-black">
          <motion.p
            className="truncate"
            initial={{ opacity: 0, translateX: 0 }}
            animate={{ opacity: 1, translateX: [-100, 5, 0] }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {product?.title?.split(" ")?.slice(0, 8)}
          </motion.p>
        </Link>
      </PageNavigation>
      <div className="flex gap-[63px] max-xl:flex-col max-xl:flex-wrap max-xl:gap-8">
        <ProductImages product={product} />
        <div className="h-full w-[508px] max-xl:w-full">
          <Details product={product} />
          {product?.discount && <Counter />}
          <MeasurmentAndColor product={product} />
          <div className="flex flex-col gap-4 border-b border-white-shade-1 py-8 font-inter max-xl:py-6">
            <div className="flex items-center gap-6 max-xl:gap-2">
              <SlideInFromLeftAnimation delay={0.3}>
                <div className="flex h-[52px] w-[127px] items-center justify-between rounded-lg bg-[#f5f5f5] px-4 py-3 text-[20px] font-light max-sm:h-8 max-sm:rounded-[4px] max-sm:py-1 max-sm:text-sm">
                  <button onClick={handleDecrease}>-</button>
                  <span className="text-base font-semibold">
                    {quantity || 0}
                  </span>
                  <button onClick={handleIncrease}>+</button>
                </div>
              </SlideInFromLeftAnimation>
              <SlideInFromRightAnimation delay={0.3}>
                <button
                  className="flex h-[52px] w-[357px] items-center justify-center gap-2 rounded-lg border border-black-shade-1 px-10 py-2.5 font-inter text-lg font-medium text-black-shade-1 max-sm:h-8 max-sm:rounded-[4px] max-sm:py-1 max-sm:text-sm"
                  onClick={handleClickAddWishlist}
                >
                  <GoHeart className="h-6 w-6 max-sm:h-4 max-sm:w-4" />
                  <p>Wishlist</p>
                </button>
              </SlideInFromRightAnimation>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: [0, 1.08, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                onClick={handleClickAddCart}
                className="h-[52px] max-sm:h-8 max-sm:rounded-[4px] max-sm:py-1 max-sm:text-sm"
              >
                Add To Cart
              </Button>
            </motion.div>
          </div>
          <div className="flex flex-col gap-2 py-6 font-inter text-xs">
            <div className="flex items-center gap-[58px]">
              <p className="w-[65px] text-black-shade-4">SKU</p>
              <p>{product?.item_model_number}</p>
            </div>
            <div className="flex items-center gap-[58px]">
              <p className="w-[65px] text-black-shade-4">CATEGORY</p>
              <p>{product?.categories?.slice(0, 2)?.join(", ")}</p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default ProductDetails;
