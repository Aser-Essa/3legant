import { motion } from "motion/react";

// eslint-disable-next-line react/prop-types
function LogoAnimation({ text }) {
  const textArray = Array.from(text);
  return (
    <>
      {textArray.map((el, idx) => (
        <motion.p
          key={el}
          initial={{ opacity: 0, translateX: "-25%" }}
          animate={{ opacity: 1, translateX: "0" }}
          transition={{ duration: 0.5, delay: `0.${idx}` }}
        >
          {el}
        </motion.p>
      ))}
    </>
  );
}

export default LogoAnimation;
