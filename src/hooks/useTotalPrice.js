import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

export function useTotalPrice() {
  let { cart } = useSelector((store) => store.cart);
  const [subtotalPrice, setSubTotalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [searchParams] = useSearchParams();

  const shipingType = searchParams.get("shiping") || "free_shipping";
  const coupon = searchParams.get("coupon") || false;

  const shipingValue = {
    free_shipping: 0,
    express_shipping: 15,
    pick_up: 0.21,
  };

  useEffect(() => {
    let subTotal = 0;
    cart.forEach((product) => {
      subTotal += product.Price * product.quantity;
    });
    setSubTotalPrice(subTotal);
  }, [cart]);

  useEffect(() => {
    let Total = 0;
    cart.forEach((product) => {
      const discount = (+product?.discount / 100) * product?.Price || 0;
      Total += (product.Price - discount) * product.quantity;
    });
    Total +=
      shipingType != "pick_up"
        ? shipingValue[shipingType]
        : Total * shipingValue[shipingType];
    if (coupon) {
      Total -= 25;
    }

    setTotalPrice(Total);
  }, [cart, shipingType, shipingValue]);

  return [subtotalPrice, totalPrice];
}
