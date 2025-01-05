/* eslint-disable react/prop-types */
import { motion } from "motion/react";

function SlideInFromLeftAnimation({
  className,
  children,
  duration = 0.5,
  delay = 0,
}) {
  return (
    <div className={`min-h-fit overflow-hidden ${className}`}>
      <motion.div
        className="w-full"
        initial={{ opacity: 0, translateX: "-90%" }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: duration, delay: delay }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default SlideInFromLeftAnimation;
