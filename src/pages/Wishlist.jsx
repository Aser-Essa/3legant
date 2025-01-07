import WishlistProducts from "../features/whishlist/WishlistProducts";
import WishlistHeader from "../features/whishlist/WishlistHeader";
import TextRevealAnimation from "../ui/TextRevealAnimation";

function Wishlist() {
  return (
    <div className="relative min-h-[400px] w-full px-[72px] font-inter max-xl:px-[32px] max-lg:pt-10 max-md:px-0 max-sm:px-0">
      <TextRevealAnimation delay={0}>
        <p className="text-xl font-semibold">Your Wishlist</p>
      </TextRevealAnimation>
      <WishlistHeader />
      <WishlistProducts />
    </div>
  );
}

export default Wishlist;
