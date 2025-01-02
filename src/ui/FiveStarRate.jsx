/* eslint-disable react/prop-types */
import { MdOutlineStarBorder } from "react-icons/md";
import Stars from "./Stars";
import { motion } from "motion/react";

function FiveStarRate({ product }) {
  const emptyStars = Array.from({ length: 5 - product?.Rate }, (num) => num++);

  return (
    <div className="flex items-center">
      <Stars rate={product?.Rate}></Stars>
      <div className="flex items-center gap-0.5 text-black-shade-3">
        {emptyStars.map((el, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: [0, 1.2, 1] }}
            transition={{ duration: 0.5, delay: `0.${idx + product?.Rate}` }}
            viewport={{ once: true }}
          >
            <MdOutlineStarBorder key={el} className="text-black-shade-4" />
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default FiveStarRate;
