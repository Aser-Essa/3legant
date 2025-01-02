import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import TextAnimation from "./TextAnimation";
import { motion } from "motion/react";

// eslint-disable-next-line react/prop-types
function ArrowLink({ to, className, children }) {
  return (
    <Link
      to={to}
      className={`flex w-fit items-center gap-1 border-b border-black-shade-1 font-inter font-medium leading-[28px] max-sm:text-sm max-sm:leading-6 ${className}`}
    >
      <TextAnimation text={children} />
      <motion.div
        initial={{ opacity: 0, translateX: "0" }}
        whileInView={{ opacity: 1, translateX: [0, "30%", 0] }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <IoArrowForward />
      </motion.div>
    </Link>
  );
}

export default ArrowLink;
