/* eslint-disable react/prop-types */
import { motion } from "motion/react";

function TextAnimation({ text, delay = 0 }) {
  const textArray = text?.split("");
  return (
    <div className="flex">
      {textArray.map((el, idx) => {
        if (el == " ")
          return <span key={`${el} ${Math.random()} ${idx}`}>&nbsp;</span>;
        else {
          return (
            <motion.span
              key={`${el} ${idx}`}
              initial={{ opacity: 0, translateX: "-25%" }}
              whileInView={{ opacity: 1, translateX: "0" }}
              transition={{ duration: 0.4, delay: `${idx / 30 + delay}` }}
              viewport={{ once: true }}
            >
              {el}
            </motion.span>
          );
        }
      })}
    </div>
  );
}

export default TextAnimation;
