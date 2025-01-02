import { useSelector } from "react-redux";
import WishlistProduct from "./WishlistProduct";
import { AnimatePresence } from "motion/react";

function WhishlistProducts() {
  const { wishlist } = useSelector((store) => store.wishlist);

  return (
    <AnimatePresence>
      {wishlist?.map((product, idx) => (
        <WishlistProduct key={`${product?.id}${idx}`} product={product} />
      ))}
    </AnimatePresence>
  );
}

export default WhishlistProducts;
