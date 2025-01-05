import { useEffect, useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { TbBrandYoutube } from "react-icons/tb";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { useUser } from "../hooks/useUser";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

function FlyMenu() {
  const { cart } = useSelector((store) => store.cart);
  const { wishlist } = useSelector((store) => store.wishlist);

  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();
  const { key } = useLocation();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  function handleOpen() {
    setIsOpen(true);
    document.body.style.overflowY = "hidden";
  }

  function handleClose() {
    setIsOpen(false);
    document.body.style.overflowY = "auto";
  }

  function handleClickMyAccount() {
    navigate("/myAccount");
    handleClose();
  }

  function handleClickSignIn() {
    navigate("/signin");
    handleClose();
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    if (swipeDistance > 8000) {
      handleClose();
    }
  };

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflowY = "auto";
  }, [key, setIsOpen]);

  return (
    <>
      <FaBars className="hidden w-6 max-sm:inline-block" onClick={handleOpen} />

      {createPortal(
        <>
          <div
            className="flying-menu fixed top-0 z-[1000000] w-[92%] bg-[#00000033] transition-all"
            style={{ left: isOpen ? 0 : "-100%" }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="absolute left-0 top-0 h-full w-full bg-white p-6">
              <div className="flex items-center justify-between">
                <Link to={"/"}>
                  <h1 className="text-2xl font-medium max-sm:text-base">
                    3legant.
                  </h1>
                </Link>
                <div className="relative z-[100000]" onClick={handleClose}>
                  <IoCloseOutline className="h-6 w-6 text-black-shade-4" />
                </div>
              </div>
              <div className="my-4 flex h-[46px] items-center gap-2 rounded-md border border-black-shade-4 px-4">
                <img src="/search 02.png" className="h-6 w-6 cursor-pointer" />
                <input
                  type="text"
                  placeholder="Search"
                  className="h-full w-full placeholder:font-inter placeholder:text-sm placeholder:text-black-shade-4 focus:outline-none"
                />
              </div>
              <ul className="space-y-4 font-inter text-sm font-medium">
                <li className="h-10 border-b border-white-shade-1 pb-2">
                  <Link to="/">
                    <p>Home</p>
                  </Link>
                </li>
                <li className="flex h-10 justify-between border-b border-white-shade-1 pb-2">
                  <Link to="/shop">
                    <p>Shop</p>
                  </Link>
                </li>
                <li className="flex h-10 justify-between border-b border-white-shade-1 pb-2">
                  <Link to="/blog">
                    <p>Blog</p>
                  </Link>
                </li>
                <li className="h-10 border-b border-white-shade-1 pb-2">
                  <Link to="/contact-us">
                    <p>Contact Us</p>
                  </Link>
                </li>
              </ul>

              <div className="absolute bottom-4 mt-auto w-[calc(100%-48px)]">
                <NavLink
                  to={"/cart"}
                  className="flex h-10 items-center justify-between border-b border-white-shade-1 py-2"
                >
                  <p className="text-lg font-medium text-black-shade-4">Cart</p>
                  <div className="flex cursor-pointer items-center gap-[6px]">
                    <img src="/shopping bag.png" className="h-6 w-6" />
                    <span className="flex h-5 w-5 items-center justify-center rounded-[50%] bg-black font-inter text-xs font-bold text-white">
                      {cart?.length}
                    </span>
                  </div>
                </NavLink>
                <NavLink
                  to={"/wishlist"}
                  className="flex h-10 items-center justify-between border-b border-white-shade-1 py-2"
                >
                  <p className="text-lg font-medium text-black-shade-4">
                    Wishlist
                  </p>
                  <div className="flex cursor-pointer items-center gap-[6px]">
                    <GoHeart className="h-6 w-6" />
                    <span className="flex h-5 w-5 items-center justify-center rounded-[50%] bg-black font-inter text-xs font-bold text-white">
                      {wishlist?.length}
                    </span>
                  </div>
                </NavLink>
                {isAuthenticated ? (
                  <button
                    onClick={handleClickMyAccount}
                    className="my-5 h-[52px] w-full rounded-[10px] bg-black-shade-1 text-lg font-medium text-white"
                  >
                    My Account
                  </button>
                ) : (
                  <button
                    onClick={handleClickSignIn}
                    className="my-5 h-[52px] w-full rounded-[10px] bg-black-shade-1 text-lg font-medium text-white"
                  >
                    Sign In
                  </button>
                )}
                <div className="flex items-center gap-6 text-black-shade-1">
                  <Link
                    to={"https://www.instagram.com/asser_essa_/"}
                    target="_blank"
                  >
                    <FiInstagram className="h-6 min-w-6" />
                  </Link>
                  <Link
                    to={
                      "https://www.facebook.com/profile.php?id=100004553357437"
                    }
                    target="_blank"
                  >
                    <FiFacebook className="h-6 min-w-6" />
                  </Link>
                  <TbBrandYoutube className="h-6 min-w-6" />
                </div>
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

export default FlyMenu;
