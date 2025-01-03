import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import ArrowLink from "../../ui/ArrowLink";
import { AnimatePresence } from "motion/react";

/* eslint-disable react/prop-types */
function BlogCard({ article, delay, animation, ArrowOrDate }) {
  return (
    <AnimatePresence initial={animation}>
      <motion.div
        initial={{ opacity: 0, translateY: "70%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.6, delay: delay / 35 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <NavLink
          to={`/blogs/${article?.id}`}
          className="flex h-full w-full flex-col"
        >
          <div className="h-full w-full space-y-6 overflow-hidden">
            <img
              src={article?.images?.at(1)}
              className="h-[325px] w-full scale-y-150"
            />
          </div>
          <p className="mb-2 mt-6 max-h-[58px] min-h-[58px] overflow-hidden font-poppins text-xl font-medium leading-[28px] max-lg:text-start max-lg:text-sm max-sm:mt-4 max-sm:max-h-fit max-sm:min-h-fit max-sm:font-semibold">
            {article?.title}
          </p>
          {ArrowOrDate === "arrow" ? (
            <span>
              <ArrowLink to={`/blogs/${article?.id}`}>Read More</ArrowLink>
            </span>
          ) : (
            <p className="font-inter text-xs text-black-shade-4">
              {article?.date}
            </p>
          )}
        </NavLink>
      </motion.div>
    </AnimatePresence>
  );
}

export default BlogCard;
