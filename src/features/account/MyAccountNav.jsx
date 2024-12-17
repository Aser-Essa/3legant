import useLogout from "../authentication/useLogout";
import { NavLink, useNavigate } from "react-router-dom";

function MyAccountNav() {
  const navigate = useNavigate();
  const { Logout } = useLogout();

  function handleClick() {
    Logout();
    navigate("/");
  }
  return (
    <>
      <div className="flex w-full flex-col gap-3 text-start font-semibold text-black-shade-4 max-lg:hidden">
        <NavLink to={"/myAccount"} className="account inline-block w-full py-2">
          Account
        </NavLink>
        <NavLink to={"/address"} className="account inline-block w-full py-2">
          Address
        </NavLink>
        <NavLink to={"/orders"} className="account inline-block w-full py-2">
          Orders
        </NavLink>
        <NavLink to={"/wishlist"} className="account inline-block w-full py-2">
          Wishlist
        </NavLink>
        <button
          className="inline-block w-full py-2 text-start"
          onClick={handleClick}
        >
          Log Out
        </button>
      </div>
    </>
  );
}

export default MyAccountNav;
