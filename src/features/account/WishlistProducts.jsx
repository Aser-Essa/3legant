import { useSelector } from "react-redux";
import WishlistProduct from "./WishlistProduct";

function WhishlistProducts() {
  const { wishlist } = useSelector((store) => store.wishlist);

  return (
    <>
      {wishlist?.map((product, idx) => (
        <WishlistProduct product={product} key={`${product?.id} ${idx}`} />
      ))}
    </>
  );
}

export default WhishlistProducts;
