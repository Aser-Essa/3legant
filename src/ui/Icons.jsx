import { Link } from "react-router-dom";
import CartToggle from "../features/cart/CartToggle";
import { motion } from "motion/react";

function Icons() {
  return (
    <div className="flex items-center gap-4">
      <motion.img
        src="/search 02.png"
        className="h-6 w-6 cursor-pointer max-sm:hidden"
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        animate={{ opacity: 1, scale: [0, 1.2, 1], rotate: [0, -60, 0] }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
      <Link to="/myAccount">
        <motion.img
          src="/user-circle.png"
          className="h-6 w-6 cursor-pointer max-sm:hidden"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5, delay: 0.45 }}
        />
      </Link>
      <CartToggle />
    </div>
  );
}

export default Icons;
