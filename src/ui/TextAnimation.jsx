import { motion } from "motion/react";

// eslint-disable-next-line react/prop-types
function TextAnimation({ text, delay = 0 }) {
  // eslint-disable-next-line react/prop-types
  const textArray = text?.split("");
  return (
    <div className="flex">
      {textArray.map((el, idx) => {
        if (el == " ")
          return <span key={`${el} ${Math.random()} ${idx}`}>&nbsp;</span>;
        else {
          return (
            <motion.span
              key={`${el} ${Math.random()} ${idx}`}
              initial={{ opacity: 0, translateX: "-25%" }}
              whileInView={{ opacity: 1, translateX: "0" }}
              transition={{ duration: 0.4, delay: `${idx / 20 + delay}` }}
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
