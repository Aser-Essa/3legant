import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/formatCurrency";
import { createPortal } from "react-dom";
import { useTotalPrice } from "../../hooks/useTotalPrice";
import CartMenuProduct from "./CartMenuProduct";
import Button from "../../ui/Button";
import { useEffect, useRef } from "react";

/* eslint-disable react/prop-types */
function CartMenu({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  let { cart } = useSelector((store) => store.cart);
  const { key } = useLocation();
  const [subtotalPrice, totalPrice] = useTotalPrice();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  function handleClose() {
    setIsOpen(false);
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    if (swipeDistance < 50) {
      handleClose();
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [key, setIsOpen]);

  return (
    <>
      {createPortal(
        <>
          <div
            className="flying-menu fixed top-0 z-[100000] w-[413px] bg-white px-6 py-8 pr-3 transition-all max-sm:w-[92%] max-sm:px-4 max-sm:py-5 max-sm:pr-2"
            style={{
              right: isOpen ? 0 : "-100%",
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClickCapture={() => setIsOpen(true)}
          >
            <p className="mb-3 text-[28px] font-medium max-sm:mb-4">Cart</p>
            <div className="flex h-[calc(100%-55px)] flex-col justify-between">
              <div className="scroll-cart relative h-[395px] overflow-y-auto pr-3 max-sm:h-[350px] max-sm:gap-4 max-sm:pr-3">
                {cart?.length > 0 ? (
                  cart.map((product) => {
                    {
                      return (
                        <CartMenuProduct
                          product={product}
                          key={product?.id}
                          className={"py-5"}
                          withDeleteBtn={true}
                        />
                      );
                    }
                  })
                ) : (
                  <p className="absolute left-[50%] top-[50%] w-fit translate-x-[-50%] translate-y-[-50%] text-nowrap font-inter text-[34px] font-semibold text-[#B1B5C3]">
                    No Products In Cart
                  </p>
                )}
              </div>
              <div className="h-[210px] pr-3">
                <div className="flex h-[52px] items-center justify-between border-b border-white-shade-1">
                  <p>Subtotal</p>
                  <p className="font-semibold">
                    {formatCurrency(subtotalPrice)}
                  </p>
                </div>
                <div className="mb-4 flex h-[52px] items-center justify-between text-xl font-medium">
                  <p>Total</p>
                  <p>{formatCurrency(totalPrice)}</p>
                </div>
                <Button onClick={() => navigate("/check-out")}>Checkout</Button>
                <Link
                  to={"/cart"}
                  className="mx-auto mt-4 block w-fit border-b border-black text-sm font-semibold"
                >
                  View Cart
                </Link>
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 right-0 top-0 z-[10000] bg-[#00000052]"
            style={{
              display: isOpen ? "block" : "none",
            }}
            onClick={handleClose}
          ></div>
        </>,
        document.body,
      )}
    </>
  );
}

export default CartMenu;
