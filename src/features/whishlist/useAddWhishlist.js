import { useDispatch, useSelector } from "react-redux";
import { useUser } from "../account/useUser";
import { useNavigate } from "react-router-dom";
import { deleteItemFromCart } from "../../Redux/cartSlice";
import {
  addToWishlist,
  deleteItemFromWishlist,
} from "../../Redux/wishlistSlice";

export function useAddWhishlist(product) {
  const { cart } = useSelector((store) => store.cart);
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { wishlist } = useSelector((store) => store.wishlist);
  const isInwishlist = wishlist.map((el) => el.id).includes(product?.id);

  function handleClickAddWishlist() {
    if (!isAuthenticated) {
      navigate("/signin");
      return;
    }
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

  return { handleClickAddWishlist };
}
