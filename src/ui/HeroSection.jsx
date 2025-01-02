import { NavLink } from "react-router-dom";
import PageNavigation from "./PageNavigation";
import { motion } from "motion/react";

// eslint-disable-next-line react/prop-types
function HeroSection({ title, paragraph, img }) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <img src={img} className="h-[392px] w-full" />
      <div className="absolute left-[50%] top-[50%] flex w-full translate-x-[-50%] translate-y-[-50%] flex-col items-center space-y-6 text-center text-black-shade-1 max-sm:space-y-4">
        <PageNavigation>
          <div className="overflow-hidden px-4">
            <motion.div
              initial={{ opacity: 0, translateX: 0 }}
              animate={{ opacity: 1, translateX: [-100, 5, 0] }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <NavLink className="font-inter text-sm font-medium">Shop</NavLink>
            </motion.div>
          </div>
        </PageNavigation>
        <p className="text-[54px] font-medium leading-[58px] max-sm:text-[40px]">
          {title}
        </p>
        <p className="font-inter text-lg leading-[30px] max-sm:text-base">
          {paragraph}
        </p>
      </div>
    </motion.div>
  );
}

export default HeroSection;
