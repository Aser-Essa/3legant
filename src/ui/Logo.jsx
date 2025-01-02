import { Link } from "react-router-dom";
import LogoAnimation from "./LogoAnimation";
import { motion } from "motion/react";

// eslint-disable-next-line react/prop-types
function Logo({ className }) {
  return (
    <h1 className={`text-2xl font-medium ${className}`}>
      <Link to={"/"} className="flex">
        <LogoAnimation text="3legant" />
        <motion.p
          initial={{ opacity: 0, translateX: 0 }}
          animate={{ opacity: 1, translateX: [0, 5, 0] }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          .
        </motion.p>
      </Link>
    </h1>
  );
}

export default Logo;
