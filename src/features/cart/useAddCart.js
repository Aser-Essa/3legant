import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromWishlist } from "../../Redux/wishlistSlice";
import { addToCart } from "../../Redux/cartSlice";

export function useAddCart(product) {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((store) => store.wishlist);

  function handleClickAddCart() {
    const isInWishlist = wishlist?.map((el) => el.id)?.includes(product?.id);
    if (isInWishlist) {
      dispatch(deleteItemFromWishlist(product?.id));
    }
    dispatch(addToCart(product));
  }

  return { handleClickAddCart };
}
