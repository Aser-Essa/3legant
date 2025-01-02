/* eslint-disable react/prop-types */
import { useState } from "react";
import SlideInFromLeftAnimation from "./SlideInFromLeftAnimation";
import { motion } from "motion/react";

function MeasurmentAndColor({ product }) {
  const [color, setColor] = useState("");

  function handleChange(el) {
    setColor(el?.toUpperCase());
  }

  return (
    <>
      <div className="flex flex-col gap-6 py-6 font-inter">
        <SlideInFromLeftAnimation delay={0.5}>
          <div>
            <p className="font-semibold text-black-shade-4">Measurements</p>
            <p className="mt-2 text-xl">{product?.package_dimensions}</p>
          </div>
        </SlideInFromLeftAnimation>

        <div>
          <div className="font-semibold text-black-shade-4">
            <SlideInFromLeftAnimation delay={0.5}>
              <p>Choose Color</p>
              <p className="mt-2 text-xl font-normal text-black">
                {color || product?.colors?.at(0).toUpperCase()}
              </p>
            </SlideInFromLeftAnimation>
            <div className="mt-2 flex items-center gap-1">
              {product?.colors?.map((el, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: [0, 1.06, 1] }}
                  transition={{ duration: 0.5, delay: `0.${idx + 5}` }}
                  viewport={{ once: true }}
                >
                  <input
                    type="radio"
                    name="colors"
                    key={`${el}${idx}`}
                    style={{ backgroundColor: el }}
                    onChange={() => handleChange(el)}
                    className={`peer relative mt-1 h-8 w-8 opacity-65 ${el == "white" ? "border border-black-shade-4" : ""} shrink-0 cursor-pointer appearance-none rounded-[50%] checked:border-2 checked:border-black-shade-3`}
                  />
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MeasurmentAndColor;
