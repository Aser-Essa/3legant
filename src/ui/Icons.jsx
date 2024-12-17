import { Link } from "react-router-dom";
import CartToggle from "../features/cart/CartToggle";

function Icons() {
  return (
    <div className="flex items-center gap-4">
      <img
        src="/search 02.png"
        className="h-6 w-6 cursor-pointer max-sm:hidden"
      />
      <Link to="/myAccount">
        <img
          src="/user-circle.png"
          className="h-6 w-6 cursor-pointer max-sm:hidden"
        />
      </Link>
      <CartToggle />
    </div>
  );
}

export default Icons;
