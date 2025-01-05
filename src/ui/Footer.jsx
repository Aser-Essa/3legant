import { Link, NavLink } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { TbBrandYoutube } from "react-icons/tb";
import { motion } from "motion/react";
import TextAnimation from "./TextAnimation";
import SlideInFromLeftAnimation from "./SlideInFromLeftAnimation";

function Footer() {
  return (
    <>
      <div className="h-[249px] bg-black-shade-1 px-[160px] py-20 pb-8 max-lg:px-10 max-md:h-auto max-sm:h-auto max-sm:px-8 max-sm:py-12">
        <div className="flex items-center justify-between max-sm:flex-col">
          <div className="flex items-center divide-x-[1px] divide-black-shade-4 max-sm:mb-10 max-sm:flex-col max-sm:divide-x-0 max-sm:divide-y-[1px]">
            <div className="pr-8 text-2xl font-medium leading-[24px] text-white max-sm:pb-4 max-sm:pr-0">
              <Link to={"/"} className="flex">
                <TextAnimation text="3legant" />
                <motion.span
                  className="text-black-shade-4"
                  initial={{ opacity: 0, translateX: 0 }}
                  whileInView={{ opacity: 1, translateX: [0, 5, 0] }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  .
                </motion.span>
              </Link>
            </div>
            <div className="pl-8 font-inter text-sm leading-[22px] text-white-shade-1 max-sm:pl-0 max-sm:pt-4 max-sm:font-normal">
              <TextAnimation text="Gift & Decoration Store" />
            </div>
          </div>
          <ul className="flex items-center gap-10 text-nowrap font-inter text-sm font-medium text-[#fefefe] max-sm:flex-col max-sm:gap-8 max-sm:font-normal">
            <li>
              <NavLink to={"/"}>
                <SlideInFromLeftAnimation duration={0.5} delay={0.1}>
                  <p className="text-[#fefefe]">Home</p>
                </SlideInFromLeftAnimation>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/shop"}>
                <SlideInFromLeftAnimation duration={0.5} delay={0.2}>
                  <p className="text-[#fefefe]">Shop</p>
                </SlideInFromLeftAnimation>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}>
                <SlideInFromLeftAnimation duration={0.5} delay={0.3}>
                  <p className="text-[#fefefe]">Blog</p>
                </SlideInFromLeftAnimation>
              </NavLink>
            </li>
            <li className="text-[#fefefe]">
              <NavLink to={"/contact-us"}>
                <SlideInFromLeftAnimation duration={0.5} delay={0.4}>
                  <p className="text-[#fefefe]">Contact Us</p>
                </SlideInFromLeftAnimation>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="mt-[49px] flex items-center justify-between max-md:flex-col max-md:gap-4 max-sm:mt-10 max-sm:flex-col-reverse">
          <div className="flex items-center gap-7 text-nowrap py-4 text-xs leading-5 text-[#fefefe] max-sm:flex-col-reverse max-sm:pb-0 max-sm:pt-8">
            <SlideInFromLeftAnimation duration={0.5} delay={0.1}>
              <p className="text-nowrap text-white-shade-1 max-sm:text-xs max-sm:font-normal">
                Copyright © 2023 3legant. All rights reserved
              </p>
            </SlideInFromLeftAnimation>
            <div className="flex items-center justify-center gap-7 text-nowrap">
              <SlideInFromLeftAnimation duration={0.5} delay={0.25}>
                <p className="text-nowrap font-semibold">Privacy Policy</p>
              </SlideInFromLeftAnimation>
              <SlideInFromLeftAnimation duration={0.5} delay={0.35}>
                <p className="text-nowrap font-semibold">Terms of Use</p>
              </SlideInFromLeftAnimation>
            </div>
          </div>
          <div className="flex items-center gap-6 text-[#fefefe]">
            <Link to={"https://www.instagram.com/asser_essa_/"} target="_blank">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <FiInstagram className="h-6 w-6" />
              </motion.div>
            </Link>
            <Link
              to={"https://www.facebook.com/profile.php?id=100004553357437"}
              target="_blank"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, delay: 0.45 }}
                viewport={{ once: true }}
              >
                <FiFacebook className="h-6 w-6" />
              </motion.div>
            </Link>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <TbBrandYoutube className="h-6 w-6" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
