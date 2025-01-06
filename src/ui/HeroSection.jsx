/* eslint-disable react/prop-types */
import PageNavigation from "./PageNavigation";
import { motion } from "motion/react";
import PageNavigationLink from "./PageNavigationLink";

function HeroSection({ title, paragraph, img, link }) {
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
          <PageNavigationLink
            title={link[0]?.toUpperCase() + link?.slice(1)}
            link={`/${link}`}
            className="font-inter text-sm font-medium"
            delay={0.4}
          />
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
