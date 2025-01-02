import { motion } from "motion/react";

// eslint-disable-next-line react/prop-types
function Service({ title, paragraph, img, delay, direction, className }) {
  return (
    <div className="overflow-hidden max-sm:h-[176px]">
      <motion.div
        className={`bg-white-shade-2 ${className}`}
        initial={{
          opacity: 0,
          translateX: ` ${direction === "left" ? "-100%" : "100%"}`,
        }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.6, delay: delay }}
        viewport={{ once: true }}
      >
        <img src={`/${img}`} className="mb-4 h-12 w-12" />
        <div className="space-y-2">
          <p className="max-lg:text-md font-inter text-[20px] font-medium text-black-shade-1 max-md:text-sm max-sm:font-semibold">
            {title}
          </p>
          <p className="max-sm:w-22 font-inter text-sm text-black-shade-4">
            {paragraph}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Service;
