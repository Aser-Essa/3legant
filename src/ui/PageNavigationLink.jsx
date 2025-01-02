import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "motion/react";

// eslint-disable-next-line react/prop-types
function PageNavigationLink({ title, link }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, translateX: 0 }}
        animate={{ opacity: 1, translateX: [-100, 5, 0] }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link to={link} className="flex items-center gap-1">
          <p className="text-nowrap font-inter text-sm font-medium">{title}</p>
          <IoIosArrowForward />
        </Link>
      </motion.div>
    </div>
  );
}

export default PageNavigationLink;
