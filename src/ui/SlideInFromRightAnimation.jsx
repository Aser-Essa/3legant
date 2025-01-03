/* eslint-disable react/prop-types */
import { motion } from "motion/react";

function SlideInFromRightAnimation({
  className,
  children,
  duration = 0.5,
  delay = 0,
  onClick,
}) {
  return (
    <div className={`min-h-fit overflow-hidden ${className}`} onClick={onClick}>
      <motion.div
        initial={{ opacity: 0, translateX: "100%" }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: duration, delay: delay }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default SlideInFromRightAnimation;
