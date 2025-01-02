import { motion } from "motion/react";

// eslint-disable-next-line react/prop-types
function TextAnimation({ text, delay = 0 }) {
  // eslint-disable-next-line react/prop-types
  const textArray = text?.split("");
  console.log(textArray);
  console.log(textArray.join(""));
  return (
    <div className="flex">
      {textArray.map((el, idx) => {
        if (el == " ") return <p key={el}>&nbsp;</p>;
        else {
          return (
            <motion.p
              key={el}
              initial={{ opacity: 0, translateX: "-25%" }}
              whileInView={{ opacity: 1, translateX: "0" }}
              transition={{ duration: 0.4, delay: `${idx / 20 + delay}` }}
              viewport={{ once: true }}
            >
              {el}
            </motion.p>
          );
        }
      })}
    </div>
  );
}

export default TextAnimation;
