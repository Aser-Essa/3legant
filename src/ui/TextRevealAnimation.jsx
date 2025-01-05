import { motion } from "motion/react";

// eslint-disable-next-line react/prop-types
function TextRevealAnimation({ color, children, delay = 0.4 }) {
  return (
    <motion.div
      className="relative overflow-hidden text-nowrap"
      initial={{ opacity: 0, width: 0 }}
      whileInView={{ opacity: 1, width: "100%" }}
      transition={{ duration: 1.5, delay: delay }}
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute h-full w-[100%]"
        style={{
          backgroundImage: `linear-gradient(90deg, transparent 85%, ${color})`,
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 1.9 }}
      ></motion.div>
      {children}
    </motion.div>
  );
}

export default TextRevealAnimation;
