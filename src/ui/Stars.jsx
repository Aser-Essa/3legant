import { IoIosStar } from "react-icons/io";
import { motion } from "motion/react";

// eslint-disable-next-line react/prop-types
function Stars({ rate }) {
  const stars = Array.from({ length: rate }, (num) => num++);
  return (
    <div className="flex items-center gap-0.5 text-black-shade-3">
      {stars.map((star, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5, delay: `0.${idx}` }}
          viewport={{ once: true }}
        >
          <IoIosStar key={`${star} ${idx}`} />
        </motion.span>
      ))}
    </div>
  );
}

export default Stars;
