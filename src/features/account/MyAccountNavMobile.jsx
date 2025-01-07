import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useLogout from "../authentication/useLogout";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";

function MyAccountNavMobile() {
  const [isOpen, setIsOpen] = useState();
  let type = window.location.href.split("/")[3];

  const navigate = useNavigate();
  const { Logout } = useLogout();

  type = type === "myAccount" ? "My Account" : type;
  type = type?.at(0)?.toLocaleUpperCase() + type?.slice(1);

  function handleClick() {
    Logout();
    navigate("/");
  }

  function handleCloseMenu() {
    setIsOpen(false);
  }

  return (
    <div>
      <div
        className="mb-2 mt-0.5 hidden h-12 w-[262px] cursor-pointer items-center justify-between rounded-lg border-2 border-black-shade-4 bg-white py-2 pl-4 pr-4 font-semibold leading-[26px] text-black-shade-1 outline-none max-xl:w-[180px] max-lg:flex max-lg:w-[100%]"
        onClick={() => setIsOpen((open) => !open)}
      >
        <p className="text-nowrap">{type}</p>
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className={`absolute z-50 w-[100%] space-y-[10px] overflow-hidden rounded-xl border border-white-shade-2 bg-white p-2 font-inter text-black-shade-4 max-lg:relative`}
            initial={{ height: 0 }}
            animate={{ height: "fit-content" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.35 }}
          >
            <NavLink
              to={"/myAccount"}
              className="account inline-block w-full py-2"
              onClick={handleCloseMenu}
            >
              Account
            </NavLink>
            <NavLink
              to={"/address"}
              className="account inline-block w-full py-2"
              onClick={handleCloseMenu}
            >
              Address
            </NavLink>
            <NavLink
              to={"/orders"}
              className="account inline-block w-full py-2"
              onClick={handleCloseMenu}
            >
              Orders
            </NavLink>
            <NavLink
              to={"/wishlist"}
              className="account inline-block w-full py-2"
              onClick={handleCloseMenu}
            >
              Wishlist
            </NavLink>
            <button
              className="inline-block w-full py-2 text-start"
              onClick={handleClick}
            >
              Log Out
            </button>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MyAccountNavMobile;
